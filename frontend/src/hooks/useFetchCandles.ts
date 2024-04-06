import { useCallback, useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import {
    rawChartDataAtom,
    coinAtom,
    timeFrameAtom,
} from '../components/atoms/atoms';
import { RawCandle } from '../types/RawCandle';
import { fetchJson } from '../utilities/fetchJson';

const useFetchCandles = () => {
    const coin = useAtomValue(coinAtom);
    const timeFrame = useAtomValue(timeFrameAtom);
    const setRawChartData = useSetAtom(rawChartDataAtom);

    const fetchCandles = async () => {
        try {
            const result = await fetchJson<RawCandle[]>('/fetch-candle', { coin: coin, timeFrame: timeFrame.toString() });
            if (result) {
                setRawChartData(result);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCandles();
    }, [timeFrame, coin]);

    return { fetchCandles };
};

export default useFetchCandles;
