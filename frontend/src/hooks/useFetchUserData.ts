import { useEffect } from "react";
import {
    tradeHistoryAtom,
    selectedUserIdAtom,
    userPositionsAtom,
    activePositionCoinsAtom,
    historicalTradedCoinsAtom,
    isLoadingAtom,
    coinAtom,
    userSummaryAtom,
} from "../components/atoms/atoms";
import { useAtomValue, useSetAtom } from "jotai";

import { Positions } from "../types/Positions";
import { UserPosition } from "../types/UserPositions";
import { TradeApiResponse } from "../types/TradeApiResponse";
import { fetchJson } from '../utilities/fetchJson';

const useFetchUserData = () => {
    const selectedUserId = useAtomValue(selectedUserIdAtom);
    const setTradeHistory = useSetAtom(tradeHistoryAtom);
    const setHistoricalTradedCoins = useSetAtom(historicalTradedCoinsAtom);
    const setPositions = useSetAtom(userPositionsAtom);
    const setActivePositionCoins = useSetAtom(activePositionCoinsAtom);
    const setIsLoading = useSetAtom(isLoadingAtom);
    const setCoin = useSetAtom(coinAtom);
    const setUserSummary = useSetAtom(userSummaryAtom);

    // 現在のポジションを取得
    const parseActivePositions = (positions: Positions): [UserPosition[], string[]] => {
        const accountValue = parseFloat(positions.crossMarginSummary.accountValue);
        const userPositions: UserPosition[] = [];
        const activePositionCoins: string[] = [];

        positions.assetPositions.forEach((position) => {
            const positionValue = parseFloat(position.position.positionValue);
            const positionPercentage = (positionValue / accountValue) * 100;
            userPositions.push({
                coin: position.position.coin,
                size: parseFloat(position.position.szi),
                price: parseFloat(position.position.entryPx),
                leverage: Math.round(positionPercentage),
                pnl: Math.round(parseFloat(position.position.unrealizedPnl)),
            });
            activePositionCoins.push(position.position.coin);
        });

        return [userPositions, activePositionCoins];
    };


    const fetchUserData = async () => {
        if (!selectedUserId) {
            console.error("Invalid user ID");
            return;
        }

        try {
            setIsLoading(true);
            const result = await fetchJson<TradeApiResponse>('/trade', { userId: selectedUserId });
            if (result) {
                const [userPositions, activePositionCoins] = parseActivePositions(result.positions);
                setTradeHistory(result.tradeHistory);
                setHistoricalTradedCoins(result.tradeHistory.coinList);
                setActivePositionCoins(activePositionCoins);
                setPositions(userPositions);
                setCoin(result.tradeHistory.coinList[0] ? result.tradeHistory.coinList[0] : "BTC");
                setUserSummary(result.positions.marginSummary);
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);

    };

    useEffect(() => {
        fetchUserData();
    }, [selectedUserId]);

    return { fetchUserData };
};
export default useFetchUserData;