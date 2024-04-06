import MainContainer from "./components/Organisms/MainContainer";
import SelectOrganisms from "./components/Organisms/SelectOrganisms";
import UserIdSelector from "./components/Organisms/UserIdSelector";

function App() {
  return (
    <div className="flex max-w-full min-h-screen">
      <div className="w-1/12">
        <UserIdSelector />
      </div>
      <div className="flex flex-col w-11/12">
        <SelectOrganisms />
        <MainContainer />
      </div>
    </div>
  );
}
export default App;
