import useFetchCandles from "../../hooks/useFetchCandles";
import useFetchUserData from "../../hooks/useFetchUserData";
import ToggleButton from "../atoms/ToggleButton";

const ReloadButton = () => {
  const { fetchUserData } = useFetchUserData();
  const { fetchCandles } = useFetchCandles();

  const handleReload = () => {
    fetchCandles();
    fetchUserData();
  };

  return <ToggleButton label="更新" isActive={true} onClick={handleReload} />;
};

export default ReloadButton;
