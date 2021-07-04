import React from "react";
import arrowImage from "../../assets/down-arrow.png"
// import "./style.css"
/**
 * @author
 * @function Intro
 **/

const Hero = (props) => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Shefy Ane Abraham</h1>
          <p>Software Engineer | Fullstack Developer<span className="typed" data-typed-items="Software Engineer, Fullstack Developer, Freelancer" /></p>
          <div className="social-links">
            <a href="https://twitter.com/AbrahamShefy" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="https://facebook.com/shefy.abraham" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="https://instagram.com/shefycient" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="https://linkedin.com/in/shefyaneabraham" className="linkedin"><i className="bx bxl-linkedin" /></a>
            <a href="https://github.com/shefyaneabraham" className="github"><i className="bx bxl-github" /></a>
          </div>
        </div>
        <div className="hero-scrollDown">
            <p >Scroll</p>
            {/* <i className="icofont-long-arrow-down" /> */}
            <img src={arrowImage} alt="ScrollDown Arrow" />
          </div>
      </section>
    )
}

export default Hero;