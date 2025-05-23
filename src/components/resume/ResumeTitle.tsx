import React from "react";

interface ResumeTitleProps {
  icon: React.ReactNode;
  title: string;
}

const ResumeTitle: React.FC<ResumeTitleProps> = ({ icon, title }) => {
  return (
    <h1 className="text-lg text-gray-300 uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
      <span className="text-designColor text-2xl">{icon}</span>
      {title}
    </h1>
  );
};

export default ResumeTitle;
