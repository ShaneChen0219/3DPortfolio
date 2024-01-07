import { meta, shopify, starbucks, tesla, dxc,ucan} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    java,
    cplusplus,
    postgresql,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Pyhton",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Data Base",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Data Base",
    }
];

export const experiences = [
    {
        title: "Service Information Developer",
        company_name: "DXC Technology",
        icon: dxc,
        iconBg: "#FBF9F1",
        date: "Sep 2022 - July 2023",
        points: [
            "Enabled real-time tracking and generated stock reports using ABAP, SQL, and Python",
            "Take charge of on-site ABAP and MM consultancy to maintain and enhance SAP workflows, delivering impactful solutions and recommendations for SAP S/4 Hana projects.",
            "Designed and developed SAP S/4 Hana projects and SPECs, optimizing performance and functionality.",
            
        ],
    },
    {
        title: "Consultant",
        company_name: "Ucan System",
        icon: ucan,
        iconBg: "#AAD7D9",
        date: "Nov 2021 - Aug 2022",
        points: [
            "Developed SAP S/4 Hana Reports, Functions, Enhancements, etc. using ABAP",
            "Created an interface for seamless data exchange between WMS and SAP S/4 Hana",
            "Provided solutions for issues within SAP S/4 Hana, specializing in the MM/CO module",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ShaneChen0219',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hsiangyuan-chen',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Squeezing Koopa & Goomba Game',
        description: 'A 2D game using C++ with the SFML framework, including dynamic items generation and responsiveness in-game collisions. ',
        link: 'https://github.com/ShaneChen0219/Mario-Jump-Game',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Temperature Record API',
        description: "A RESTful API that allows tempeture records application to CRUD the DB. It's base on Python and Flask, integrated with PostgreSQL using ElephantSQL. ",
        link: 'https://github.com/ShaneChen0219/RESTapiForTemperature',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Animated Portfolio',
        description: 'A responsive 3D portfolio base on React.js, allowing users to send email to specific email address.',
        link: 'https://github.com/ShaneChen0219/3DPortfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Food Ordering App',
        description: 'Built an online ordering app, which covers user authentication, checkout payment processing, and order acceptance facilitated through automated email notifications.',
        link: '',
    },
];