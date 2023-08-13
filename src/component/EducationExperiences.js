import React from "react";

const EducationExperiences = () => {
  return (
    <div>
      <section className="section Education-Experiences">
        <div className="main-container">
          <div className="section-container">
            <div className="section-titel">
              <h3>Resume</h3>
              <p>
                Check my resume <a target="_blank" href="https://drive.google.com/file/d/1INtvlZtJH8DvALmV-s56QNottzSsEKhs/view?usp=drive_link">HERE</a>
              </p>
            </div>
            <div className="container resume-container">
              <h3 className="container-titel">Education</h3>
              <div className="resume-item">
                <h4>Front-end web development</h4>
                <p><em>Namaste Dev, Google , Youtube</em></p>
                <h5>2022-2023</h5>
                <p><em>
                Learned Front-End web development using the React. Worked on collaborative projects and improved a lot on Communication and leadership skills.
                </em></p>
                <ul>
                    <li><a href="https://namastedev.com/namaste-react/">Namaste Dev</a></li>
                    <li><em>Check my certificate</em><a href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/148878/certificates/142240/8381522_142240.pdf?1689663019" target="_blank"> here</a></li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Graduated in Arts</h4>
                <p><em>Falakata College</em></p>
                <h5>2018-2021</h5>
                <p><em>
                Completed my Graduation from this College.
                </em></p>
                <ul>
                    <li><a href="http://www.falakatacollege.org.in/index.aspx">Falakata College</a></li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>higher secondary</h4>
                <p><em>Shilbari Hat High School</em></p>
                <h5>2011-2018</h5>
                <p><em>
                Completed my Higher Secondary education from this school.
                </em></p>
                <ul>
                    <li><a href="#">SHILBARIHAT HIGH SCHOOL</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationExperiences;
