
import { SiArtstation } from "react-icons/si";

import { BiCodeAlt } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import ResumeTitle from "./ResumeTitle";
import Coding from "./Coding";
import Knowledge from "./knowledge";

import Career from "./Career";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Career Skill" icon={<SiArtstation />} />
        <Career />
      </div>

      {/* เส้นแบ่งซ้ายขวา */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Knowledge */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Knowledge" icon={<FaRegNewspaper />} />
        <Knowledge />
      </div>
      


      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <Coding />
      </div>

      {/* เส้นแบ่งซ้ายขวา */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

     


      
    </div>
  );
};

export default Skills;
