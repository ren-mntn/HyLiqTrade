import React from "react";
import { useAtom, useAtomValue } from "jotai";

import config from "../../config";
import ToggleButton from "../atoms/ToggleButton";
import { UserIdsAtom, isLoadingAtom, selectedUserIdAtom } from "../atoms/atoms";

const UserIdList = () => {
  const userIds = useAtomValue(UserIdsAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const [selectedUserId, setSelectedUserId] = useAtom(selectedUserIdAtom);

  return (
    <div className="p-4">
      {userIds.map((userId) => (
        <ToggleButton
          key={userId}
          label={userId === config.myId ? "My Id" : userId}
          isActive={selectedUserId === userId}
          onClick={() => setSelectedUserId(userId)}
          disabled={isLoading}
        />
      ))}
    </div>
  );
};

export default React.memo(UserIdList);
