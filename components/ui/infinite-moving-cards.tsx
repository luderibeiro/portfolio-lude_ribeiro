"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        icon: React.ReactNode;
        title: string;
        quote: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "20s"
                );
            } else if (speed === "normal") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "40s"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "80s"
                );
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-sm overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:none]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[7rem] h-[7rem] max-w-full relative rounded-2xl border border-b-0  border-slate-700 md:w-[7rem] md:h-[7rem] sm:w-[5rem] sm:h-[5rem] bg-slate-800 justify-center items-center"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={idx}
                    >
                        <blockquote>
                            <div aria-hidden="true" className=""></div>
                            <span className="flex h-full w-full mt-0 justify-center items-center p-2">
                                {item.icon}
                            </span>
                            <div className="relative z-20 mt-0 flex flex-row items-center justify-center">
                                <span className="flex flex-col justify-center gap-1">
                                    <span className="flex justify-center text-xl md:text-xs sm:text-xs text-white font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
