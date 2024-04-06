import React, { useCallback } from "react";
import { useAtom } from "jotai";

import { timeFrameAtom } from "../atoms/atoms";
import ToggleButton from "../atoms/ToggleButton";

const SelectTimeFrameButton = () => {
  const timeFrameList = [1, 3, 5, 15, 30, 60, 240, 1440];
  const [selectedTimeFrame, setSelectedTimeFrame] = useAtom(timeFrameAtom);

  const handleTimeFrameChange = useCallback(
    (timeFrame: number) => {
      setSelectedTimeFrame(timeFrame);
    },
    [setSelectedTimeFrame]
  );

  return (
    <>
      {timeFrameList.map((timeFrame) => (
        <ToggleButton
          key={timeFrame}
          label={`${timeFrame}m`}
          isActive={selectedTimeFrame === timeFrame}
          onClick={() => handleTimeFrameChange(timeFrame)}
        />
      ))}
    </>
  );
};

export default React.memo(SelectTimeFrameButton);
