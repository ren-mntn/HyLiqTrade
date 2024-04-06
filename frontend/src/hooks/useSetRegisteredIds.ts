import { useEffect } from "react";
import { useSetAtom } from "jotai";

import config from "../config";
import { UserIdsAtom } from "../components/atoms/atoms";

const useSetRegisteredIds = () => {
    const setUserIds = useSetAtom(UserIdsAtom);
    const userIds = config.userIds;
    const allUserIds = [
        config.myId,
        ...userIds.filter((id) => id !== config.myId),
    ];

    useEffect(() => {
        setUserIds(allUserIds);
    }, [userIds, config.myId]);

    const setRegisteredIds = () => {
        setUserIds(allUserIds);
    };

    return setRegisteredIds;
}

export default useSetRegisteredIds;