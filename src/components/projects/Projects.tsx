
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import frontier from "../../assets/Projects/Frontier.png"
import Calculator from "../../assets/Projects/Calculator.png"
import AChiraya from "../../assets/Projects/achiraya.png"

import Etda from "../../assets/Projects/Etda.jpg"

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {/* LeftSide */}
        <div className="px-6">
          <ProjectsCard
            title="Frontier Hotel Booking System"
            category="Website,CRUD, FullStack, Final Project"
            image={frontier}
            link="https://github.com/nnutica/Frontier"
          />
          <ProjectsCard
            title="BU x ETDA UpSkill Digital Citizen  "
            category="Leadership ,Social,Cyber Security"
            image={Etda}
            link="https://www.bu.ac.th/th/featured-stories/1613"
          />


        </div>

        {/* Rightside */}
        <div className="px-6">
          <ProjectsCard
            title="Angular-Calculator"
            category="Angular, Calculator, Frontend"
            image={Calculator}
            link="https://github.com/nnutica/Angular-calculator"
          />
          <ProjectsCard
            title="Achiraya-PMtool"
            category="NextJS, PMtool, Frontend,Firebase"
            image={AChiraya}
            link="https://achiraya-pmtool.vercel.app/"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
