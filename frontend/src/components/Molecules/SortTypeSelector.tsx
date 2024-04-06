import React from "react";
import ToggleButton from "../atoms/ToggleButton";
import { SortType } from "../../types/SortType";

interface SortTypeSelectorProps {
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
}

const SortTypeSelector: React.FC<SortTypeSelectorProps> = ({
  sortType,
  setSortType,
}) => {
  const sortTypes: SortType[] = ["roi", "pnl"];
  return (
    <div className="flex justify-center pt-4">
      {sortTypes.map((type) => (
        <ToggleButton
          label={type.toUpperCase()} // ラベルを増やしたときは変更が必要　現状は大文字にしている
          isActive={sortType === type}
          onClick={() => setSortType(type)}
        />
      ))}
    </div>
  );
};

export default SortTypeSelector;
