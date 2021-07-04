import React from "react";
import me from "../../assets/img/profileInfo-img.jpeg"
import pd from "../../assets/resume/Shefy_Fullstackdeveloper.pdf"
import Services from "../Services";
import Skills from "../Skills";
import { FaHandPointDown } from "react-icons/fa";
import history from "../history";
// import "./style.css"
/**
 * @author
 * @function Intro
 **/

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
              <img src={me}className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Hi, I'm Shefy Ane Abraham</h3>
              <h2>A Fullstack Developer based in India.</h2>
              {/* ß */}
              {/* <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 30 May 1996</li>
                    <li><i className="icofont-rounded-right" /> <strong>Website:</strong> www.example.com</li>
                    <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> +91 7974070732</li>
                    <li><i className="icofont-rounded-right" /> <strong>City:</strong> Bengaluru, India</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 25</li>
                    <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> Masters</li>
                    <li><i className="icofont-rounded-right" /> <strong>Email:</strong> shefyaneabraham@gmail.com</li>
                    <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                  </ul>
                </div>
              </div> */}
              <p>
              My job involves doing what I love, developing new websites and applications.
              I’ve always sought out opportunities and challenges that are meaningful to me. 
              I absolutely love learning new things and taking on new challenges.
              Currently, I'm a Fullstack developer for Kognoz Technologies in Bengaluru, India.
              </p>
              <p>
              Wanna know more? A more detailed look at my professional capabilities and experience is available below.
              </p>
              <p style={{color: "#eebd73" ,marginBottom: "100px"}}>
              Scroll Down! 
              <FaHandPointDown/>
              </p>
              <a target ="_blank" rel="noreferrer" href={pd} className="button uppercase">Download Resume</a>
              <a href className="button uppercase" onClick={() => history.push('/contact')}>Contact Me</a>
            </div>
          </div>
        </div>
      </section>
      <Skills/>
      <Services/>
      </div>
    )
}

export default AboutInfo;