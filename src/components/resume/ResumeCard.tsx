import React from "react";

interface ResumeCardProps {
  badge: string;
  title: string;
  subTitle: string;
  des: string;
  des1?: string;
  des2?: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ badge, title, subTitle, des, des1, des2 }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "" ? (
        <h6 className="w-fit min-w-24 px-2 text-center text-sm py-[1px] whitespace-nowrap text-designColor border-[1px] border-designColor rounded-sm">
          Jan2026-Present
        </h6>
      ) : (
        <h6 className="w-fit min-w-24 px-2 text-center text-sm py-[1px] whitespace-nowrap text-[#999] border-[1px] border-zinc-600 rounded-sm">
          {badge}
        </h6>
      )}
      <h2 className="text-lg font-titleFont text-gray-300 font-bold">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p className="text-base text-[#999] font-medium pr-10 py-0.5">{des}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des1}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des2}</p>
    </div>
  );
};

export default ResumeCard;
