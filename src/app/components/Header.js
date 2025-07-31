"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { IoSearch, IoSearchSharp } from "react-icons/io5";

const languages = [
  { code: "en", label: "English", flag: "/flags/gb.png" },
  { code: "fr", label: "French", flag: "/flags/fr.webp" },
  { code: "de", label: "German", flag: "/flags/de.png" },
  { code: "pk", label: "Urdu", flag: "/flags/pk.webp" },
];

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const langRef = useRef(null);
  const profileRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full py-3 p-6  flex justify-between items-center ">
      {/* Left: Search Bar */}
      <div className="flex items-center w-1/2 max-w-md relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-3 rounded-full bg-[#0C031B] border border-[#2E2D32] placeholder:text-white text-white outline-none"
        />
        <IoSearchSharp size={24} className="absolute right-4 top-3.5" />
      </div>

      {/* Right: Language Selector & Profile */}
      <div className="flex items-center gap-6">
        {/* Language Dropdown */}
        <div className="relative" ref={langRef}>
          <div
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-2 cursor-pointer border border-[#3F0187] px-3 py-2 rounded-full"
          >
            <Image
              src="/flags/gb.png"
              alt="flag"
              width={100}
              height={100}
              className="rounded-full object-cover h-5 w-5"
            />
            <span className="text-sm">English</span>
            {!languageOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>

          {languageOpen && (
            <ul className="absolute left-0 mt-2 bg-[#3F0187] rounded-md shadow-lg z-50 border border-[#333] w-40">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-200 hover:bg-[#280056] cursor-pointer"
                  onClick={() => {
                    setLanguageOpen(false);
                  }}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={100}
                    height={100}
                    className="rounded-full object-cover h-5 w-5"
                  />
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full object-cover h-10 w-10 border border-blue-400"
            />
            {!profileOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>

          {profileOpen && (
            <ul className="absolute right-0 mt-2 bg-[#3F0187] rounded-md shadow-lg z-50 border border-[#333] w-40">
              <li className="px-4 py-2 text-sm text-gray-200 hover:bg-[#280056] cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 text-sm text-gray-200 hover:bg-[#280056] cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 text-sm text-red-300 hover:bg-[#280056] cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
