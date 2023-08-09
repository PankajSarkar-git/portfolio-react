import React from "react";
import { MdEmail, MdLocationOn, MdPhone, MdShare } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="main-container">
          <div className="section-container">
            <div className="section-titel">
              <h2>Contact</h2>
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
                <form action="" id="form">
                  <div className="name-email">
                    <input
                      type="text"
                      required
                      name=""
                      id="name"
                      placeholder="Enter Your Name"
                    />
                    <input
                      type="email"
                      required
                      name=""
                      id="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="sub-message">
                    <input
                      type="text"
                      name=""
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="5"
                      required
                      placeholder="Type Your Message"
                    ></textarea>
                  </div>
                  <input type="submit" value="Send Message"  className="button"/>
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
