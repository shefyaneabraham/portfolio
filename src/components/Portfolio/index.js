
import React from "react";
import portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg"
import portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg"
import portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg"
import portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg"
import portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg"
import portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg"
import details from "../../assets/img/portfolio/portfolio-details-1.jpg"

const Portfolio = (props) => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Below you can see some projects I've been working on lately.</p></div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Portfolio Website</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio1} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                  <a href={details} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Detecting negative emotions from Social Media comments and messages using NLP and Machine Learning</h4>
                <p>Academic</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Song Recommender System based on Emotion Level of the Song using NLP and Machine Learning.</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Using Neo4j for community graph: A case study</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Weather Data Analysis and Prediction using Spark</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>iMedBox for diabetes patients</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Project Management System</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Hiperlearn Learning Platform</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;