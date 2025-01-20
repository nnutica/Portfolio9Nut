import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";

import { FaCertificate } from "react-icons/fa6";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Certificate from "./components/Certificates/Certificate";

const Home: React.FC = () => {
    const [about, setAbout] = useState<boolean>(true);
    const [resume, setResume] = useState<boolean>(false);
    const [projects, setProjects] = useState<boolean>(false);
    const [certificate, setCertificate] = useState<boolean>(false);

    return (
        <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
            {/* ================= Left Icons End here ======================== */}
            <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">
                {/* About Icon */}
                <span
                    onClick={() => {
                        setAbout(true);
                        setResume(false);
                        setProjects(false);
                        setCertificate(false);
                    }}
                    className={`${about
                        ? "text-designColor"
                        : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                        } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
                >
                    <FaUser />
                    <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        About
                    </span>
                </span>
                {/* Resume Icon */}
                <span
                    onClick={() => {
                        setAbout(false);
                        setResume(true);
                        setProjects(false);
                        setCertificate(false);
                    }}
                    className={`${resume
                        ? "text-designColor"
                        : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                        } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
                >
                    <IoIosPaper />
                    <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        Resume
                    </span>
                </span>
                {/* Project Icon */}
                <span
                    onClick={() => {
                        setAbout(false);
                        setResume(false);
                        setProjects(true);
                        setCertificate(false);
                    }}
                    className={`${projects
                        ? "text-designColor"
                        : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                        } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
                >
                    <MdWork />
                    <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        Projects
                    </span>
                </span>
                {/* Blog Icon */}
                <span
                    onClick={() => {
                        setAbout(false);
                        setResume(false);
                        setProjects(false);
                        setCertificate(true);
                    }}
                    className={`${certificate
                        ? "text-designColor"
                        : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                        } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
                >
                    <FaCertificate />
                    <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        Certificates
                    </span>
                </span>
            </div>
            {/* ================= Left Icons Start here ====================== */}
            <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
                {/* ======================== Home Left Start here ============================ */}
                <Left />
                {/* ======================== Home Left End here ============================== */}
                <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
                    {/* ======================== Smaller device content Start ======================== */}
                    <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
                        <About />
                        <Resume />
                        <Projects />
                        <Certificate />
                    </div>
                    {/* ======================== Smaller device content End ========================== */}
                    <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                        {about && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <About />
                            </motion.div>
                        )}

                        {resume && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Resume />
                            </motion.div>
                        )}
                        {projects && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Projects />
                            </motion.div>
                        )}
                        {certificate && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Certificate />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
