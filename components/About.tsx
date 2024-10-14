import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const About = () => {
    return (
        <div id="about" className="pb-20 pt-36">
            <div className="flex flex-col items-center justify-center">
                <TextGenerateEffect
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Mais sobre mim"
                />
                <div className="flex flex-col md:flex-row w-full py-3 px-5 pr-10 gap-10 md:gap-20 items-center rounded-md shadow-md shadow-cyan-900">
                    <img
                        src="/profile.jpg"
                        width={480}
                        height={480}
                        alt="Foto de perfil"
                        className="w-64 h-64 md:w-96 md:h-96 rounded-lg"
                    />
                    <p className="font-light font-sans text-justify text-md sm:text-sm md:text-sm lg:text-lg px-5 md:px-10">
                        Olá! Meu nome é Lude Ribeiro, e sou um desenvolvedor
                        FullStack apaixonado por tecnologias modernas e práticas
                        eficientes de desenvolvimento de software. Estou me
                        formando em Engenharia de Software na Universidade de
                        Brasília, e desde o início da minha jornada, tenho
                        buscado sempre por aprimoramento e inovação.
                        <br />
                        <br />
                        Com mais de 3 anos de experiência em desenvolvimento web
                        e mobile, estou focado em construir soluções de alta
                        performance e escalabilidade. Adoro aprender e
                        compartilhar conhecimento, seja com pessoas que estão
                        começando ou com profissionais experientes. Acredito no
                        potencial da tecnologia para transformar e melhorar a
                        vida das pessoas.
                        <br />
                        <br />
                        Atualmente, estou em busca de novos desafios e
                        oportunidades para crescer profissionalmente, e estou
                        disponível para projetos de contratação formal,
                        consultoria e freelances.
                        <br />
                        <br />
                        Minhas principais habilidades incluem: Python, Django,
                        JavaScript, React, Next.js, TypeScript, Docker, Git, e
                        AWS, entre outras.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
