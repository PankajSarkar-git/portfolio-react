import React from "react";
import { MdEmail, MdLocationOn, MdPhone, MdShare } from "react-icons/md";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="main-container">
          <div className="section-container">
            <div className="section-titel">
              <h3>Contact</h3>
              <p>Reach me at</p>
            </div>
            <div className="tech contact-container">
              <div className="tech-item contact-item">
                <div className="contact-logo">
                  <MdLocationOn className="logo" />
                </div>
                <div className="contact-info">
                  <h4>My Address</h4>
                  <p>Shlibari Hat, Alipurduar, West Bengal</p>
                </div>
              </div>
              <div className="tech-item contact-item">
                <div className="contact-logo">
                  <MdShare className="logo" />
                </div>
                <div className="contact-info">
                  <h4>MSocial Profiles</h4>
                  <div className="socal">
                    <a
                      href="https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/"
                      target="_blank"
                    >
                      <BsLinkedin className="socal-media" />
                    </a>
                    <a
                      href="https://github.com/PankajSarkar-git"
                      target="_blank"
                    >
                      <BsGithub className="socal-media" />
                    </a>
                    <a
                      href="https://www.instagram.com/below_average_boy_/"
                      target="_blank"
                    >
                      <AiFillInstagram id="insta" className="socal-media" />
                    </a>
                    <a
                      href="https://www.facebook.com/pankaj.sarkar.5059601"
                      target="_blank"
                    >
                      <BsFacebook className="socal-media" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tech-item contact-item">
                <div className="contact-logo">
                  <MdEmail className="logo" />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <p>pankajsarkar527@gmail.com</p>
                </div>
              </div>
              <div className="tech-item contact-item">
                <div className="contact-logo">
                  <MdPhone className="logo" />
                </div>
                <div className="contact-info">
                  <h4>Call</h4>
                  <p>+91 8250751984</p>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div className="contact-form">
              <div className="section-titel">
                <p>Contact me</p>
              </div>
              <div className="form-container">
                <form
                  action="https://formspree.io/f/xqkvperj"
                  id="form"
                  method="POST"
                >
                  <div className="name-email">
                    <div className="inpit-container">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        required
                        name="UserName"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="inpit-container">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        required
                        name="Email"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="sub-message">
                    <div className="inpit-container">
                      <label htmlFor="">Subject</label>
                      <input
                        type="text"
                        name="Subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="inpit-container">
                      <label htmlFor="">Message</label>
                      <textarea
                        name="message"
                        id="Message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Type Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="button"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
