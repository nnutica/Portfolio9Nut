

const Career = () => {
    return (
        <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                    Frontend Developer
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>
            {/* Backend */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                    Backend Developer
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
            </div>
            {/* Mobile Application */}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">
                    Mobile Application
                </p>
                <p className="text-sm text-zinc-500">I'm learning</p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[45%] h-full absolute top-0 left-0 bg-designColor"></span>
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