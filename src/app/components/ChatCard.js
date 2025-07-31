import Image from "next/image";
import React from "react";

function ChatCard({ item }) {
  return (
    <div
      className="flex items-center gap-4 py-4 border-b border-[#1C1D21]  cursor-pointer "
    >
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-xl w-14 h-14"
      />
      <div>
        <h1 className="font-semibold">{item.name}</h1>
        <p className="text-xs flex items-center gap-2">
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
          3
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
