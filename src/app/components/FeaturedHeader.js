const categories = [
  "All",
  "Cartoon",
  "Comic",
  "Wallpaper",
  "Pixel Art",
  "3D Art",
  "Animals",
];

const FeaturedHeader = ({ selected, setSelected }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-3 flex-nowrap  overflow-x-auto w-full mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`text-nowrap px-8 py-2.5 rounded-full text-white border-2 ${
              selected === cat ? "border-[#3F0187]" : " border-white"
            } transition`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHeader;
