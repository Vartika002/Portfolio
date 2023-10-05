import React, { useEffect } from "react";
import myImage from "../Assests/portfolio-personal.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";

export default function Home() {
  // const typedRef = React.createRef();

  // useEffect(() => {
  //   const options = {
  //     strings: ["React Developer", "Web Developer", "Creative Thinker"],
  //     typeSpeed: 70,
  //     backSpped: 30,
  //     startDelay: 500,
  //     backDelay: 1000,
  //     showCursor: true,
  //   };
  //   const typed = new Typed(".typed-text", options);
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <p
              // ref={typedRef}
              className="text-xl sm:text-7xl font-bold text-white"
            >
              {/* I'm a <span className="typed-text"></span> */}
              I'm a React Developer
            </p>
            <p className="py-4 sm text-white text-xl">
              As a year-old experience in React.js developer, I posses a strong
              foundation in HTML,CSS,and JavaScript. In my current job, I am a
              part of six-membered team that has created web application for
              Payroll Management. I actively participated in the design and
              development of more than 200 screens, as well as in resolving
              bugs.
            </p>
            <div>
              <Link
                to="portfolio"
                duration
                smooth={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-cyan-800 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
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
