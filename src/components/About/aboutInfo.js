import React from "react";
import me from "../../assets/img/profileInfo-img.jpeg"
import pd from "../../assets/resume/Shefy_Abraham_Resume.pdf"
import Services from "../Services";
import Skills from "../Skills";
import { FaHandPointDown } from "react-icons/fa";
import history from "../history";

const AboutInfo = (props) => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>Let me introduce myself</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={me} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Hi, I'm Shefy Ane Abraham</h3>
              <h2>A Fullstack Developer based in India.</h2>
              <p>Hello! My name is Shefy and I love taking on challenges and finding innovative solutions.
                I'm not just a developer - I'm a problem solver, a creative thinker, and a versatile technophile.
              </p>
              <p>
                I’ve always sought out opportunities and challenges that are meaningful to me. 
                Therefore, I’ve had the privilege of working at a huge corporation, a start-up, as well as a customer engagement software company.
              </p>
              <p>
                I have experience developing multiple SaaS solutions both from scratch and by customizing existing platforms. 
                Currently, I'm working as a Software Developer at Khoros, India.
              </p>
              <p>
                Wanna know more? A more detailed look at my professional capabilities and experience is available below.
              </p>
              <p style={{ color: "#eebd73", marginBottom: "100px" }}>
                Scroll Down!
                <FaHandPointDown />
              </p>
              <a target="_blank" rel="noreferrer" href={pd} className="button uppercase">Download Resume</a>
              <a href className="button uppercase" onClick={() => history.push('/contact')}>Contact Me</a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Services />
    </div>
  )
}

export default AboutInfo;