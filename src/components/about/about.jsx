import React from "react";
import "./about.css";
import Me from "../../assets/image2.jpg"
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="image2" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 years FRONTEND DEVELOPPER</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>many projects using differents software like :proteus, visual studio code , etc...</small>
            </article>
          </div>

          <p>
             Hi, I'm KENNE DATEWO SUZY  and I'm a SOFTWARE ENGINNEERING based in BUEA.I have 1 years of experience in FRONTEND DEVELOPPER, and I'm passionate about ICT.
              My skills include:
              CODING,
              DESIGN,
              TEAMWORK,
              LEADERSHIP.
              In my free time, I enjoy music and read some books .Feel free to explore my portfolio to see examples of my work, or contact me to discuss any potential projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;

