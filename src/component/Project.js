import React from "react";
import project from "../imgs/project.png";
import project2 from "../imgs/project 2.png";
import project3 from "../imgs/project 3.png";
import { BsCode, BsGithub } from "react-icons/bs";

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
            <div className="projects">
              <div className="project-card">
                <div className="project-item">
                  <img src={project} alt="" />
                </div>
                <div className="project-info">
                  <h5>Weather Web App</h5>
                  <p> React | JavaScript | Fetch API | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a href="https://github.com/PankajSarkar-git/weatherapp-react-js" target="_blank">
                      <BsGithub id="git" />
                    </a>
                    <a href="https://pankajsarkar-git.github.io/weatherapp-react-js/" target="_blank">
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img src={project2} alt="" />
                </div>
                <div className="project-info">
                  <h5>Weather Web App</h5>
                  <p>html5 |Css3| JavaScript </p>
                  <div className="project-link">
                    <a href="https://github.com/PankajSarkar-git/zumbaclasss" target="_blank">
                      <BsGithub id="git" />
                    </a>
                    <a href="https://pankajsarkar-git.github.io/zumbaclasss/" target="_blank">
                      <BsCode id="code" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-item">
                  <img src={project3} alt="" />
                </div>
                <div className="project-info">
                  <h5>Weather Web App</h5>
                  <p> React | JavaScript | html5 | JSX |Css3 </p>
                  <div className="project-link">
                    <a href="https://github.com/PankajSarkar-git/todo-list-react.js" target="_blank">
                      <BsGithub id="git" />
                    </a>
                    <a href="https://pankajsarkar-git.github.io/todo-list-react.js/" target="_blank">
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
