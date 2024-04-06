import { useSetAtom } from 'jotai';

import { SortType } from '../types/SortType';
import { TimeFrame } from '../types/TimeFrame';
import { fetchJson } from '../utilities/fetchJson';
import { UserIdsAtom } from '../components/atoms/atoms';

const useFetchLeaderBoard = () => {
    const setUserIds = useSetAtom(UserIdsAtom);

    const fetchLeaderBoard = async (sortType: SortType, timeFrame: TimeFrame) => {
        try {
            const res = await fetchJson<string[]>('/fetch-leader-board', { sortType: sortType, timeFrame: timeFrame, limit: "100" });
            setUserIds(res)
        } catch (error) {
            console.error(error);
        }
    }

    return fetchLeaderBoard;
};

export default useFetchLeaderBoard;
