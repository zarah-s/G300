import GraphView from "./components/GraphView";
import MessageSection from "./components/MessageSection";
import NotificationSection from "./components/NotificaitonSection";
import OverviewCard from "./components/OverviewCard";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-faded font-[700]">Overview</h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5 my-10">
        <OverviewCard count={300} label="Number of students" />
        <OverviewCard count={300} label="Comments" />
        <OverviewCard count={300} label="Number of Messages" />
        <OverviewCard count={300} label="Number of students" />
      </div>

      <GraphView />
      <div className="border-2 border-fadedborder p-5 rounded-lg grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5">
        <MessageSection />
        <NotificationSection />
      </div>
    </div>
  );
};

export default HomePage;
