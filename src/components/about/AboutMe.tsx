
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Nut </h2>
          <p className="text-base leading-6 ">
            I am a 3rd-year IT student passionate about Full-Stack Development, with strong skills in Frontend technologies like HTML,
            CSS, JavaScript, and React. I also have experience with backend development using Node.js and databases.
            I aim to contribute to innovative projects while expanding my skills in both frontend and full-stack development.
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
