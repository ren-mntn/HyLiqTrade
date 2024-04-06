import { useRef, useState } from "react";

import { TimeFrame } from "../../types/TimeFrame";
import { SortType } from "../../types/SortType";
import SortTypeSelector from "./SortTypeSelector";
import TimeFrameSelector from "./TimeFrameSelector";
import InModalButtons from "./InModalButtons";

import useOutsideClick from "../../hooks/useOutsideClick";
import useFetchLeaderBoard from "../../hooks/useFetchLeaderBoard";
import useSetRegisteredIds from "../../hooks/useSetRegisteredIds";

const SearchModal = () => {
  const [sortType, setSortType] = useState<SortType>("roi");
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("day");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = () => setIsModalOpen(false);
  useOutsideClick(modalRef, closeModal);

  const fetchLeaderBoard = useFetchLeaderBoard();
  const handleLeaderBoardSearch = async () => {
    closeModal();
    await fetchLeaderBoard(sortType, timeFrame);
  };

  const setRegisteredIds = useSetRegisteredIds();
  const handleSetRegisteredUserIds = () => {
    closeModal();
    setRegisteredIds();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="px-4 py-1 mt-4 border-2 border-blue-500 bg-blue-500 text-white rounded-xl transition-colors duration-300 hover:bg-blue-600 hover:border-blue-800"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        LB取得
      </button>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="pt-8 fixed inset-0 bg-gray-400 bg-opacity-90 overflow-y-auto h-72 w-48 rounded-xl space-y-2" // モーダルの背景
        >
          <SortTypeSelector sortType={sortType} setSortType={setSortType} />
          <TimeFrameSelector
            timeFrame={timeFrame}
            setTimeFrame={setTimeFrame}
          />

          <InModalButtons
            onSearch={handleLeaderBoardSearch}
            onRegister={handleSetRegisteredUserIds}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default SearchModal;
