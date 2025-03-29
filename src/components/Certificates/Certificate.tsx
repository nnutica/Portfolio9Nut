import React from "react";
import Title from "../home/Title";
import CertificateCard from "./CertificateCard";
import pythonGPT from "../../assets/certificate/PythonGPT.jpg";
import CerGpt from "../../assets/certificate/GPTRE.jpg";
import BDev from "../../assets/certificate/nitinat.loru_devlab_certificate.png";
import OOP from "../../assets/certificate/oop.jpg";
import Canva from "../../assets/certificate/canva.jpg";
import RSDesign from "../../assets/certificate/ResponsiveWebDesign.png";
import Fed from "../../assets/certificate/FED.png";
import cap from "../../assets/certificate/CAP.png";
import etda from "../../assets/certificate/Etda.jpg";
import datagpt from "../../assets/certificate/Datagpt.png";
import azure from "../../assets/certificate/azureapp.png";
import GenAI from "../../assets/certificate/Coursera GenAI.jpg";



const Certificate = () => {
  return (
    <div>
      <Title title="My" subTitle="CERTIFICATE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {/* LeftSide */}
        <div className="px-6">
          <CertificateCard
            image={OOP}
            title="January 8, 2024"
            subTitle="C#: การเขียนโปรแกรมเชิงวัตถุ (Object Oriented Programming-OOP)"
            category="Programming"
            link="https://app.futureskill.co/api/certificate?courseId=309&userId=163361"
          />
          <CertificateCard
            image={CerGpt}
            title="February 1, 2024"
            subTitle="ChatGPT ช่วยทำวิจัยได้ไม่ต้องเหนื่อยแทบตาย (ในทุกขั้นตอน)"
            category="Technology, Chula Mooc"
            link="https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/system_course_files/2022_2/36997/cvcert_usercert/certificate_36997_1124342-1124342-17067790272708.jpg"

          />
          <CertificateCard
            image={pythonGPT}
            title="February 10, 2024"
            subTitle="เย่! ไม่ต้องเรียน Python เเล้ว (หรือเปล่านะ) มี ChatGPT เเล้วนี่นา"
            category="Technology , Chula Mooc"
            link="https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/system_course_files/2023_1/40677/cvcert_usercert/certificate_40677_1124342-1124342-17075831017258.jpg"
          />
          <CertificateCard
            image={Canva}
            title="December 24, 2024"
            subTitle="(Webinar) นำเสนออย่างไรโปรฉบับคนทำงานยุคใหม่สื่อสารง่าย เข้าใจเร็วด้วย Canva Presentation"
            category="Canva Presentation , Pitching"
            link="https://app.futureskill.co/api/certificate?courseId=665&userId=163361"
          />
          <CertificateCard
            image={datagpt}
            title="January 23, 2025"
            subTitle="(Webinar) ทำงาน Data แบบมืออาชีพได้ง่ายขึ้นด้วย ChatGPT"
            category="Data, ChatGPT, Technology"
            link="https://app.futureskill.co/api/certificate?courseId=666&userId=163361"
          />
        </div>

        {/* RightSide */}
        <div className="px-6">
          <CertificateCard
            image={BDev}
            title="September 22, 2022"
            subTitle="taken part in the course DevLab 3Open Access Program "
            category="Programming"
            link="https://www.borntodev.com/devlab/certificate/12adf97002e5ec56b9bb05a7a7d97d00"
          />
          <CertificateCard
            image={Fed}
            title="September 14, 2024"
            subTitle="Front End Development Libraries"
            category="Web Developer"
            link="https://www.freecodecamp.org/certification/nitinat/front-end-development-libraries"
          />
          <CertificateCard
            image={RSDesign}
            title="September 21, 2024"
            subTitle="Responsive Web Design"
            category="Web Developer"
            link="https://www.freecodecamp.org/certification/nitinat/responsive-web-design"
          />
          <CertificateCard
            image={cap}
            title="October 17, 2024"
            subTitle="College Algebra With Python"
            category="Programming, Mathematics"
            link="https://www.freecodecamp.org/certification/nitinat/college-algebra-with-python-v8"
          />
          <CertificateCard
            image={etda}
            title="November 7, 2024"
            subTitle="BU X EDC Trainer"
            category="Technology"
          />
          <CertificateCard
            image={azure}
            title="February 8 , 2025"
            subTitle="Get started with Azure App Service"
            category="Technology"
            link="https://school.borntodev.com/certificate/7xok6hMKhARn"
          />
          <CertificateCard
            image={GenAI}
            title="March 29, 2025"
            subTitle="GenAI for Cybersecurity Analysts"
            category="Technology,Coursera,GenAI"
            link="https://coursera.org/share/36a8bb74653a106a9eae084e6fc321b5"

          />

        </div>
      </div>
    </div>
  );
};

export default Certificate;
