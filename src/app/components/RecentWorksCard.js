import { BsThreeDots } from "react-icons/bs";

const RecentWorksCard = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded-xl overflow-hidden w-full shadow-md group">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Title */}
      <div className="absolute bottom-3 left-3 sm:left-5 text-white font-medium text-xs sm:text-sm">
        {title}
      </div>

      {/* Dots Icon */}
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-[#111111] text-lg sm:text-xl bg-white rounded-full p-1 cursor-pointer hover:bg-black/60 transition-colors duration-200">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default RecentWorksCard;
