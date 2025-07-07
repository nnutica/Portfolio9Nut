
import ResumeTitle from "./ResumeTitle";
import Language from "./Language";
import { FaFlag } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-10">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge=""
          title="Bangkok University"
          subTitle="University Education"
          des="Faculty of Information Technology and Innovation Information Technology  "
          des1="Scholarship :ทุนเพชรในชัยพฤกษ์ 100%"
          des2="GPA :3.75"
        />
        <ResumeCard
          badge="2019 - 2022"
          title="Udonpittayanukul School"
          subTitle="High School"
          des="Mathematics, Science and Technology Competence Promotion Program "
          des1="GPA : 3.41"
        />

      </div>
       <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <Language />
      </div>
     
      
    </div>
  );
};

export default Education;
