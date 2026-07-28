import React from "react";
import styles from "./EducationExperiences.module.scss";

const EducationExperiences = () => {
  return (
    <section className={styles.section} id="resume">
      <div className={styles.wrapper}>
        {/* Section Heading */}
        <div className={styles.heading}>
          <span>Resume</span>
          <h2>Education & Experience</h2>
          <p>
            Download my latest resume{" "}
            <a
              href="https://drive.google.com/file/d/1-2nO_HFDJloUbB5dxOSniH23V5SQayOr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </div>

        <div className={styles.columns}>
          {/* ================= Experience ================= */}
          <div>
            <h3 className={styles.title}>Professional Experience</h3>

            <div className={styles.timeline}>
              {/* AtticBits */}
              <div className={styles.card}>
                <h4>Software Engineer</h4>
                <em>AtticBits</em>

                <h5>2024 - Present</h5>

                <p>
                  Developing scalable web and mobile applications using React,
                  Next.js, React Native, TypeScript, JavaScript, Redux, and
                  modern frontend technologies. Collaborating with backend
                  developers to build high-quality production applications,
                  optimize performance, and deliver responsive user experiences.
                </p>

                <ul>
                  <li>
                    Developed responsive web applications using React and
                    Next.js.
                  </li>
                  <li>
                    Built React Native applications for Android and iOS.
                  </li>
                  <li>
                    Integrated REST APIs, authentication, and payment systems.
                  </li>
                  <li>
                    Worked closely with designers and backend developers.
                  </li>
                  <li>
                    Fixed production issues and improved application
                    performance.
                  </li>
                </ul>
              </div>

              {/* Freelancing */}
              <div className={styles.card}>
                <h4>Freelance Frontend & React Native Developer</h4>

                <em>Self-employed (Part-time)</em>

                <h5>2023 - Present</h5>

                <p>
                  Working with clients to design and develop modern websites and
                  mobile applications. Delivering complete solutions using
                  React, React Native, Next.js, JavaScript, TypeScript, and
                  modern frontend technologies.
                </p>

                <ul>
                  <li>
                    Developed custom business websites and admin dashboards.
                  </li>

                  <li>
                    Built React Native applications with real-time chat, voice
                    calling, video calling, and Socket.IO messaging.
                  </li>

                  <li>
                    Integrated REST APIs, Firebase, authentication, push
                    notifications, and payment gateways.
                  </li>

                  <li>
                    Optimized application performance and resolved production
                    issues.
                  </li>

                  <li>
                    Worked directly with clients from requirement gathering to
                    deployment and maintenance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= Education ================= */}
          <div>
            <h3 className={styles.title}>Education</h3>

            <div className={styles.timeline}>
              {/* Frontend */}
              <div className={styles.card}>
                <h4>Frontend Web Development</h4>

                <em>Namaste Dev, Google & YouTube</em>

                <h5>2022 - 2023</h5>

                <p>
                  Learned modern frontend development by building real-world
                  projects with React, JavaScript, HTML5, CSS3, SCSS, API
                  integration, responsive design, Git, and modern development
                  workflows.
                </p>

                <ul>
                  <li>
                    <a
                      href="https://namastedev.com/namaste-react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Namaste React Course
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/148878/certificates/142240/8381522_142240.pdf?1689663019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </li>
                </ul>
              </div>

              {/* Graduation */}
              <div className={styles.card}>
                <h4>Bachelor of Arts</h4>

                <em>Falakata College</em>

                <h5>2018 - 2021</h5>

                <p>
                  Successfully completed Bachelor's degree while developing
                  strong analytical thinking, communication, and teamwork
                  skills.
                </p>

                <ul>
                  <li>
                    <a
                      href="http://www.falakatacollege.org.in/index.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit College Website
                    </a>
                  </li>
                </ul>
              </div>

              {/* Higher Secondary */}
              <div className={styles.card}>
                <h4>Higher Secondary</h4>

                <em>Shilbari Hat High School</em>

                <h5>2011 - 2018</h5>

                <p>
                  Completed higher secondary education while building a strong
                  academic foundation and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperiences;