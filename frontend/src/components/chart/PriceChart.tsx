import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { CandlestickChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import useFormatData from "../../hooks/useFormatData";
import useChartOptions from "../../hooks/useChartOptions";
echarts.use([
  CandlestickChart,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
]);

const PriceChart = () => {
  useFormatData();
  const option = useChartOptions();

  return (
    <ReactECharts option={option} style={{ height: "600px", width: "100%" }} />
  );
};

export default PriceChart;
