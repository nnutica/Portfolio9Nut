
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";
import Codebadge from "./Codebadge";
import Js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import csharp from "../../assets/skills/csharp.png";
import python from "../../assets/skills/python.png";
import dotnet from "../../assets/skills/dotnet.png";
import vitejs from "../../assets/skills/vitejs.png";
import ts from "../../assets/skills/ts.png";
import nextjs from "../../assets/skills/nextjs.png";
import angular from "../../assets/skills/angular.png";
import express from "../../assets/skills/express-js.png";
import tailwind from "../../assets/skills/tailwindcss.png";
import antd from "../../assets/skills/antd.png";
import mui from "../../assets/skills/mui.png";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Career Skill" icon={<SiArtstation />} />
        {/* Frontend Developer */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Frontend Developer
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Backend */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Backend Developer
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Mobile Application
            </p>
            <p className="text-sm text-zinc-500">I'm learning</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[45%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">UI Design</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          {/* Thai*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Thai</p>
            <p className="text-sm text-zinc-500">Specialist</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
            {/* English */}
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">English</p>
              <p className="text-sm text-zinc-500">Intermediate</p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Design and Languages End here ===================== */}
      {/* =============== Coading and Knowledge Start here ==================== */}
      {/* =============== Coading and Knowledge End here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        {/*Web Develop */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5 ml-1">Langauge for Web Dev</p>
            <div className="flex gap-2 mt-4">
              <Codebadge
                name="JavaScript"
                logo={Js}
                alt="JavaScript logo"
              />
              <Codebadge
                name="TypeScript"
                logo={ts}
                alt="ts logo"
              />
            </div>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5 ml-1">Web Framework</p>
            <div className="flex gap-2 mt-4">
              <Codebadge
                name="React"
                logo={react}
                alt="React logo"
              />
              <Codebadge
                name="ViteJS"
                logo={vitejs}
                alt="ViteJS logo"
              />
              <Codebadge
                name="NextJS"
                logo={nextjs}
                alt="NextJS logo"
              />
            </div>
            <div className="flex gap-2 mt-2 opacity-50">
              <Codebadge
                name="angular"
                logo={angular}
                alt="angular logo"
              />
            </div>
          </div>

          {/*Mobile */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5 ml-1">Mobile Developer</p>
            <div className="flex gap-2 mt-4">
              <Codebadge
                name="C#"
                logo={csharp}
                alt="React logo"
              />
              <Codebadge
                name=".NET"
                logo={dotnet}
                alt=".NET logo"
              />
            </div>
          </div>
          {/*Backend */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5 ml-1">Backend Developer</p>
            <div className="flex gap-2 mt-4">
              <Codebadge
                name="python"
                logo={python}
                alt="Python Logo"
              />
              <Codebadge
                name="Express JS"
                logo={express}
                alt="Express Logo"
              />
            </div>
          </div>
          {/*UI Framework */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5 ml-1">UI Framework</p>
            <div className="flex gap-2 mt-4">
              <Codebadge
                name="tailwind CSS"
                logo={tailwind}
                alt="tailwind Logo"
              />
              <Codebadge
                name="Ant Design"
                logo={antd}
                alt="antd Logo"
              />

            </div>
            <div className="flex gap-2 mt-2">
              <Codebadge
                name="Material UI"
                logo={mui}
                alt="MUI Logo"
              />

            </div>
          </div>


        </div>
      </div>




      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>


      {/* Knowledge */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Knowledge" icon={<FaRegNewspaper />} />
        {/* English */}
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Frontend Development with React
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Web Responsive Design
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            SQL and NoSQL databases
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            JavaScript Algorithms and Data Structures
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Object Oriented Programming C#
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            College Algebra with Python
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            MERN Stack Development
          </li>
        </ul>
      </div>
      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
