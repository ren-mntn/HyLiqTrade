import React from "react";

interface InModalButtonsProps {
  onSearch: () => void;
  onRegister: () => void;
  onClose: () => void;
}

const InModalButtons: React.FC<InModalButtonsProps> = ({
  onSearch,
  onRegister,
  onClose,
}) => {
  const buttons = [
    { text: "取得", onClick: onSearch, color: "blue" },
    { text: "登録済", onClick: onRegister, color: "blue" },
    { text: "閉じる", onClick: onClose, color: "red" },
  ];
  return (
    <div className="flex flex-col items-center space-y-2">
      {buttons.map(({ text, onClick, color }) => (
        <button
          key={text}
          onClick={onClick}
          className={`px-6 py-1 border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
            color === "blue"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default InModalButtons;
