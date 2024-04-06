import { EChartsOption } from "echarts-for-react";
import { useAtomValue } from "jotai";
import { TargetMarkPointListAtom, chartLabelsAtom, formattedChartDataAtom, positionChangesAtom } from "../components/atoms/atoms";

interface ChartData {
    positionData: (string | number)[][];
    closedPnlData: (string | number)[][];
}

const useChartOptions = (
): EChartsOption => {
    const formattedChartData = useAtomValue(formattedChartDataAtom);
    const targetMarkPointList = useAtomValue(TargetMarkPointListAtom);
    const positionChanges = useAtomValue(positionChangesAtom);
    const chartLabels = useAtomValue(chartLabelsAtom);

    const chartData = positionChanges.reduce<ChartData>((acc, item) => {
        acc.positionData.push([item.timestamp, item.openPositionSize]);
        acc.closedPnlData.push([item.timestamp, item.pnl]);
        return acc;
    }, { positionData: [], closedPnlData: [] });

    const options: EChartsOption = {
        grid: [
            { top: '5%', height: '45%' }, // 価格チャートを表示するグリッドエリア
            { top: '53%', height: '15%' }, // ポジション数を表示するグリッドエリア
            { top: '75%', height: '13%' }, // PnLを表示するグリッドエリア
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross', // クロスヘアの表示
                label: {
                    show: true, // 軸ポインタのラベル表示は有効
                }
            },
            formatter: () => {
                // データ表示をカスタマイズ
                // ここでは空文字列を返してデータ表示を行わない
                return '';
            }
        },
        axisPointer: {
            link: [{ xAxisIndex: 'all' }]
        },

        Animation: false, 

        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
                minValueSpan: 10,
                xAxisIndex: [0, 1, 2], // 内部ズームが両方のxAxisに適用されるように修正
            },
            {
                show: true,
                type: 'slider',
                bottom: 15,
                start: 0,
                end: 100,
                minValueSpan: 10,
                xAxisIndex: [0, 1, 2], // スライダーズームが両方のxAxisに適用されるように修正
            }
        ],
        xAxis: [
            { type: 'category', gridIndex: 0, data: chartLabels, axisLabel: { show: false }, axisPointer: { label: { show: false }, } },
            { type: 'category', gridIndex: 1, data: chartLabels, axisLabel: { show: false }, axisPointer: { label: { show: false }, }, },
            { type: 'category', gridIndex: 2, data: chartLabels }, // PnL用のx軸
        ],
        yAxis: [
            { type: 'value', gridIndex: 0, scale: true, position: 'right' },
            { type: 'value', gridIndex: 1, position: 'right' },
            { type: 'value', gridIndex: 2, position: 'right' },
        ],
        series: [
            {
                name: 'Price',
                type: "candlestick",
                data: formattedChartData,
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: 'gray', // 陽線の色
                        color0: 'gray', // 陰線の色
                        borderColor: 'gray', // 陽線のボーダー色
                        borderColor0: 'gray', // 陰線のボーダー色
                    },
                },
                markPoint: {
                    data: targetMarkPointList || []
                },
            },
            {
                name: 'Closed PnL',
                type: 'line',
                data: chartData.closedPnlData,
                xAxisIndex: 1,
                yAxisIndex: 1,
                smooth: false, // 線を滑らかにする場合
                lineStyle: {
                    color: 'red', // 線の色を指定
                },
            },
            {
                name: 'Position',
                type: "line",
                data: chartData.positionData,
                xAxisIndex: 2,
                yAxisIndex: 2,
                areaStyle: {},
                step: 'end',

            },

        ],
    };

    return options;
};

export default useChartOptions;