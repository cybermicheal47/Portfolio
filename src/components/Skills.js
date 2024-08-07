import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Prisma from "../assets/prisma.png";
import Tailwind from "../assets/Tailwind.png";
import Expressjs from "../assets/express.png";
import Nodeimg from "../assets/node.png";
import Reduximg from "../assets/Redux.png";
import Typescript from "../assets/typescript.png";

function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#0a192f] lg:pb-[80rem] thirdcust:h-[78vh]"
    >
      <div className="w-full  h-full flex flex-col   items-center">
        <div className="flex flex-col ">
          <p className="text-white text-4xl mb-5 font-bold inline border-b-4 border-green-600 ">
            {" "}
            My Current Skillset
          </p>
          <p className="text-[#f0f0f0] ">
            These are the technology I have worked with
          </p>
        </div>

        <div className="text-white   grid grid-cols-3 mt-5  gap-6 sm:grid-cols-6 gap-6">
          <div className="text-center  shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={HTML} alt="html" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">HTML</h2>
          </div>
          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={CSS} alt="css" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">CSS</h2>
          </div>
          <div className="text-center  shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={JavaScript} alt="javascript" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">JavaScript</h2>
          </div>
          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={ReactImg} alt="ReactImg" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">React</h2>
          </div>
          {/*      */}
          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={FireBase} alt="FireBase" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">Firebase</h2>
          </div>
          {/*  */}
          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={GitHub} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">GitHub</h2>
          </div>

          {/*  */}

          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Prisma} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">Prisma</h2>
          </div>
          {/*  */}
          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Nodeimg} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">NodeJs</h2>
          </div>
          {/*  */}

          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Expressjs} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">ExpressJs</h2>
          </div>
          {/*  */}

          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Typescript} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">Typescript</h2>
          </div>
          {/*  */}

          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Tailwind} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">TailwindCss</h2>
          </div>
          {/*  */}

          <div className="text-center shadow-2xl shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500">
            <img src={Reduximg} alt="GitHub" style={{ width: "100px" }} />
            <h2 className="mt-2 text-lg font-semibold">Redux</h2>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
