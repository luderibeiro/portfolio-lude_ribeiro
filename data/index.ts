export const navItems = [
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export const projects = [
    {
        id: 1,
        title: "Blog Website - Lude Lounge",
        des: "Um blog criado com Python, Django e Tailwind CSS. Com conceitos de Desenvolvimento Web.",
        img: "/blog.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/luderibeiro/project-blog",
    },
    {
        id: 2,
        title: "Gamma Budget - Gerenciador de Finanças",
        des: "Projeto de um gerenciador de finanças pessoais, desenvolvido na Universidade de Brasília, na matéria de Produto de Engenharia de Software. Feito com Angular, Python e Django.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/luderibeiro/gamma-budget-backend",
    },
    {
        id: 3,
        title: "Portfolio Website - Next.js",
        des: "Este é o portfólio que você está vendo agora. Feito com Next.js, Tailwind CSS e TypeScript.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://www.luderibeiro.com",
    },
    {
        id: 4,
        title: "Django Base",
        des: "Projeto base para iniciar um projeto Django. Com Docker, Docker Compose, Django, Tema Jazzmin, Django Rest Framework, PostgreSQL.",
        img: "/p4.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/gsap.svg",
        ],
        link: "https://github.com/luderibeiro/django_base",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        href: "https://www.github.com/luderibeiro",
    },
    {
        id: 2,
        img: "/wha.svg",
        href: "https://wa.me/5561991139963",
    },
    {
        id: 3,
        img: "/link.svg",
        href: "https://www.linkedin.com/in/luderibeiro/",
    },
    {
        id: 4,
        img: "/insta.svg",
        href: "https://www.instagram.com/lude_ribeiro/",
    },
];
