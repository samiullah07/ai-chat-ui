"use client";
import { useState } from "react";
import FeaturedHeader from "./FeaturedHeader";
import FeaturedCard from "./FeaturedCard";

const featuredImages = [
  {
    id: 1,
    title: "Little girl & fish",
    description: "Welcome to No Limits Fig...",
    image: "/images/featuredImages1.png",
    author: "Jacob Joseph",
    likes: 100,
  },
  {
    id: 2,
    title: "Mermaid",
    description: "goth x jock: baby pro...",

    image: "/images/featuredImages2.png",
    author: "Emma Wylie",
    likes: 142,
  },
  {
    id: 3,
    title: "Girl at Lake",
    description: "Play some games, party, talk!!",

    image: "/images/featuredImages3.png",
    author: "Lucky Lee",
    likes: 270,
  },
  {
    id: 4,
    title: "Girl at Lake",
    description: "“Kaiser” | Countryh...",
    image: "/images/featuredImages4.png",
    author: "Lucky Lee",
    likes: 270,
  },
  {
    id: 5,
    title: "Girl at Lake",
    description: "“Kaiser” | Countryh...",
    image: "/images/featuredImages4.png",
    author: "Lucky Lee",
    likes: 270,
  },
];

const FeaturedImages = () => {
  const [selected, setSelected] = useState("All");

  return (
    <div className="md:mt-10">
      <h2 className="text-2xl font-semibold mb-5 hidden md:block">
        Featured Images
      </h2>
      <FeaturedHeader selected={selected} setSelected={setSelected} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredImages.map((item) => (
          <FeaturedCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedImages;
