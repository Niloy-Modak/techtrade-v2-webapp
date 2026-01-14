"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const FavoriteBtn = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 hover:scale-110 active:scale-95 transition-transform"
    >
      <Heart
        className={`
          w-6 h-6 transition-all duration-300 cursor-pointer
          ${liked ? "fill-red-500 stroke-red-500" : " fill-gray-100 stroke-[#a8a8a8a8]"}
        `}
      />
    </button>
  );
};

export default FavoriteBtn;
