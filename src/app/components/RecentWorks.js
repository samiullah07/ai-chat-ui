import RecentWorksCard from "./RecentWorksCard";

const cards = [
  {
    imageUrl: "/images/recent-works-1.png",
    title: "A peaceful village",
  },
  {
    imageUrl: "/images/recent-works-2.png",
    title: "Cute girl with cute flowers",
  },
  {
    imageUrl: "/images/recent-works-3.png",
    title: "A quite home with butterflies",
  },
];

const RecentWorks = () => {
  return (
    <div className=" hidden md:block">
      <h1 className="text-2xl mb-5 font-semibold ">Recent Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <RecentWorksCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
