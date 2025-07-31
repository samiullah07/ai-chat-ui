import RecentWorks from "./components/RecentWorks";
import FeaturedImages from "./components/FeaturedImages";

export default function Home() {
  return (
    <div className="p-6 pb-20 md:pb-5">
      <RecentWorks />
      <FeaturedImages/>
    </div>
  );
}
