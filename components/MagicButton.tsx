import React from "react";

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 rounded-lg p-[1px] focus:outline-none overflow-hidden group"
            onClick={handleClick}
        >
            <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] transition-transform duration-6000 ease-linear animate-spin-slow -z-10 opacity-90 " />
            <span
                className={`relative inline-flex h-full w-full items-center justify-center rounded-lg 
                bg-slate-950 px-5 text-sm font-medium text-white gap-2 ${otherClasses}`}
                style={{
                    background: "rgba(0, 0, 0, 1)",
                }}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
