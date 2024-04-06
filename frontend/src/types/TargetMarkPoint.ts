export interface TargetMarkPoint {
    name: string;
    xAxis: string;
    yAxis: string | number;
    symbolSize: number[];
    itemStyle: {
        color: string
    },
    label: {
        show: boolean;
        formatter: string;
        color: string;
    };
}