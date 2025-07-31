import Image from "next/image";
import { useState } from "react";
import { FaBookmark, FaHeart } from "react-icons/fa";

const FeaturedCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <div
          className={`relative rounded-xl h-[400px] overflow-hidden cursor-pointer border transition-all duration-300 ${
            selected ? "border-[2px]" : "border-transparent"
          }`}
          style={{ borderColor: selected && "#3F0187" }}
          onClick={() => setSelected(!selected)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          {/* Hover Overlay */}
          {hovered && (
            <div className="absolute top-0  left-0 w-full h-full bg-black/30 flex items-end  justify-between px-4 py-4 text-white">
              <div className="flex items-center justify-between w-full">
                <span>{item.title}</span>
                <div className="flex gap-2 items-center">
                  <button className="bg-white text-black p-2 rounded-full text-lg hover:bg-gray-200">
                    <FaHeart className="text-[#ED2E1B]" />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full text-lg hover:bg-gray-200">
                    <FaBookmark className="text-[#B0B0B0]" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center mt-2 px-1  text-white text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-400 rounded-full" />
            <span>{item.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart className="text-[#ED2E1B]" />
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          className={`relative rounded-3xl h-[260px] overflow-hidden cursor-pointer border transition-all duration-300 ${
            selected ? "border-[2px]" : "border-[#1C1D21]"
          }`}
          style={{ borderColor: selected && "#3F0187" }}
          onClick={() => setSelected(!selected)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-[55%] object-cover"
          />
          <div className="p-4 ">
            <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
            <p className="text-xs">{item.description}</p>
            <p className="text-xs flex items-center gap-1 mt-2 absolute bottom-2 left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M6 11C6.99846 10.9999 7.96851 10.6677 8.75744 10.0557C9.54637 9.44372 10.1094 8.58675 10.3578 7.61969C10.6062 6.65264 10.526 5.63042 10.1297 4.71398C9.73344 3.79753 9.04362 3.0389 8.16886 2.55753C7.29411 2.07615 6.2841 1.89937 5.29785 2.05502C4.3116 2.21066 3.40512 2.68989 2.72112 3.41726C2.03713 4.14463 1.61446 5.07882 1.51966 6.07276C1.42487 7.06671 1.66333 8.06396 2.1975 8.90751L1.5 11L3.5925 10.3025C4.31229 10.7593 5.14748 11.0013 6 11Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              4.0m
            </p>
          </div>
        </div>

        <p className="text-end mt-2 text-sm px-1 ">@{item.author}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
