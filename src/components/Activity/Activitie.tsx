import Title from "../home/Title";
import { ActivitieCard } from "./ActivitieCard";
import Etda from "../../assets/Activities/Etda.jpg";
import Etda2 from "../../assets/Activities/etda2.jpg";
import Etda3 from "../../assets/Activities/etda3.jpg";

import caster1 from "../../assets//Activities/caster1.jpg";
import caster2 from "../../assets//Activities/caster2.jpg";
import sx01 from "../../assets/Activities/sx01.jpg";
import sx02 from "../../assets/Activities/sx02.jpg";





export const Activitie: React.FC = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Activities" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {/* LeftSide */}
        <div className="px-6">
          <ActivitieCard
            images={[Etda,Etda2,Etda3]} 
            title="BU x ETDA UpSkill Digital Citizen  "
            description="This program was designed to enhance students' potential to become knowledge facilitators in digital skills. 
            It included training in the ETDA Digital Citizen Trainer curriculum, which focuses on developing essential competencies for digital citizenship. 
            The training covered five key areas: Digital Identity, 
            Appropriate Use of Digital Technology, Digital Security Management, 
            Digital Communication, and Digital Literacy. A total of 62 students participated in the program."
            date="07 November 2024"
            link="https://www.bu.ac.th/th/featured-stories/1613"
            autoPlay={true}
            autoPlayInterval={4000}
          />
          <ActivitieCard
            images={[sx01,sx02]} 
            title="Participated as a staff member at SX2022 (Sustainability Expo 2022), held at the Queen Sirikit National Convention Center.  "
            description="SX2022, or Sustainability Expo 2022, is the largest sustainability
             exposition in ASEAN, showcasing products and innovations aimed at promoting
              sustainable development. Over 70% of the activities at the event were 
              organized by Thai Beverage Public Company Limited (ThaiBev). 
              The event was held under the theme of the 17 Sustainable Development Goals (SDGs), 
              which focus on addressing global challenges such as poverty, inequality, climate change, and peace."
            date="07 November 2024"
            link="https://www.bu.ac.th/th/featured-stories/1613"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
        {/* Rightside */}
        <div className="px-6">
          <ActivitieCard
            images={[caster1,caster2]} 
            title="The Caster สร้างนักพากย์ โดยคนรักการพากย์ "
            description="Participated in 'The Caster' competition, 
            which is a contest to find a new FPS game caster.
             I advanced to the audition round, 
             becoming one of the top 45 finalists that year. 
             The event was also broadcast live on the FPS Thailand channel."
            date="13 February 2023"
            link="https://youtu.be/5O2uVk8cd4I?si=EQN5YBOWhI0jYFlb&t=3260"
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
      </div>
    </div>
  );
};