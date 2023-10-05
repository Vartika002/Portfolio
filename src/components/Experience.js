import React from "react";
import html from "../Assests/html.png";
import css from "../Assests/css.png";
import javascript from "../Assests/javascript.png";
import github from "../Assests/github.png";
import tailwind from "../Assests/tailwind.png";
import reactImg from "../Assests/react.png";

export default function Experience() {
  const techStacks = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImg, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <>
      <div
        name="experinece"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="text-xl py-6">
              These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-12 px-6 sm:px-8">
            {techStacks.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 rounded-lg py-6 ${style}`}
              >
                <img src={src} alt="iconImg" className="w-40 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
