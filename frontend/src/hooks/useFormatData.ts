import { useEffect, useMemo } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { chartLabelsAtom, formattedChartDataAtom, rawChartDataAtom } from '../components/atoms/atoms';
import { formatDate } from '../utilities/formatDate';

const useFormatData = () => {
    const rawChartData = useAtomValue(rawChartDataAtom);
    const setFormattedChartData = useSetAtom(formattedChartDataAtom);
    const setChartLabels = useSetAtom(chartLabelsAtom);

    useEffect(() => {
        const chartLabels: string[] = [];
        let chartData: number[][] = [];

        rawChartData.forEach((item) => {
            const time = new Date(item.t);
            const open = parseFloat(item.o);
            const high = parseFloat(item.h);
            const low = parseFloat(item.l);
            const close = parseFloat(item.c);

            chartData.push([open, close, low, high]);
            chartLabels.push(formatDate(time));
        });

        setFormattedChartData(chartData);
        setChartLabels(chartLabels);
    }, [rawChartData, setFormattedChartData, setChartLabels]);

};

export default useFormatData;
