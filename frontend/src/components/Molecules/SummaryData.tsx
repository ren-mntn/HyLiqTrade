import { useAtomValue } from "jotai";
import { userSummaryAtom } from "../atoms/atoms";

const SummaryData = () => {
  const summaryData = useAtomValue(userSummaryAtom);
  return <div>{summaryData.accountValue}</div>;
};

export default SummaryData;
