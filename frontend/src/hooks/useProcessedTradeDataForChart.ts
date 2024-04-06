import {
    tradeHistoryAtom,
    coinAtom,
    timeFrameAtom,
    TargetMarkPointListAtom,
    positionChangesAtom,
    chartLabelsAtom,
    rawChartDataAtom,
    isLoadingAtom
} from "../components/atoms/atoms";
import { useAtomValue, useSetAtom } from "jotai";

import { Position } from "../types/Position";
import { formatDate } from "../utilities/formatDate";
import { useEffect, useId } from "react";

const colorMap: { [key in Position['dir']]?: string } = {
    'Open Long': 'green',
    'Open Short': 'red',
    'Close Short': 'blue',
    'Close Long': 'orange'
};

const useProcessedTradeDataForChart = () => {
    const tradeHistory = useAtomValue(tradeHistoryAtom);
    const coin = useAtomValue(coinAtom);
    const timeFrame = useAtomValue(timeFrameAtom);
    const chartLabels = useAtomValue(chartLabelsAtom);
    const setTargetMarkPointList = useSetAtom(TargetMarkPointListAtom);
    const setPositionChanges = useSetAtom(positionChangesAtom);
    const rawChartData = useAtomValue(rawChartDataAtom);
    const setIsLoading = useSetAtom(isLoadingAtom);

    // チャートのtimestampと一致させないと、マーカーが正しく表示されないため、timestampを丸める
    const roundToNearestTimeInterval = (date: Date, timeFrame: number): Date => {
        const ms = 1000 * 60 * timeFrame;
        return new Date(Math.round(date.getTime() / ms) * ms);
    };

    const calculateChartMarkPoints = (positions: Position[]) => {
        return positions.map(position => {
            const color = colorMap[position.dir] || '#555';
            return {
                name: position.dir,
                xAxis: formatDate(roundToNearestTimeInterval(new Date(position.timestamp), timeFrame)),
                yAxis: position.price,
                symbolSize: [15, 10],
                itemStyle: { color },
                label: { show: true, formatter: "", color }
            };
        });
    };

    const calculateCumulativePositionSizes = (positions: Position[]) => {
        let currentPnl = 0;

        const changes = positions.map(position => {
            return {
                timestamp: formatDate(roundToNearestTimeInterval(new Date(position.timestamp), timeFrame)),
                openPositionSize: position.size,
                pnl: currentPnl += (position.closedPnl - position.fee)
            };
        });

        // 最後のラベルの情報がないとグラフが正しく表示されないため、最後のラベルの情報を追加
        const lastLabel = chartLabels[chartLabels.length - 1];
        const lastTimestamp = changes[changes.length - 1]?.timestamp;
        if (lastTimestamp && lastTimestamp !== lastLabel) {
            changes.push({ timestamp: lastLabel, openPositionSize: positions[positions.length - 1].size, pnl: currentPnl });
        }

        return changes;
    };


    const processTradeDataForChart = () => {
        if (!tradeHistory) return;

        const filteredPositions = Object.values(tradeHistory.positions)
            .filter((position: Position) => position.coin === coin)
            .sort((a: Position, b: Position) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

        setTargetMarkPointList(calculateChartMarkPoints(filteredPositions));
        if (filteredPositions.length === 0) {
            setPositionChanges([]);
            return
        }
        setPositionChanges(calculateCumulativePositionSizes(filteredPositions));
    }

    useEffect(() => {
        setIsLoading(true);
        processTradeDataForChart();
        setIsLoading(false);

    }, [rawChartData]);
}

export default useProcessedTradeDataForChart; 
