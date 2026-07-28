import React from "react";
import styles from "./Home.module.scss";

import profile from "../imgs/home.png";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Code,
  Code2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.wrapper}>
        {/* LEFT */}

        <div className={styles.content}>
          <span className={styles.badge}>👋 Available for Freelance</span>

          <h1>
            Hi, I'm
            <span> Pankaj Sarkar</span>
          </h1>

          <h2 className={styles.typing}>
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Next.js Developer",
                2000,
                "React Native Developer",
                2000,
                "JavaScript Developer",
                2000,
                "UI Developer",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              cursor
            />
          </h2>

          <p>
            I build modern, scalable and high-performance websites and mobile
            applications using React, Next.js and React Native. Passionate about
            creating beautiful user experiences with clean, maintainable code.
          </p>

          <div className={styles.contactInfo}>
            <div>
              <Mail size={20} />
              <span>pankajsarkarweb456@gmail.com</span>
            </div>

            <div>
              <Phone size={20} />
              <span>+91 8250751984</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <a
              href="https://drive.google.com/file/d/1-2nO_HFDJloUbB5dxOSniH23V5SQayOr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <Download size={20} />
              Resume
            </a>

            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/PankajSarkar-git"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/pankaj-sarkar-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://www.instagram.com/ordinary_boy_010/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>

            <a
              href="https://www.facebook.com/pankaj.sarkar.5059601"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {/* <img src={profile} alt="Pankaj Sarkar" /> */}
            <Code2Icon size={350}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
