"use client";
import React, { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatLeft from "../components/ChatLeft";
import ChatRight from "../components/ChatRight";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import ChatCard from "../components/ChatCard";

function Page() {
  const ChatUsers = [
    { name: "Thanos", image: "/images/thanos-img.png" },
    { name: "Jane Smith", image: "/images/thanos-img.png" },
  ];
  return (
    <div>
      <div className="md:hidden px-4">
        <div className="flex items-center w-full relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 rounded-full bg-[#0C031B] border border-[#2E2D32] placeholder:text-white text-white outline-none"
          />
          <IoSearchSharp size={24} className="absolute right-4 top-3.5" />
        </div>
        <div className="space-y-2 mt-6 px-2">
          {ChatUsers.map((user, index) => (
            <div key={index}>
              <ChatCard item={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex  relative">
        {/* Left Side */}
        <div className={`w-full transition-all duration-300`}>
          <ChatLeft />
        </div>

        {/* Right Side */}
        <div className={`transition-all duration-300 w-[40%]  overflow-hidden`}>
          <ChatRight />
        </div>
      </div>
    </div>
  );
}

export default Page;
