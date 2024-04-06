import { useAtom } from "jotai";

import { selectedUserIdAtom } from "../atoms/atoms";

const UserIdInput = () => {
  const [selectedUserId, setSelectedUserId] = useAtom(selectedUserIdAtom);

  return (
    <input
      type="text"
      value={selectedUserId}
      onChange={(e) => setSelectedUserId(e.target.value)}
      placeholder="Enter User ID"
      className="text-input px-2 py-1 m-1 border-2 w-full mb-4 rounded-lg cursor-pointer transition-colors duration-300 overflow-hidden text-overflow-ellipsis whitespace-nowrap`"
    />
  );
};

export default UserIdInput;
