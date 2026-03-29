import ResumeCard from "./ResumeCard"

function Workexp() {
  return (
    <div className="py-4">
      <div className="col-span-9 md:col-span-4">
        <ResumeCard
          badge=""
          title="Software Developer Intern "
          subTitle=" FOURPOINTZERO CO., LTD."
          des="Developed and maintained internal enterprise web applications using React (ViteJS) and Express (TypeScript) within a Microservices architecture. "
          des1="TechStack : React, Express, TypeScript, ViteJS, Tailwind CSS"
        />
        <ResumeCard
          badge="Dec2023-Jan2025"
          title="Frontend Developer"
          subTitle="Techcare System"
          des="Developed the Frontend UI of a web application using Next.js. Integrated data from Strapi CMS to dynamically display content on the website"
          des1="TechStack : Next.js, Strapi CMS, Tailwind CSS"
        />

      </div>
       <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
     
      
    </div>
  )
}

export default Workexp