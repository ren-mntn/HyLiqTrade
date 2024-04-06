import SearchModal from "../Molecules/SearchModal";
import UserIdList from "../Molecules/UserIdList";
import UserIdInput from "../Molecules/UserIdInput";
import useFetchUserData from "../../hooks/useFetchUserData";
import useSetRegisteredIds from "../../hooks/useSetRegisteredIds";

const UserIdSelector = () => {
  useSetRegisteredIds();
  useFetchUserData();

  return (
    <div className="h-full overflow-auto bg-gray-100 ">
      <UserIdInput />
      <SearchModal />
      <UserIdList />
    </div>
  );
};

export default UserIdSelector;
