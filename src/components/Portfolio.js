import React from "react";
import qrCodeComponent from "../Assests/Portfolio/qrCodeComponent.png";
import nftPreview from "../Assests/Portfolio/nftPreview.png";
import reactWeather from "../Assests/Portfolio/reactWeather.png";

export default function Portfolio() {
  const portfolis = [
    { id: 1, src: qrCodeComponent },
    { id: 2, src: nftPreview },
    { id: 3, src: reactWeather },
  ];

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white xl:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-[-80px]">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="text-xl py-6">Check out some of my work here</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolis.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
