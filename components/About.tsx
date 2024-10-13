import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const About = () => {
    return (
        <div id="about" className="pb-20 pt-36">
            <div className="flex flex-col items-center justify-center">
                <TextGenerateEffect
                    className="text-center text-[40px] md:text5xl lg:text-6xl"
                    words="Mais sobre mim"
                />
                <div className="flex flex-row w-full py-3 px-5 pr-10 gap-20 align-middle justify-center items-center rounded-md shadow-md shadow-cyan-900">
                    <img
                        src="/profile.jpg"
                        width={480}
                        height={480}
                        alt="Foto de perfil"
                    />
                    <p className="font-light font-sans text-justify text-lg md:text-l lg:text-l md:pb-5 right-0 px-10">
                        Meu nome é Lude Ribeiro, sou um desenvolvedor web
                        FullStack com foco em tecnologias modernas e práticas de
                        desenvolvimento de software. Atualmente, estou me
                        formando em Engenharia de Software na Universidade de
                        Brasília.
                        <br />
                        <br />
                        Tenho mais de 3 anos de experiência em desenvolvimento
                        web e mobile, trabalhando com soluções de alta
                        performance e escaláveis. Meu objetivo é sempre
                        aprender, ensinar e compartilhar conhecimento com
                        pessoas que estão começando ou já estão no mercado de
                        trabalho. Estou sempre em busca de novos desafios e
                        oportunidades para crescer profissionalmente. Aberto
                        para contratações formais, projetos e freelances.
                        <br />
                        <br />
                        Minhas principais habilidades são: Python, Django,
                        JavaScrip, React, Next.Js, TypeScript, Docker, Git, AWS,
                        entre outras.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
