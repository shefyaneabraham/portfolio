
import React from "react";
import { Modal } from "react-bootstrap";


const ModalComponent = (props) => {

  const projectDetail = props.data;
  if (!props.show) {
    return null;
  } else {
    return (

      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="portfolio-details"

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {projectDetail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container" data-aos="fade-down">
            <div className="row">
              <div className="col-lg-8">
                <div className=" portfolio-details-carousel">
                  <img src={props.imageurl.default} alt="" />
                </div>
              </div>
              <div className="col-lg-4 portfolio-info">
                <h4>Project Information</h4>
                <ul>
                  <li><strong>Category</strong>: {projectDetail.category}</li>
                  <li><strong>Tech Stack</strong>: {projectDetail.techStack}</li>
                  <li><strong>Project date</strong>: 01 March, 2020</li>
                  {projectDetail.projectUrl ? (
                    <li><strong>Project URL</strong>: <a target="_blank" rel="noreferrer" href={'https://www.' + projectDetail.projectUrl}>{projectDetail.projectUrl}</a></li>

                  ) : (null)}
                </ul>
                <p>
                  {projectDetail.description}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}


export default ModalComponent;