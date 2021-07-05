import React, { useState } from "react";
import portfolio1 from "../../assets/img/portfolio/Portfolio-img.png"
import portfolio3 from "../../assets/img/portfolio/social-media-img.jpeg"
import portfolio2 from "../../assets/img/portfolio/song-recommender.jpeg"
import portfolio4 from "../../assets/img/portfolio/neo4j-img.jpeg"
import portfolio5 from "../../assets/img/portfolio/weather-img.jpeg"
import portfolio6 from "../../assets/img/portfolio/iot-img.jpeg"
import portfolio7 from "../../assets/img/portfolio/project-manage.jpeg"
import portfolio8 from "../../assets/img/portfolio/hiperlearn-img.png"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModalComponent from "../modalComponent";
import { Button } from "react-bootstrap";


const Projects = (props) => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);
    const handleShow5 = () => setShow5(true);
    const handleShow6 = () => setShow6(true);
    const handleShow7 = () => setShow7(true);
    const handleShow8 = () => setShow8(true);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);
    const handleClose5 = () => setShow5(false);
    const handleClose6 = () => setShow6(false);
    const handleClose7 = () => setShow7(false);
    const handleClose8 = () => setShow8(false);
    const [data] = useState({
        details: [
            {
                "id": "1",
                "title": "Personal Portfolio Website.",
                "category": "Personal Project",
                "techStack": "React JS, HTML, CSS",
                "projectDate": "05 July, 2021",
                "projectUrl": "shefyaneabraham.netlify.app/",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A personal portfolio website built using React JS. This site is going to be hub for all I have done and all I am about to do. Basically a life and work showcase. Checkout the URL for more information."
            },
            {
                "id": "2",
                "title": "Song Recommender System based on Emotion Level of the Song using NLP and Machine Learning.",
                "category": "Academic Project",
                "techStack": "ML, NLP, Naive Bayes and SVM classifiers",
                "projectDate": "19 September, 2018",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A recommender system that shall detect the emotion of a person from the songs that he/she has been listening to and recommend a list of songs based on the current emotion level of the user in order to satisfy the user’s mood using naive Bayes and SVM classifiers."
            },
            {
                "id": "3",
                "title": "Detecting negative emotions from Social Media comments and messages using NLP and Machine Learning.",
                "category": "Academic Project",
                "techStack": "ML, NLP, Tf-idf",
                "projectDate": "21 September, 2018",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A deep learning model to detect the negative emotions from social networks and alert the user and take steps eliminating the negative user using Tf-idf to process the dataset and naive bayes for training the dataset."
            },
            {
                "id": "4",
                "title": "Hiperlearn Learning Platform.",
                "category": "Professional Project",
                "techStack": "React, Node JS, MySQL",
                "projectDate": "15 July, 2021",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "Hiperlearn is a micro learning platform enabling high performance.It helps people learn, retain and implement knowledge in a productive manner and enables the creation of engaging, interactive and measurable microlearning experiences that help learners and organizations to achieve their goals."
            },
            {
                "id": "5",
                "title": "Using Neo4j for community graph: A case study",
                "category": "Academic Project",
                "techStack": "Neo4j, Ruby on Rails",
                "projectDate": "14 November, 2018",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A community database which stores the relationship between two people in a community and retrieve the relation between two random users if any."
            },
            {
                "id": "6",
                "title": "Weather Data Analysis and Prediction using Spark",
                "category": "Academic Project",
                "techStack": "Big Data, Spark",
                "projectDate": "10 April, 2019",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "Analysis on the weather dataset and predict the average temperature, humidity and dew point of next year on the basis of the previous years."
            },
            {
                "id": "7",
                "title": "iMedBox for diabetes patients",
                "category": "Academic Project",
                "techStack": "IOT, Embedded C",
                "projectDate": "6 April, 2019",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A modern healthcare IoT system with an intelligent medicine box along with sensors for health monitoring and diagnosis."
            },
            {
                "id": "8",
                "title": "Project Management System",
                "category": "Professional Project",
                "techStack": "Node JS, Angular, MongoDB",
                "projectDate": "26 May, 2020",
                "projectUrl": "",
                "image": "/assets/img/portfolio/Portfolio-img.png",
                "description": "A highly scalable Project Management and Tracking Tool with kanban boards responsible for optimizing agile development across an organization."
            },
        ]
    });


    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Below you can see some projects I've been working on lately.</p></div>
                {/* <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div> */}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                    >
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio1} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Personal Portfolio Website</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <Button className="link-btn"
                                            onClick={handleShow1}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[0]}
                                            imageurl={require('../../assets/img/portfolio/Portfolio-img.png')}
                                            show={show1}
                                            onHide={handleClose1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio2} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Song Recommender System based on Emotion Level of the Song using NLP and Machine Learning.</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        {/* <a href={portfolio3} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                                        <a href={details} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link" /></a> */}
                                        <Button className="link-btn"
                                            onClick={handleShow2}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[1]}
                                            imageurl={require('../../assets/img/portfolio/song-recommender.jpeg')}
                                            show={show2}
                                            onHide={handleClose2}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio3} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Detecting negative emotions from Social Media comments and messages using NLP and Machine Learning</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow3}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[2]}
                                            imageurl={require('../../assets/img/portfolio/social-media-img.jpeg')}
                                            show={show3}
                                            onHide={handleClose3}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio8} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Hiperlearn Learning Platform</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow4}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[3]}
                                            imageurl={require('../../assets/img/portfolio/hiperlearn-img.png')}
                                            show={show4}
                                            onHide={handleClose4}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio4} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Using Neo4j for community graph: A case study</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow5}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[4]}
                                            imageurl={require('../../assets/img/portfolio/neo4j-img.jpeg')}
                                            show={show5}
                                            onHide={handleClose5}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio5} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Weather Data Analysis and Prediction using Spark</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow6}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[5]}
                                            imageurl={require('../../assets/img/portfolio/weather-img.jpeg')}
                                            show={show6}
                                            onHide={handleClose6}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio6} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>iMedBox for diabetes patients</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow7}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[6]}
                                            imageurl={require('../../assets/img/portfolio/iot-img.jpeg')}
                                            show={show7}
                                            onHide={handleClose7}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <div className="portfolio-wrap">
                                <img src={portfolio7} alt="" style={{ maxWidth: "100%", border: "solid #363636" }} />
                                <div className="portfolio-info">
                                    <h4>Project Management System</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                     <Button className="link-btn"
                                            onClick={handleShow8}

                                        >
                                            <i className="bx bx-plus" /><span title="Know More" /></Button>

                                        <ModalComponent
                                            data={data.details[7]}
                                            imageurl={require('../../assets/img/portfolio/project-manage.jpeg')}
                                            show={show8}
                                            onHide={handleClose8}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    )
}

export default Projects;