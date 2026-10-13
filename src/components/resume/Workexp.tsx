import ResumeCard from "./ResumeCard"

function Workexp() {
  return (
    <div className="py-4">
      <div className="col-span-9 md:col-span-4">
          <ResumeCard
            badge=""
            title="Software Engineer"
            subTitle="FOURPOINTZERO CO., LTD."
            des="Build and maintain a 10-service NestJS microservices platform for a Thai government agency, with Next.js/React on the frontend. Own the identity and authorization module (LDAP, national digital ID via OIDC, OAuth, RBAC), built an audit-logging microservice from scratch, integrated a real-time government REST API, and resolved production incidents across 5+ services within SLA."
            des1="TechStack : NestJS, Nx, TypeScript, Prisma, PostgreSQL, Next.js, React, Jest, Docker, GitHub Actions, Azure App Service"
          />

          <ResumeCard
            badge="Jan 2026 - May 2026"
            title="Software Developer Intern"
            subTitle="FOURPOINTZERO CO., LTD."
            des="Developed and maintained internal enterprise web applications using React (Vite) and Express (TypeScript) within a microservices architecture, including an e-document platform with RabbitMQ messaging and Elasticsearch/Kibana, MinIO, and OCR (the platform has since launched)."
            des1="TechStack : React, Vite, Express, TypeScript, Tailwind CSS, RabbitMQ, Elasticsearch, Kibana, MinIO"
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