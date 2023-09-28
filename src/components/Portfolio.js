import React from "react";

export default function Portfolio() {
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="text-xl py-6">Check out some of my work here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-500 rounded-lg">
              <img src="" alt="" />
            </div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}
