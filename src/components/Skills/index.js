import React from "react";
// import {ProgressBar} from "react-bootstrap";
// import "./style.css"
/**
 * @author
 * @function Intro
 **/

const Skills = (props) => {
    return (
        <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"> Node.js <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  {/* <ProgressBar now={80}/> */}
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/> 
                 </div>
              </div>
              <div className="progress">
                <span className="skill"> Express <i className="val">80%</i></span>
                {/* <ProgressBar now={80}/> */}
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> HTML <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}style={{width:"75%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Bookshelf.js <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width:"75%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> MongoDB, Mongoose <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width:"75%"}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"> CSS <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> React, Redux <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> CI/CD <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> JAVA, Spring Framework <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Angular <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills;