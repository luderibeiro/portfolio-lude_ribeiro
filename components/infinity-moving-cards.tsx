"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
    IconBrandDjango,
    IconBrandJavascript,
    IconBrandPython,
    IconBrandReact,
    icons,
} from "@tabler/icons-react";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={techs} direction="right" speed="slow" />
        </div>
    );
}

const techs = [
    {
        icon: <IconBrandPython />,
        title: "string",
        quote: "string",
    },
];
