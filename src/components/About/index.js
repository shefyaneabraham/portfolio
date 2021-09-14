import React from "react";
import me from "../../assets/img/profile1-img.jpeg"
import pd from "../../assets/resume/Shefy_Abraham_Resume.pdf"
import history from "../history";

const About = (props) => {

  return (

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>Find out who I am, where I am from and what I am all about.</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={me} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Software Engineer &amp; Fullstack Web Developer.</h3>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 30 May 1996</li>
                  <li><i className="icofont-rounded-right" /> <strong>Pronouns:</strong> She/Her</li>
                  <li><i className="icofont-rounded-right" /> <strong>Website:</strong> shefyaneabraham.netlify.app</li>
                  <li><i className="icofont-rounded-right" /> <strong>Experience:</strong> 1+ years</li>
                  <li><i className="icofont-rounded-right" /> <strong>City:</strong> Bengaluru, India</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 25</li>
                  <li><i className="icofont-rounded-right" /> <strong>Nationality:</strong> Indian</li>
                  <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> Masters</li>
                  <li><i className="icofont-rounded-right" /> <strong>Email:</strong> shefyaneabraham@gmail.com</li>
                  <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <a target="_blank" rel="noreferrer" href={pd} className="button uppercase">Download Resume</a>
            <a href className="button uppercase" onClick={() => history.push('/about')}
            >Read More About Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;