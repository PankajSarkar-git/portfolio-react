import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";

import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoRedux,
  BiLogoGit,
  BiLogoGithub,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiExpress,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

import styles from "./About.module.scss";

const techStack = [
  {
    name: "React.js",
    icon: <BiLogoReact />,
    className: styles.react,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    className: styles.next,
  },
  {
    name: "React Native",
    icon: <BiLogoReact />,
    className: styles.react,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    className: styles.js,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    className: styles.ts,
  },
  {
    name: "HTML5",
    icon: <BiLogoHtml5 />,
    className: styles.html,
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 />,
    className: styles.css,
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss />,
    className: styles.tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: <BiLogoRedux />,
    className: styles.redux,
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs />,
    className: styles.node,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    className: styles.express,
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb />,
    className: styles.mongodb,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    className: styles.firebase,
  },
  {
    name: "Git",
    icon: <BiLogoGit />,
    className: styles.git,
  },
  {
    name: "GitHub",
    icon: <BiLogoGithub />,
    className: styles.github,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    className: styles.figma,
  },
];

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.wrapper}>
        {/* Section Title */}

        <div className={styles.sectionTitle}>
          <span>About Me</span>

          <h2>
            Crafting Modern Web &
            <br />
            Mobile Experiences
          </h2>

          <p>
            I specialize in building modern, scalable, responsive, and
            high-performance web and mobile applications using React.js,
            Next.js, React Native, TypeScript, and the latest frontend
            technologies.
          </p>
        </div>

        {/* About */}

        <div className={styles.aboutContent}>
          {/* Left Image */}

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img
                src="https://avatars.githubusercontent.com/u/126690794?v=4"
                alt="Pankaj Sarkar"
              />
            </div>
          </div>

          {/* Right Content */}

          <div className={styles.content}>
            <h3>Frontend & React Native Developer</h3>

            <p>
              Hi, I'm <strong>Pankaj Sarkar</strong>, a passionate Frontend
              Developer with over <strong>2 years of professional
              experience</strong> building responsive websites and mobile
              applications.

              <br />
              <br />

              I enjoy transforming UI/UX designs into beautiful,
              pixel-perfect interfaces while writing clean, maintainable,
              and scalable code.

              <br />
              <br />

              My expertise includes React.js, Next.js, React Native,
              TypeScript, Redux Toolkit, Tailwind CSS, REST APIs, and
              modern frontend architecture. I'm always eager to learn new
              technologies and solve real-world problems through software
              development.
            </p>

            {/* Information */}

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <Phone size={22} />

                <div>
                  <h4>Phone</h4>
                  <p>+91 8250751984</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Mail size={22} />

                <div>
                  <h4>Email</h4>
                  <p>pankajsarkar527@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MapPin size={22} />

                <div>
                  <h4>Location</h4>
                  <p>Alipurduar, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/PankajSarkar-git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.instagram.com/ordinary_boy_010/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>

            {/* Resume Button */}

            <div className={styles.actionButtons}>
              <a
              href="https://drive.google.com/file/d/1-2nO_HFDJloUbB5dxOSniH23V5SQayOr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
                className={styles.resumeBtn}
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}

        <div className={styles.techSection}>
          <div className={styles.sectionTitleSmall}>
            <span>Skills & Technologies</span>

            <h2>Tech Stack</h2>

            <p>
              Technologies and tools I use to build modern, scalable,
              responsive, and high-performance applications.
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div className={styles.techCard} key={tech.name}>
                <div className={tech.className}>{tech.icon}</div>

                <h3>{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;