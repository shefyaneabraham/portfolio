import React from "react";
import { FaTrophy } from "react-icons/fa";

const Resume = (props) => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>A life &amp; work showcase</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Shefy Abraham</h4>
              <p><em>Innovative and self-driven professional with a flair for creating elegant and cost-effective solutions in
                a fast-paced environment. </em></p>
              <ul>
                <li>Bengaluru, India</li>

                <li>shefyaneabraham@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>MASTER OF TECHNOLOGY, COMPUTER SCIENCE AND ENGINEERING</h4>
              <h5>2018 - 2020</h5>
              <p><em>Vellore Institute of Technology (VIT), Vellore, TN</em></p>
              <p>CGPA: 8.77/10.0
              </p>
            </div>
            <div className="resume-item">
              <h4>BACHELOR OF ENGiNEERiNG, COMPUTER SCIENCE AND ENGINEERING </h4>
              <h5>2014 - 2018</h5>
              <p><em>Christian College of Engineering and Technology (CCET), Bhilai, CG</em></p>
              <p>CGPA: 8.8/10.0</p>
            </div>
            <h3 className="resume-title">Awards and Recognition</h3>
            <div className="resume-item pb-0">
              <h4>Shefy Abraham</h4>
              <p><FaTrophy /><em>  Star Award for Excellence in delivering RFabric UI and Microservices, Reliance Industries
                Limited (IT-Central Platform), 2020. </em></p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>SOFTWARE ENGiNEER</h4>
              <h5>Jan. 2021 - Present</h5>
              <p><em>Kognoz Technologies Private Limited, Bengaluru, India</em></p>
              <ul>
                <li>Involved in the development of a micro learning platform using Node.js, React and MySQL.</li>
                <li>Developed various microservices using Node.js, Express, MySQL and Bookshelf.js.</li>
                <li>Developed applications in Microsoft Power Apps canvas and model driven using Microsoft Dataverse, SQL.</li>
                <li>Involved in the development of chatbots using Microsoft Power Virtual Agents along with Power Automate for automation.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>FULL STACK INTERN</h4>
              <h5>Jun. 2019 ‑ May. 2020</h5>
              <p><em>Reliance Industries Limited, Mumbai, India</em></p>
              <ul>
                <li>Full stack web developer responsible for both front‑end and back‑end development of a highly scalable Project Management and Tracking
                  Tool with kanban boards responsible for optimizing agile development across the organization.</li>
                <li>Developed various back‑end microservices for an in‑house tool using Java and Spring Boot which aims to automate the Software De‑
                  velopment Life Cycle, integrating various DevOps tools in order to facilitate faster and continuous product delivery enabling Continuous
                  Integration and Continuous Deployment.</li>
                <li>Created various reusable component libraries in Angular for sharing between applications.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;