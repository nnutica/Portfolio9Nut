

export const Softskill = () => {
    return (
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
            <li className="flex items-center gap-4 text-textColor">
                <span className="text-designColor text-lg">🗣️</span>
                Communication
            </li>
            <li className="flex items-center gap-4 text-textColor">
                <span className="text-designColor text-lg">🤝</span>
                Teamwork
            </li>
            <li className="flex items-center gap-4 text-textColor">
                <span className="text-designColor text-lg">🧠</span>
                Problem Solving
            </li>
            <li className="flex items-center gap-4 text-textColor">
                <span className="text-designColor text-lg">⏳</span>
                Time Management
            </li>
            <li className="flex items-center gap-4 text-textColor">
                <span className="text-designColor text-lg">📚</span>
                Adaptability
            </li>
        </ul>
    );
}