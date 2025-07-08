

const Career = () => {
    return (
        <div className="py-4">
             {/*Web Developer */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                    Web Developer 
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>
            {/*Mobile Application */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                   Mobile (C# .NET MAUI)
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>
            {/* QA Automate Tester */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                    QA Automation
                </p>
                
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[55%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>
            {/* UI Design */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">UI Design</p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>

        </div>
    );

};

export default Career;