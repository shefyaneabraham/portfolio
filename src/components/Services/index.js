import React from "react";
import cc from "../../assets/certificates/cuda-course.pdf";
import nc from "../../assets/certificates/node-course.pdf";
import rc from "../../assets/certificates/react-course.pdf";
import sc from "../../assets/certificates/spring-course.pdf";
import spc from "../../assets/certificates/spatial-course.pdf";

const Services = (props) => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>Below is a quick overview of my certifications</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box iconbox-grey">
              <div className="icon">

                <i className='bx bxl-react' ></i>

              </div>
              <h4><a target="_blank" rel="noreferrer" href={rc}>Modern React with Redux by Stephen Grider</a></h4>
              <p>Udemy, 2021</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box iconbox-grey ">
              <div className="icon">

                <i class='bx bxl-nodejs'></i>
              </div>
              <h4><a target="_blank" rel="noreferrer" href={nc}>The Complete Node.js Developer Course(3rd Edition)</a></h4>
              <p>Udemy, 2020</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box iconbox-grey">
              <div className="icon">

                <i className="bx bx-tachometer" />
              </div>
              <h4><a target="_blank" rel="noreferrer" href={sc}>Go Java Fullstack with Springboot and Angular</a></h4>
              <p>Udemy, 2020</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box iconbox-grey">
              <div className="icon">

                <i className="bx bx-layer" />
              </div>
              <h4><a target="_blank" rel="noreferrer" href={cc}>Introduction to GPU Computing with CUDA</a></h4>
              <p>Udemy, 2018</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box iconbox-grey">
              <div className="icon">

                <i className="bx bx-slideshow" />
              </div>
              <h4><a target="_blank" rel="noreferrer" href={spc}>Spatial Data Science and Applications</a></h4>
              <p>Yonsei University, Coursera, 2018</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services;