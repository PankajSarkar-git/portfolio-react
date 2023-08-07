import React from "react";
// import { IoIosArrowForward } from 'react-icons/fa';
// import myimg from "../img/myimg"
// import myimg from "../homeimgs/img1.jpg";
import { Sparkle } from "lucide-react";
// import {BiLogoReact} from "react-icons/fa"
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
const About = () => {
  return (
    <div>
      <section className="section sectionActive">
        {/* ===================== About me  ===================== */}
        <div className="main-container">
        <div className="about-me">
          <div className="section-titel">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>
          <div className="container container-About">
            <div className="my-img">
              <img
                src="https://avatars.githubusercontent.com/u/126690794?v=4"
                alt=""
                className=""
              />
            </div>
            <div className="info-container">
              <div className="info">
                <h2>Front-end web-developer</h2>
                <p>
                  Writing code to build proper functional web apps is my
                  passion. I have a strong background in web development and
                  have worked on various projects. I am a self-motivated and
                  self-driven individual who is always looking for new
                  challenges and opportunities.I have been curious to learn
                  about new kinds of technologies since childhood and realized
                  that this is what I'm most passionate about.
                </p>
              </div>
              <div className="socal-link">
                <div className="left-side-ul">
                  <ul className="link-item">
                    <li>
                      <Sparkle color="green" className="arrow" />
                      Linkedin :
                      <a
                        href="https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/"
                        target="_blank"
                      >
                        Pankaj Sarkar
                      </a>
                    </li>
                    <li>
                      <Sparkle color="green" className="arrow" /> Github :
                      <a
                        href="https://github.com/PankajSarkar-git"
                        target="_blank"
                      >
                        PankajSarkar-git
                      </a>
                    </li>
                    <li>
                      <Sparkle color="green" className="arrow" /> Phone :
                      <span className="span-class">8250751984</span>
                    </li>
                  </ul>
                </div>
                <div className="right-side-ul">
                  <ul className="link-item">
                    <li>
                      <Sparkle color="green" className="arrow" />
                      Instagram :
                      <a
                        href="https://www.instagram.com/below_average_boy_/"
                        target="_blank"
                      >
                        Pankaj Sarkar
                      </a>
                    </li>
                    <li>
                      <Sparkle color="green" className="arrow" /> Email :
                      <span className="span-class">
                        pankajsarkar527@gmail.com
                      </span>
                    </li>
                    <li>
                      <Sparkle color="green" className="arrow" /> City :
                      <span className="span-class">
                        Alipurduar, West Bangal
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      {/* </section>
      <section className="section sectionActive"> */}
      <div className="tech-container">
      <div className="section-titel">
        <h2>Tech-Stack I use</h2>
      </div>
      <div className="tech">
        <div className="trch-item">
        <BiLogoReact id="react"/> <p>React JS</p>
        </div>
        <div className="trch-item">
        <BiLogoJavascript id="javaScript"/> <p>React JS</p>
        </div>
        <div className="trch-item">
        <BiLogoHtml5 id="html"/> <p>React JS</p>
        </div>
        <div className="trch-item">
        <BiLogoCss3 id="css"/> <p>React JS</p>
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default About;
