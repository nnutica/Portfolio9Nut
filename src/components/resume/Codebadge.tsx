import React from 'react';

// Define the shape of props for the component
interface CodeBadgeProps {
    name: string;
    logo: string;
    alt?: string;
    className?: string;
}

const Codebadge: React.FC<CodeBadgeProps> = ({
    name,
    logo,
    alt = `${name} logo`,
    className = ''
}) => {
    return (
        <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${className}`}>
            <div className="mr-2 relative w-5 h-5">
                <img
                    src={logo}
                    alt={alt}
                    className="w-full h-full object-contain"
                />
            </div>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {name}
            </span>
        </div>
    );
};

export default Codebadge;