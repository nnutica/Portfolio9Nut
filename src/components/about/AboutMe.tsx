
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-white">Hello! I'm Nut </h2>
         <div className="text-base leading-6 space-y-2">
  <p>
    <span className="text-green-400">Software Engineer</span> building production
    systems for a Thai government platform: a 10-service{" "}
    <span className="text-blue-400">NestJS/TypeScript</span> microservices backend
    with <span className="text-blue-400">Next.js/React</span> on the frontend. I own
    an identity and authorization module (LDAP, national digital ID via OIDC, OAuth,
    RBAC), built an audit-logging service from scratch, and debug production
    incidents across services under SLA.
  </p>
  <p>
    I graduated from Bangkok University (B.Sc. IT,{" "}
    <span className="text-zinc-200">First-Class Honors, 3.79 GPA</span>, full
    scholarship), and I enjoy{" "}
    <span className="text-green-400">AI-integrated products</span>: my senior
    project, RIGHTHERE, combines a .NET MAUI app, a Next.js back-office, and a
    fine-tuned BERT model served by FastAPI.
  </p>
  <p>
    Open to roles where I can keep building reliable backend and full-stack systems
    and grow into AI-integrated products.
  </p>
</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Birthday:</span>
            Feb 17, 2004
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Study:</span>
            Bangkok University
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
           Ladprao, Bangkok
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
