"use client";

import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Projects = () => {
    return (
        <div
            id="Projects"
            className="pb-48 w-full h-full flex flex-col items-center justify-center z-1"
        >
            <div className="text-center">
                <TextGenerateEffect
                    className="text-center text-[40px] md:text5xl lg:text-6xl"
                    words="Projetos"
                />
            </div>
            <div className="grid grid-cols-1 gap-44 md:grid-cols-2 z-50">
                <div className="flex flex-col">
                    <a href="http://blog.luderibeiro.com" target="_blank">
                        <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                            Blog - Lude Lounge
                        </h2>
                    </a>
                    <p className="text-gray-400 text-sm mt-2 text-justify">
                        Um blog feito com Python, Django e Markdown para
                        melhorar meus conhecimentos Django e Django Templates.
                        Possui um sistema de comentários criação de contas e
                        posts. Com moderação de comentários, feito do zero a
                        partir do meu próprio template de Django.
                    </p>
                    <img
                        src="/blog.png"
                        alt="Blog - Lude Lounge"
                        className="rounded-xl mt-4 box-shadow shadow-xl shadow-slate-800"
                    />
                    <a href="http://blog.luderibeiro.com" target="_blank">
                        <MagicButton
                            title="Acesse o blog"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="rounded-xl">
                    <a
                        href="https://github.com/luderibeiro/gamma-budget-backend"
                        target="_blank"
                    >
                        <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                            Gamma Budget
                        </h2>
                    </a>
                    <p className="text-gray-400 text-sm mt-2 text-justify">
                        Um sistema de controle de finanças feito com Python,
                        Django, Django Rest Framework e Angular. Possui um
                        sistema de autenticação, controle de contas, categorias,
                        lançamentos e relatórios. Feito para a disciplina de
                        Engenharia do Produto de Software na Universidade de
                        Brasília - FGA.
                    </p>
                    <img
                        src="/gamma_budget.png"
                        alt="Gamma Budget"
                        className="rounded-xl mt-4 box-shadow shadow-xl shadow-slate-800"
                    />
                    <a
                        href="https://github.com/luderibeiro/gamma-budget-backend"
                        target="_blank"
                    >
                        <MagicButton
                            title="Acesse o projeto"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="rounded-xl">
                    <a
                        href="https://github.com/luderibeiro/django_base"
                        target="_blank"
                    >
                        <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                            Django Base
                        </h2>
                    </a>
                    <p className="text-gray-400 text-sm mt-2 text-justify">
                        Um template de Django para iniciar projetos com Django e
                        seus recursos. Possui um sistema de autenticação e
                        controle de contas de usuário. Feito para melhorar a
                        produtividade no início de projetos com Django.
                        <br />
                        <br />
                        Além disso, o projeto já está dockerizado e com
                        docker-compose para facilitar a inicialização do
                        projeto.
                    </p>
                    <img
                        src="/django_base.png"
                        alt="Django Base"
                        className="rounded-xl mt-4 box-shadow shadow-xl shadow-slate-800"
                    />
                    <a
                        href="https://github.com/luderibeiro/django_base"
                        target="_blank"
                    >
                        <MagicButton
                            title="Acesse o projeto"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="rounded-xl">
                    <a
                        href="https://portifolio-luderibeiro.vercel.app"
                        target="_blank"
                    >
                        <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                            Portifólio (Pimeira versão)
                        </h2>
                    </a>
                    <p className="text-gray-400 text-sm mt-2 text-justify">
                        Meu primeiro portifólio, uma versão bem mais simples
                        feita também com Next JS, mas claramente com menos
                        experiência e conhecimento. Ainda assim, foi um projeto
                        muito importante para mim, pois foi o primeiro contato
                        com Next JS e com o desenvolvimento de portifólios.
                        <br />
                        <br />
                        Foi um projeto que me ajudou a entender melhor o
                        funcionamento do Next JS e a primeira vez que usei a
                        Vercel para hospedar um projeto.
                    </p>
                    <img
                        src="/old_porfolio.png"
                        alt="Antigo portifólio"
                        className="rounded-xl mt-4 box-shadow shadow-xl shadow-slate-800"
                    />
                    <a
                        href="https://portifolio-luderibeiro.vercel.app"
                        target="_blank"
                    >
                        <MagicButton
                            title="Acesse o portifólio"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
