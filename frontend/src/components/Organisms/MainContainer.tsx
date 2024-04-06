import PriceChart from "../chart/PriceChart";
import PositionsList from "../atoms/PositionsList";
import SummaryData from "../Molecules/SummaryData";

const MainContainer = () => {
  return (
    <>
      <PriceChart />
      <SummaryData />
      <PositionsList />
    </>
  );
};

export default MainContainer;
