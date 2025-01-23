import React from "react";

import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { SiJirasoftware } from "react-icons/si";
import { CiCalculator2 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa6";



const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Develop with MERN Stack or NextJS"
      />
      <ServicesCard
        icons={<SiJirasoftware />}
        title="Web Design"
        subTitle="I can design UI using Figma, although it's not my strongest skill. However, I excel at translating existing designs into functional code."
      />
      <ServicesCard
        icons={<CiCalculator2 />}
        title="Mathematics"
        subTitle="I can teach high school mathematics, including algebra, geometry, calculus, and statistics, with clear explanations tailored to different learning styles."
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="database design"
        subTitle="I can design database structures for systems efficiently, ensuring scalability and organization."
      />

    </div>
  );
};

export default MyServices;
