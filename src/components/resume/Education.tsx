import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="University Activity" icon={<MdWork />} />
        <ResumeCard
          badge="28 Sep 2022"
          title="Sx fair 2022 "
          subTitle="@ Queen sirikit National Convention Center"
          des="Worked as a staff member at the Sealife Bangkok booth, 
          where we presented current popular issues affecting the ocean. 
          The booth highlighted specific problems and their impacts,
           providing examples to raise awareness among visitors."
        />
        <ResumeCard
          badge="13 Feb 2023"
          title="The Caster "
          subTitle="@ Chercharn Studio Ramintra65."
          des='Participated in "The Caster" competition, which is a contest to find a new FPS game caster. 
          I advanced to the audition round, becoming one of the top 45 finalists that year.
           The event was also broadcast live on the FPS Thailand channel.'
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
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
    </div>
  );
};

export default Education;
