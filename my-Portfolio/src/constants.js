// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's

import alaska from "./assets/company_logo/alaska.png";

// Education Section Logo's
import sppu from "./assets/education_logo/sppu.png";

// Project Section Logo's
import healthfirst from "./assets/work_logo/healthfirst.png";
import Highwaygard from "./assets/work_logo/Highwaygard.png";
import Yatramitra from "./assets/work_logo/yatramitra.png";
import aileeter from "./assets/work_logo/ailetter.png";
import movie from "./assets/work_logo/movie.png";
import blog from "./assets/work_logo/blog.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: alaska,
    role: "Web develpment intern",
    company: "Alaska App Studio",
    date: "Feb 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
];

export const education = [
  {
    id: 1,
    img: sppu,
    school: "Savitribai Phule Pune University (SPPU)",
    date: "July 2023 - June 2026",
    grade: "8.12 CGPA",
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Savitribai Phule Pune University (SPPU). Throughout my undergraduate program, I built a solid foundation in computer science and programming. My coursework included subjects such as Programming in C and Java, Operating Systems, Data Structures, Web Technologies, Database Management Systems, and Software Engineering. I was actively involved in seminars, coding competitions, and technical events, which enriched my learning experience. My time at SPPU played a crucial role in developing my technical skills and preparing me for further academic and professional pursuits.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "Highway Gard",
    description:
      "A highway garden monitoring system that uses smart technology to track maintenance, plant health, and environmental data. Designed to improve roadside landscaping and sustainability through a user-friendly React.js interface.",
    image: Highwaygard,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: " https://highwayguard.alaskaa.in/",
  },
  {
    id: 1,
    title: "Yatra Mitra dev",
    description:
      "A travel assistant platform tailored for GATE/UGC NET students, helping them plan study journeys with quiz-based learning, past-year question practice, and smart test generation tools.",
    image: Yatramitra,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Ram-1418/yatra-mitra-dev",
    webapp: "https://yatramitra.alaskas.tech/",
  },
  {
    id: 2,
    title: "Ai-Letter Generater",
    description:
      "An AI-powered web app that generates formal letters, resumes, or custom content instantly. Just input your context, and the tool crafts a well-structured letter using NLP techniques.",
    image: aileeter,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sonu-shivcharan/templatz",
    webapp: "https://templatz.vercel.app/",
  },
  {
    id: 3,
    title: "Movie Search App",
    description:
      "A sleek and responsive movie search application using public movie APIs. Find movies by title, view detailed info, and explore genres with ease.",
    image: movie,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/Ram-1418/chai-and-react",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Health-First",
    description:
      "A Chrome extension focused on boosting productivity and well-being. It reminds users to take breaks, stretch, hydrate, and focus on healthy habits throughout the day.",
    image: healthfirst,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/Ram-1418/Hackathon",
    webapp: "https://health-first1.netlify.app/",
  },
  {
    id: 5,
    title: "Blog-App",
    description:
      "A modern blog platform that allows users to create, edit, and explore tech blogs. Built with clean UI and smooth animations using Framer Motion and JavaScript.",
    image: blog,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/Ram-1418/Blog-app",
    webapp: "https://blog-app-one-ivory.vercel.app/",
  },
];
