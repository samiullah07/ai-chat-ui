import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const RecentWorksCard = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded-xl overflow-hidden w-full  shadow-md group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Overlay Gradient */}

      {/* Title */}
      <div className="absolute bottom-3 left-5 text-white font-medium text-sm">
        {title}
      </div>

      {/* Dots Icon */}
      <div className="absolute top-3 right-3 text-[#111111] text-xl bg-white rounded-full p-1 cursor-pointer hover:bg-black/60">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default RecentWorksCard;
