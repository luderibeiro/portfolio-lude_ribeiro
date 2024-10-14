import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-48 pb-10" id="contact">
            <div className="w-full left-0 -bottom-72 min-h-96 absolute z-0">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Deseja <span className="text-purple">trabalhar</span>{" "}
                    comigo?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Estou sempre aberto a novos projetos e oportunidades de
                    trabalho. Entre em contato comigo e vamos conversar sobre
                    como podemos trabalhar juntos.
                    <br />
                    <br />
                    Em caso de interesse, possuo mais projetos privados para
                    demonstrar mais sobre meu trabalho.
                </p>
                <a href="mailto:ludeyuri07@gmail.com" className="z-50">
                    <MagicButton
                        title="Envie um e-mail"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    &copy; 2024 Lude Ribeiro. Todos os direitos reservados.
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <a
                                href={info.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={info.img}
                                    alt="icons"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
