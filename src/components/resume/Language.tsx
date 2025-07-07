
const Language = () => {
    return (
        <div className="py-4">
            {/* Thai*/}
            <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-base text-textColor -mb-1.5">Thai</p>
                <p className="text-sm text-zinc-500">Supervisor</p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                    <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
                </span>
                {/* English */}
                <div className="py-3">
                    <p className="text-base text-textColor -mb-1.5">English</p>
                    <p className="text-sm text-zinc-500">Intermediate</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Language