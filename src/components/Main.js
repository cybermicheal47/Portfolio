import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import ReactTyped from "react-typed";
const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-[#0a192f]">
      {" "}
      // container css
      <div
        className=" max-w-[1000px]:  mx-auto  flex flex-col justify-center items-center h-full "
        style={{ color: "white" }}
      >
        <p className="text-blue-800">
          {" "}
          My Name is{" "}
          <span className="text-4xl textsizesm sm:text-5xl font-bold text-[white]  pl-6 md:text-6xl lg:text-7xl">
            {" "}
            Oscar
          </span>{" "}
        </p>
        <h1 className="textsizesm text-4xl sm:text-5xl  ml-auto mr-auto  font-bold text-[#8892b0] md:text-6xl lg:text-7xl">
          I'm a{" "}
          <ReactTyped
            strings={["Fullstack Developer"]}
            typeSpeed={100}
            loop={false}
            cursorChar=""
            // backSpeed={20}
            // showCursor={true}
          />
        </h1>{" "}
        <p className="pl-5 pr-5  sm:text-[#dadde6] py-4 max-w-[700px]">
          My expertise lies in the art of translating design concepts into
          responsive and interactive web interfaces. I understand the importance
          of pixel-perfect precision and ensuring that every element on the
          screen not only looks great but also functions seamlessly.
        </p>
        <div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="text-white flex items-center py-3 px-4 border-2 hover:bg-blue-600 hover:border-blue-600">
              View Projects <HiArrowNarrowDown className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
