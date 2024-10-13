"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
    IconBrandAngular,
    IconBrandAws,
    IconBrandDebian,
    IconBrandDjango,
    IconBrandDocker,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandVercel,
} from "@tabler/icons-react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Techs = () => {
    return (
        <div id="Techs" className="pb-20 pt-36">
            <div className="text-center">
                <TextGenerateEffect
                    className="text-center text-[40px] md:text5xl lg:text-6xl"
                    words="Minhas principais"
                />
                <TextGenerateEffect
                    className="text-center text-[40px] md:text5xl lg:text-6xl text-purple"
                    words="Tecnologias"
                />
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="left"
                    speed="normal"
                    items={techs}
                />
            </div>
        </div>
    );
};

export const techs = [
    {
        icon: <IconBrandPython size={100} stroke={1} />,
        title: "Python",
        quote: "A programming language that lets you work quickly.",
    },
    {
        icon: <IconBrandDjango size={100} stroke={1.05} />,
        title: "Django",
        quote: "The Web framework for perfectionists with deadlines.",
    },
    {
        icon: <IconBrandJavascript size={100} stroke={1} />,
        title: "JavaScript",
        quote: "The programming language of the Web.",
    },
    {
        icon: <IconBrandTypescript size={100} stroke={1} />,
        title: "TypeScript",
        quote: "JavaScript with syntax for types.",
    },
    {
        icon: <IconBrandAngular size={100} stroke={1} />,
        title: "Angular",
        quote: "One framework. Mobile & desktop.",
    },
    {
        icon: <IconBrandReact size={100} stroke={1} />,
        title: "React Js",
        quote: "A JavaScript library for building user interfaces.",
    },
    {
        icon: <IconBrandNextjs size={100} stroke={1} />,
        title: "Next.js",
        quote: "The React Framework for Production.",
    },
    {
        icon: <IconBrandDocker size={100} stroke={1} />,
        title: "Docker",
        quote: "Empowering App Development for Developers.",
    },
    {
        icon: <IconBrandAws size={100} stroke={1} />,
        title: "AWS",
        quote: "Cloud Computing Services.",
    },
    {
        icon: <IconBrandVercel size={100} stroke={1} />,
        title: "Vercel",
        quote: "Develop. Preview. Ship.",
    },
    {
        icon: <IconBrandDebian size={100} stroke={1} />,
        title: "Debian",
        quote: "The Universal Operating System.",
    },
];

export default Techs;
