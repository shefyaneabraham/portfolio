import React from "react";



const ProjectDetails = (props) => {
    return (
        <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="portfolio-title">This is an example of portfolio detail</h2>
              <div className="owl-carousel portfolio-details-carousel">
                <img src="assets/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
                <img src="assets/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
                <img src="assets/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProjectDetails;