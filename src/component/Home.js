import home from "../homeimgs/home.png";
import "./componentStyle.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import {AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <section className="section sectionActive">
        <div className="home">
          <div className="right-side">
          {/*================= main ================= */}
            <div className="name">
              <h1>Pankaj Sarkar</h1>
              <h2>
                I'm a passionate 
                <span className="front-end"> Front-End Web-Developer </span> from
                India
              </h2>
            </div>
            <div className="contact">
              <p className="email">Email: pankajsarkar527@gmail.com</p>
              <p className="number">call: +91 8250751984</p>
            </div>
            {/* =====================socal media===================== */}
            <div className="socal">
              <a href="https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/" target="_blank">
                <BsLinkedin  className="socal-media" />
              </a>
              <a href="https://github.com/PankajSarkar-git" target="_blank">
                <BsGithub  className="socal-media" />
              </a>
              <a href="https://www.instagram.com/below_average_boy_/" target="_blank">
                <AiFillInstagram id="insta" className="socal-media" />
              </a>
              <a href="https://www.facebook.com/pankaj.sarkar.5059601" target="_blank">
                <BsFacebook className="socal-media" />
              </a>
            </div>
          </div>
          {/*=================== Photo =================== */}
          <div className="left-side">
            <img src={home} alt="" id="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
