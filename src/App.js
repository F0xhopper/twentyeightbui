import SideBar from "./Components/sideBar";
import NextCall from "./Components/nextcall";
import CallThisMonth from "./Components/callthismonth";
import DetailingTopicBreakdown from "./Components/detailingTopicBreakdown";
function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="overviewContainer">
        <h1>Overview</h1>
        <NextCall />
        <CallThisMonth />
        <DetailingTopicBreakdown />
      </div>
    </div>
  );
}

export default App;
