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
              <h6>Back End</h6>
              <div className="progress">
                <span className="skill"> Node.js <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  {/* <ProgressBar now={80}/> */}
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/> 
                 </div>
              </div>
              <div className="progress">
                <span className="skill"> Express JS <i className="val">80%</i></span>
                {/* <ProgressBar now={80}/> */}
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Spring Framework <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}style={{width:"75%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Javascript<i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width:"90%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Mongoose <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width:"75%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Bookshelf JS <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width:"75%"}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <h6>Front End</h6>
              <div className="progress">
                <span className="skill"> Angular <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width:"65%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> React/Redux <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> HTML5 <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> CSS3 <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> SASS <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{width:"55%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> bootstrap <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width:"65%"}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <h6>DATABASE</h6>
              <div className="progress">
                <span className="skill"> MongoDB <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  {/* <ProgressBar now={80}/> */}
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/> 
                 </div>
              </div>
              <div className="progress">
                <span className="skill"> MySQL <i className="val">80%</i></span>
                {/* <ProgressBar now={80}/> */}
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> PostgreSQL <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}style={{width:"65%"}} />
                </div>
              </div>
              <h6>Language</h6>
              <div className="progress">
                <span className="skill"> Javascript <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}style={{width:"85%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Typescript <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}style={{width:"65%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Java <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}style={{width:"65%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Python <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}style={{width:"55%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> C <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}style={{width:"75%"}} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <h6>TOOLS AND TECHNOLOGIES</h6>
              <div className="progress">
                <span className="skill"> Git Version Control <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> JIRA <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width:"80%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> JENKINS <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill"> DEVOPS TOOLS <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> CI/CD <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> AGILE <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Strapi CMS <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Microsoft Power Platform <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width:"70%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Docker <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
              <div className="progress">
                <span className="skill"> Microsoft Azure Infrastructure <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width:"60%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills;