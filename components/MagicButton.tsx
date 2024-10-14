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
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 rounded-lg p-[1px] focus:outline-none"
            onClick={handleClick}
        >
            <span
                className="absolute inset-0 -z-10 animate-[spin_2s_linear_infinite] 
                bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                style={{
                    WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)',
                    maskImage: 'radial-gradient(circle, white, black)',
                }}
            />
            <span
                className={`inline-flex h-full w-full items-center justify-center rounded-lg 
                bg-slate-950/90 px-5 text-sm font-medium text-white gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
