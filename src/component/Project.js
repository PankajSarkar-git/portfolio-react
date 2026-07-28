

import React from "react";
import { BsGithub, BsArrowUpRight, BsCodeSlash } from "react-icons/bs";

import styles from "./Project.module.scss";

import project from "../imgs/project.png";
import project1 from "../imgs/project1.png";
import project2 from "../imgs/project 2.png";
import project3 from "../imgs/project 3.png";
import project4 from "../imgs/project 4.png";
import project5 from "../imgs/project 5.png";
import project6 from "../imgs/project 6.png";

const freelanceProjects = [
  {
    id: 1,
    title: "AstroSevaa",
    image: project1,
    description:
      "A React Native astrology application that enables users to connect with astrologers through real time chat, voice calls, and video calls. Built with Socket.IO for instant messaging and live communication, delivering a smooth and responsive mobile experience.",

    technologies: [
      "React Native",
      "JavaScript",
      "Socket.IO",
      "REST API",
      "Redux",
      "Firebase",
      "Android",

    ],

    github: "https://github.com/PankajSarkar-git",
    live: "https://play.google.com/store/apps/details?id=com.insapimarketing.astrosevaa2&hl=en_IN",
    featured: true,
  },
  {
    id: 1,
    title: "New Sunity Jewellers",
    image: project5,
    description:
      "A modern jewellery business website with responsive UI, product showcase and optimized performance.",

    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Fetch API"],

    github: "https://github.com/PankajSarkar-git",
    live: "https://www.newsunityjewellers.in/",
    featured: true,
  },

  {
    id: 2,
    title: "Sudhir Bastralaya",
    image: project6,

    description:
      "Professional business website built with React featuring responsive layouts and smooth navigation.",

    technologies: ["React", "JavaScript", "HTML5", "CSS3"],

    github: "https://github.com/PankajSarkar-git",
    live: "https://sudhirbastralaya.in/",
  },
];

const personalProjects = [
  {
    id: 3,

    title: "Weather Web App",

    image: project,

    description:
      "Weather forecast application using OpenWeather API with real-time weather information and search functionality.",

    technologies: ["React", "JavaScript", "Fetch API", "CSS3"],

    github: "https://github.com/PankajSarkar-git/weatherapp-react-js",

    live: "https://pankajsarkar-git.github.io/weatherapp-react-js/",
  },

  {
    id: 4,

    title: "Zumba Dance Class",

    image: project2,

    description:
      "Landing page designed for a dance academy with attractive layouts and responsive sections.",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    github: "https://github.com/PankajSarkar-git/zumbaclasss",

    live: "https://pankajsarkar-git.github.io/zumbaclasss/",
  },

  {
    id: 5,

    title: "Todo App",

    image: project3,

    description:
      "Task management application with add, edit, delete and completed task functionality.",

    technologies: ["React", "JavaScript", "CSS3"],

    github: "https://github.com/PankajSarkar-git/todo-list-react.js",

    live: "https://pankajsarkar-git.github.io/todo-list-react.js/",
  },

  {
    id: 6,

    title: "Zap Ecommerce",

    image: project4,

    description:
      "Modern ecommerce frontend built with React and Redux Toolkit. Currently under development.",

    technologies: ["React", "Redux Toolkit", "Tailwind", "JavaScript"],

    github: "https://github.com/PankajSarkar-git/E-Commerce-website",

    live: "https://zap-ecommerce.vercel.app/",

    progress: "Work in Progress",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />

        {project.featured && <span className={styles.featured}>Featured</span>}

        {project.progress && (
          <span className={styles.progress}>{project.progress}</span>
        )}
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.techStack}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.githubBtn}
          >
            <BsGithub />

            <span>GitHub</span>
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={styles.liveBtn}
          >
            <BsCodeSlash />

            <span>Live Demo</span>

            <BsArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section className={`${styles.projectSection} sectionActive`}>
      <div className="main-container">
        <div className={styles.sectionTitle}>
          <span>Portfolio</span>

          <h2>Featured Projects</h2>

          <p>
            A collection of freelance and personal projects focused on building
            responsive, scalable, and user-friendly web applications.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <h3>Freelance Projects</h3>

            <p>
              Websites developed for real businesses with a focus on
              performance, responsiveness, and user experience.
            </p>
          </div>

          <div className={styles.grid}>
            {freelanceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <h3>Personal Projects</h3>

            <p>
              Projects created to improve my skills in React, JavaScript,
              frontend architecture, state management, and API integration.
            </p>
          </div>

          <div className={styles.grid}>
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
