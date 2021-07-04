
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import imagedetail from "../assets/img/portfolio/Portfolio-img.png"


const ModalComponent = (props) => {

    const projectDetail = props.data;
    console.log(props.show) ;
    console.log("Inside modal") ;
    if(!props.show){
      return null;
    }else{
    return(
       
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
                <img src={props.imageurl.default} style={{width:"100%", height:"400px"}} alt="" />
                </div>
            </div>
            <div className="col-lg-4 portfolio-info">
              <h4>Project Information</h4>
              <ul>
                <li><strong>Category</strong>: {projectDetail.category}</li>
                {/* <li><strong>Client</strong>: ASU Company</li> */}
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a target ="_blank" href={'https://www.'+projectDetail.projectUrl}>{projectDetail.projectUrl}</a></li>
              </ul>
              {/* <h4>Detailed Description</h4> */}
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
//     console.log("Inside modal");
//     const [isOpen, setIsOpen] = useState(true);
//     const toggleIt = () => {
//         setIsOpen(false);
//         toggleModal();
//     }

//     return (
    
//         <Modal
//             onClose={() => setIsOpen(false)}
//             onOpen={() => setIsOpen(true)}
//             open={isOpen}
//         >
//             <Modal.Header>A modal is showing</Modal.Header>
//             <Modal.Content>
//                 <p>
//                     Your inbox is getting full, would you like us to enable automatic
//                     archiving of old messages?
//                 </p>
//                 </Modal.Content>
//                 <Modal.Actions>
//                     <Button
//                         content="Save"
//                         color='green'
//                         onClick={() => {
//                             setIsOpen(false);
//                         }
//                         }
//                     />
//                     <Button color='black' onClick={toggleIt}>
//                         Cancel
//                     </Button>
//                 </Modal.Actions>
//         </Modal>
    
//             )
// }

            export default ModalComponent;