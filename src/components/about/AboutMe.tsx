
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-white">Hello! I'm Nut </h2>
          <p className="text-base leading-6 ">
            3rd-year IT student with hands-on experience in 
           <span className="text-green-400"> Full-Stack Development </span>  
Skilled in <span className="text-blue-400">React,</span> 
<span className="text-zinc-200">Next.js,</span>
<span className="text-green-400 ">Node.js,</span>  
and database encryption.
Experienced with Robot Framework for web testing and cross-platform app development using .NET MAUI.
Eager to contribute to innovative projects and grow in both development and quality engineering roles.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Study:</span>
            Bangkok University
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Rangsit, Pathum Thani
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
