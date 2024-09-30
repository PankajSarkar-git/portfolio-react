import React from "react";
import project from "../imgs/project.png";
import project2 from "../imgs/project 2.png";
import project3 from "../imgs/project 3.png";
import project4 from "../imgs/project 4.png";
import project5 from "../imgs/Project5.png";
import project6 from "../imgs/project6.png";
import { BsCode, BsGithub } from "react-icons/bs";
import "./project.css";

const Project = () => {
  return (
    <div>
      <section className="section Project-section sectionActive">
        <div className="main-container">
          <div className="section-container">
            <div className="section-titel">
              <h3>Project</h3>
              <p>My work</p>
            </div>
            <div className="project-type">
              <h3>Freelance Project</h3>
            </div>
            <div className="projects">
              <div className="project-card">
                <div className="project-item">
                  <img src={project5} alt="New Sunity Jweller’s" />
                </div>
                <div className="project-info">
                  <h5>New Sunity Jweller’s</h5>
                  <p> React | JavaScript | Fetch API | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a
                      href="https://www.newsunityjewellers.in/"
                      target="_blank"
                    >
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img src={project6} alt="Sudhir Bastralaya" />
                </div>
                <div className="project-info">
                  <h5>Sudhir Bastralaya</h5>
                  <p> React | JavaScript | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a href="https://sudhirbastralaya.in/" target="_blank">
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-type">
              <h3>Project</h3>
            </div>
            <div className="projects">
              <div className="project-card">
                <div className="project-item">
                  <img src={project} alt="Weather Web App pnakaj`s project" />
                </div>
                <div className="project-info">
                  <h5>Weather Web App</h5>
                  <p> React | JavaScript | Fetch API | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git/weatherapp-react-js"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a
                      href="https://pankajsarkar-git.github.io/weatherapp-react-js/"
                      target="_blank"
                    >
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img
                    src={project2}
                    alt="Zumba Dance Class pnakaj`s project"
                  />
                </div>
                <div className="project-info">
                  <h5>Zumba Dance Class</h5>
                  <p>html5 |Css3| JavaScript </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git/zumbaclasss"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a
                      href="https://pankajsarkar-git.github.io/zumbaclasss/"
                      target="_blank"
                    >
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img src={project3} alt="ToDO List  pnakaj`s project" />
                </div>
                <div className="project-info">
                  <h5>ToDO List</h5>
                  <p> React | JavaScript | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git/todo-list-react.js"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a
                      href="https://pankajsarkar-git.github.io/todo-list-react.js/"
                      target="_blank"
                    >
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img src={project4} alt="Zap! Ecommerce pnakaj`s project" />
                </div>
                <div className="project-info">
                  <h5>Zap! Ecommerce</h5>
                  <p>
                    {" "}
                    React | Redux-Toolkit | JavaScript | html5 | JSX |Css3
                    |Tailwindcss
                  </p>
                  <p> It is a work in progress </p>
                  <div className="project-link">
                    <a
                      href="https://github.com/PankajSarkar-git/E-Commerce-website"
                      target="_blank"
                    >
                      <BsGithub id="git" />
                    </a>
                    <a href="https://zap-ecommerce.vercel.app/" target="_blank">
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
