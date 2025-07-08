

import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { FaFigma } from "react-icons/fa6";
import { CiCalculator2 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";



const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I can Develop websites using React, Next.js, and ViteJS. I can also create responsive designs with Tailwind CSS and Bootstrap, ensuring a seamless user experience across devices."
      />
      <ServicesCard
        icons={<FaFigma />}
        title="UI Design"
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
       subTitle="I design efficient and scalable database structures tailored to system requirements, ensuring data integrity, performance, and maintainability."
      />
      <ServicesCard
        icons={<FaRobot />}
        title="Automation testing"
        subTitle="I can create and maintain automated test scripts for web applications using tools like Selenium, Playwright, or Cypress.
This ensures consistent quality, faster testing cycles, and reduces manual errors."
      />

    </div>
  );
};

export default MyServices;
