import useFetchCandles from "../../hooks/useFetchCandles";
import useProcessedTradeDataForChart from "../../hooks/useProcessedTradeDataForChart";
import ReloadButton from "../Molecules/ReloadButton";
import SelectCoinButton from "../Molecules/SelectCoinButton";
import SelectTimeFrameButton from "../Molecules/SelectTimeFrameButton";

const SelectOrganisms = () => {
  useFetchCandles();
  useProcessedTradeDataForChart();

  return (
    <>
      <div className="flex justify-between items-center pt-4">
        <div className="w-1/5 flex justify-center">
          <ReloadButton />
        </div>
        <div className="w-3/5 flex justify-center">
          <SelectTimeFrameButton />
        </div>
        <div className="w-1/3"></div>
      </div>
      <SelectCoinButton />
    </>
  );
};

export default SelectOrganisms;
