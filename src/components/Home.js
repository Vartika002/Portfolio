import React from "react";
import myImage from "../Assests/portfolio-personal.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-7xl font-bold text-white">
              I'm a React Developer
            </h2>
            <p className="py-4 sm text-white">
              As a year-old experience in React.js developer, I posses a strong
              foundation in HTML,CSS,and JavaScript. In my current job, I am a
              part of six-membered team that has created web application for
              Payroll Management. I actively participated in the design and
              development of more than 200 screens, as well as in resolving
              bugs.
            </p>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-cyan-800 cursor-pointer">
                Portfolio{" "}
                <span className="group-hover:rotate-90">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={myImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
