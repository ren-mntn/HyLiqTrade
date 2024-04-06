import React from "react";
import ToggleButton from "../atoms/ToggleButton";
import { TimeFrame } from "../../types/TimeFrame";

interface TimeFrameSelectorProps {
  timeFrame: TimeFrame;
  setTimeFrame: (timeFrame: TimeFrame) => void;
}

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({
  timeFrame,
  setTimeFrame,
}) => {
const timeFrames: { label: string; value: TimeFrame }[] = [
  { label: "日", value: "day" },
  { label: "週", value: "week" },
  { label: "月", value: "month" },
  { label: "全", value: "allTime" },
];
  return (
    <div>
      {timeFrames.map(({ label, value }) => (
        <ToggleButton
          key={value}
          label={label}
          isActive={timeFrame === value}
          onClick={() => setTimeFrame(value)}
        />
      ))}
    </div>
  );
};

export default TimeFrameSelector;
