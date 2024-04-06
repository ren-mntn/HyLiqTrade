import React from "react";

interface InputFieldProps {
  label: string;
  value: number | string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <label
        htmlFor="timeFrame"
        className="mr-2 text-sm font-medium text-gray-700"
      >
        {label}:
      </label>
      <input
        type={type}
        id="timeFrame"
        value={value}
        onChange={onChange}
        min="1"
        className="
          mt-1
          block
          px-3
          py-2
          bg-white
          border
          border-gray-300
          rounded-md
          shadow-sm
          focus:outline-none
          focus:ring-indigo-500
          focus:border-indigo-500
          sm:text-sm
        "
      />
    </div>
  );
};

export default InputField;
