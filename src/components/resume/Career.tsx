import { MdWebAsset } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const Career = () => {
    return (
        <div className="py-4">
             {/*Web Developer */}
            <div className="py-2 border-b-[1px] border-zinc-800">
                
                <p className="text-white text-base mb-1 flex items-start gap-2 ">
                    <span className="text-designColor text-xl">
                 <MdWebAsset />
                </span>
                Web Developer  
                </p>
                 <ul className="py-2 flex flex-col gap-2 ">
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Frontend Development with React
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                               useState
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                              useEffect
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                react-router-dom
                            </li>
                             <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Responsive Design
                            </li>
                            </ul>
            </div>
            {/*Mobile Application */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-designColor text-xl">
                 <FaMobileAlt />
                </span>
                Mobile Application (.NET MAUI)
                </p>
                <ul className="py-2 flex flex-col gap-2 ">
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Responsive Design
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Shell Flyout Menu
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Basic Image Animation
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                                Native Map
                            </li>
                             <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                               MVVM
                            </li>
                           
                            </ul>
            </div>
            {/* QA Automate Tester */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-designColor text-xl">
                 <FaRobot />
                </span>
                QA Automate Tester 
                </p>
                
                <ul className="py-2 flex flex-col gap-2 ">
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                               Robot Framework - Selenium Library
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                               Appium - Mobile Testing
                            </li>    
                            </ul>
            </div>
            {/* UI Design */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-designColor text-xl">
                 <FaFigma />
                </span>
                UI Design
                </p>
                <ul className="py-2 flex flex-col gap-2 ">
                <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                              Figma
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                              Flow Diagram
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 text-sm">
                                <span className="text-designColor text-md">
                                    <GiCheckMark />
                                </span>
                             Entity Boundary Control Diagram
                            </li>
                               
                            </ul>
            </div>

        </div>
    );

};

export default Career;