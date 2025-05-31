import Codebadge from "./Codebadge";
import Js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import csharp from "../../assets/skills/csharp.png";
import python from "../../assets/skills/python.png";
import dotnet from "../../assets/skills/dotnet.png";
import vitejs from "../../assets/skills/vitejs.png";
import ts from "../../assets/skills/ts.png";
import nextjs from "../../assets/skills/nextjs.png";
import angular from "../../assets/skills/angular.png";
import express from "../../assets/skills/express-js.png";
import tailwind from "../../assets/skills/tailwindcss.png";
import antd from "../../assets/skills/antd.png";
import mui from "../../assets/skills/mui.png";
import html from "../../assets/skills/html.png";

const Coding = () => {
    return (
        <div className="col-span-9 md:col-span-4">

            {/*Web Develop */}
            <div className="py-4">
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1 ml-1">Langauge for Web Dev</p>
                    <div className="flex gap-2 mt-4 ">
                        <Codebadge
                            name="JavaScript"
                            logo={Js}
                            alt="JavaScript logo"
                        />
                        <Codebadge
                            name="TypeScript"
                            logo={ts}
                            alt="ts logo"
                        />
                    </div>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1 ml-1">Web Framework</p>
                    <div className="flex gap-2 mt-4">
                        <Codebadge
                            name="React"
                            logo={react}
                            alt="React logo"
                        />
                        <Codebadge
                            name="ViteJS"
                            logo={vitejs}
                            alt="ViteJS logo"
                        />
                        <Codebadge
                            name="NextJS"
                            logo={nextjs}
                            alt="NextJS logo"
                        />
                    </div>
                    <div className="flex gap-2 mt-2 ">
                        <Codebadge
                            name="angular"
                            logo={angular}
                            alt="angular logo"
                        />
                        <Codebadge
                            name="html"
                            logo={html}
                            alt="html logo"
                        />
                    </div>
                </div>

                {/*Mobile */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 ml-1">Mobile Developer</p>
                    <div className="flex gap-2 mt-4">
                        <Codebadge
                            name="C#"
                            logo={csharp}
                            alt="React logo"
                        />
                        <Codebadge
                            name=".NET"
                            logo={dotnet}
                            alt=".NET logo"
                        />
                    </div>
                </div>
                {/*Backend */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 ml-1">Backend Developer</p>
                    <div className="flex gap-2 mt-4">
                        <Codebadge
                            name="python"
                            logo={python}
                            alt="Python Logo"
                        />
                        <Codebadge
                            name="Express JS"
                            logo={express}
                            alt="Express Logo"
                        />
                    </div>
                </div>
                {/*UI Framework */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 ml-1">UI Framework</p>
                    <div className="flex gap-2 mt-4">
                        <Codebadge
                            name="tailwind CSS"
                            logo={tailwind}
                            alt="tailwind Logo"
                        />
                        <Codebadge
                            name="Ant Design"
                            logo={antd}
                            alt="antd Logo"
                        />

                    </div>
                    <div className="flex gap-2 mt-2">
                        <Codebadge
                            name="Material UI"
                            logo={mui}
                            alt="MUI Logo"
                        />

                    </div>
                </div>


            </div>
        </div>







    );
};

export default Coding;