
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import frontier from "../../assets/Projects/Frontier.png"
import Calculator from "../../assets/Projects/Calculator.png"
import AChiraya from "../../assets/Projects/achiraya.png"
import techcare from "../../assets/Projects/techcare.png"
import afterclass from "../../assets/Projects/afterclass.png"
import righthere from "../../assets/Projects/righthere.jpg"

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {/* LeftSide */}
        <div className="px-6">
          <ProjectsCard
            title="Frontier Hotel Booking System"
            description="Full CRUD Website you can book hotel rooms and manage your bookings."
            image={frontier}
            link="https://github.com/nnutica/Frontier"
          />         
          <ProjectsCard
            title="techcare System "
            description="This was my first real-world project, where I had the opportunity to design the UI for the team and also contributed to integrating backend data into the website. "
            image={techcare}
            link=" https://techcaresystem.com"
          />
           <ProjectsCard
            title="afterclass Landing Page"
            description=" Designed and developed a modern Landing Page to showcase a bar and its signature menu as part of a Bartender course project, with a focus on contemporary UI design. "
            image={afterclass}
            link="https://after-class-one.vercel.app/"
          />

        </div>

        {/* Rightside */}
        <div className="px-6">
          <ProjectsCard
            title="Angular-Calculator"
            description="My first project using Angular, a simple calculator that performs basic arithmetic operations."
            image={Calculator}
            link="https://github.com/nnutica/Angular-calculator"
          />
          <ProjectsCard
            title="Achiraya-PMtool"
            description="This is My Personal Project Management Tool, designed to help users manage their projects efficiently. It includes features for task management, project tracking, and team collaboration."
            image={AChiraya}
            link="https://achiraya-pmtool.vercel.app/"
          />
           <ProjectsCard
            title="RightHere V1.0"
            description="This is my AI-powered emotional journaling tool.
Users can write their diary, and the AI analyzes their feelings, mood, keywords, and sentiment score.
Designed with a Pixel RPG style to make reflection fun and engaging."
            image={righthere}
            link="https://righthere-v1.vercel.app/"
          />

         

        </div>
      </div>
    </div>
  );
};

export default Projects;
