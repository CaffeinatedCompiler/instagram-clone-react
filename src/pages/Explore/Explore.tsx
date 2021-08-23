import ExploreRowCards from "../../components/ExploreRowCards/ExploreRowCards";
import ExploreVideoRow from "../../components/ExploreVideoRow/ExploreVideoRow";
import HomeBox from "../../components/HomeBox/HomeBox";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import "./Explore.scss";

export default function Explore() {
  return (
    <HomeBox>
      <div className="explore">
        <ExploreVideoRow />
        <ExploreRowCards />
        <ExploreRowCards />
        <ExploreRowCards />
        <BottomNavigation />
      </div>
    </HomeBox>
  );
};
