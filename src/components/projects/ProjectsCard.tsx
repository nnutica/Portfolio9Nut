import React from "react";

interface ProjectsCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}



const ProjectsCard: React.FC<ProjectsCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="ImageOne"
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </div>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc] py-1 mt-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mt-3 text-center">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-green-500 hover:underline mt-1"
        >
          Click here
        </a>
      )}
    </div>
  );
};

export default ProjectsCard;
