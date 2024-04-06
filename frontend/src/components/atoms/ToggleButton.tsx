interface ToggleButtonProps {
  label: string;
  isActive: boolean;
  isHighlighted?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  isActive,
  isHighlighted = false,
  disabled = false,
  onClick,
}) => (
  <button
    className={`px-2 py-1 m-1 border-2 ${
      isActive
        ? "border-blue-500 bg-blue-500 text-white"
        : isHighlighted
        ? "border-green-300 bg-green-300 text-black"
        : disabled
        ? "border-gray-300 bg-gray-300 text-black"
        : "border-gray-300 bg-white text-black"
    } rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-300 hover:text-black overflow-hidden text-overflow-ellipsis whitespace-nowrap`}
    onClick={onClick}
    style={{ maxWidth: "100%" }}
    disabled={disabled}
  >
    {label}
  </button>
);

export default ToggleButton;
