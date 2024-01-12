"use client";

import { useState } from "react";
const FlipCard = ({ data, handleChoice, isFlipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(data);
    }
  };

  return (
    <div className="group h-64 w-64 [perspective:1000px]" onClick={handleClick}>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 ${isFlipped
          ? "[transform-style:preserve-3d]"
          : "[transform:rotateY(180deg)]"
          } `}
      >
        <div className="absolute inset-0">
          <img
            className="transition-all duration-500 h-full w-full rounded-xl  object-cover shadow-xl shadow-black/40 "
            src="https://cdn.pixabay.com/photo/2015/03/20/00/19/smiley-681575_1280.jpg"
            alt=""
          />
        </div>
        <div
          className={`absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] ${isFlipped
            ? "[transform:rotateY(0deg)]"
            : "[transform:rotateY(180deg)]"
            } `}
        >
          <div className="flex min-h-full flex-col  items-center justify-center">
            {/* <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
              <h1 className="text-3xl font-bold ">{data.number}</h1>
            </div> */}
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                <h1 className="text-3xl font-bold ">{data.number}</h1>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
