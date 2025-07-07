import Title from "../home/Title";
import { ActivitieCard } from "./ActivitieCard";
import Etda from "../../assets/Projects/Etda.jpg";




export const Activitie: React.FC = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Activities" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {/* LeftSide */}
        <div className="px-6">
          <ActivitieCard
            title="BU x ETDA UpSkill Digital Citizen  "
            description="Leadership ,Social,Cyber Security"
            date="2023"
            image={Etda}
            link="https://www.bu.ac.th/th/featured-stories/1613"
          />
        </div>
      </div>
    </div>
  );
};