interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserIdInputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  // `label`プロパティはこのコンポーネントでは使用しないので省略
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="
          mt-1
          block
          w-full
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
        placeholder="Enter User ID"
      />
    </div>
  );
};

export default UserIdInputField;
