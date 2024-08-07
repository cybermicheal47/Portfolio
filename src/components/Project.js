import React, { useState } from "react";
import House from "../assets/projects/HouseMarketplace.png";
import Landingpage from "../assets/projects/landingpagee.png";
import Store from "../assets/projects/ecom.png";
import cvv from "../assets/projects/cvv.png";
import githubfinder from "../assets/projects/githubfinder.png";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";

function Project() {
  const Projects = [
    {
      id: 1,
      image: House,
      title: "House Marketplace",
      description:
        "A platform to buy, sell and rent properties. it has CRUD functionality , authentication.",
      TechStack: "React.js Firebase and Git",
      demoLink: "https://housemarketplace-sigma.vercel.app",
      githubLink: "https://github.com/cybermicheal47/housemarketplace",
    },
    {
      id: 2,
      image: Landingpage,
      title: "Landing Page",

      description: "A simple and elegant landing page design.",
      TechStack: "html, css, javascript,Tailwind and Git",
      demoLink: "https://cybermicheal47.github.io/LandingPage/",
      githubLink: "https://github.com/cybermicheal47/LandingPage",
    },
    {
      id: 3,
      image: Store,
      "title": "Online Ecommerce Store",
      "description":
        "An ecommerce website with authentication, product browsing, cart functionality, and Paystack integration.",

      TechStack: "nodejs , express , Mongodb, Reactjs & Redux toolkit ",
      demoLink: "https://ecommern-mdks.onrender.com/",
      githubLink: "https://github.com/cybermicheal47/EcomMern2.0",
    },
    {
      id: 4,
      image: cvv,
      title: "CV Builder",
      description: "An application to build professional CVs.",
      TechStack: "Reactjs",
      demoLink: "https://cvbuilder-5eb5f.web.app/",
      githubLink: "https://github.com/cybermicheal47/cvbuilderReact",
    },
    {
      id: 5,
      image: githubfinder,
      title: "GitHub Finder",
      description: "A tool to search for GitHub profiles.",
      TechStack: "React.js , Material Ui , Daisy Ui , ContextApi",
      demoLink: "https://githubfinder-react-34od.vercel.app/",
      githubLink: "https://github.com/cybermicheal47/Githubfinder-React",
    },
  ];

  const [hover, sethover] = useState(false);

  const mousehover = () => {
    sethover(!hover);
  };

  return (
    <div
      className=" w-full py-40 lg:pb-[60rem]    md:h-screen   text-gray-50 bg-[#0a192f] custom:mt-56  secondcust:py-[70rem]"
      name="projects"
    >
      <div className="flex flex-col justify-center  w-full h-full items-center">
        <div>
          <p className="text-4xl w-32 border-b-4 border-blue-600">Projects</p>
          <p className="py-6 pl-5"> Some of my recent Project</p>
        </div>

        <section className="   grid sm:grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mx-5">
          {Projects.map((project) => (
            <div className=" border  border-gray-200    max-w-sm   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg w-[100%] h-[52%]"
                src={project.image}
                alt=""
              />

              <div class="  p-5 h-[48%] flex flex-col  justify-evenly  ">
                <a href="#">
                  <h5 className="text-white mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                    {project.title}
                  </h5>
                </a>
                <p className="text-white  mb-3 font-normal  dark:text-gray-400">
                  {project.description}
                </p>
                <p className="text-white  mb-3 font-normal  dark:text-gray-400">
                  <b>TechStack:</b> {project.TechStack}
                </p>
                <div className=" justify-evenly  flex  gap-2 sm:flex-row gap-2 mb-24   ">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Preview
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 whitespace-nowrap"
                  >
                    View Code
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Project;
