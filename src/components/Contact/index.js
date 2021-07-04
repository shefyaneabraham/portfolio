import React from "react";
import emailjs from "emailjs-com";
const Contact = (props) => {
  
  function sendEmail(e) {
    e.preventDefault();
    document.getElementById('loading').style.display ="block";
    document.getElementById('sent-message').style.display ="none";
    document.getElementById('error-message').style.display ="none";
    emailjs.sendForm('service_7546ifs', 'template_zhcgkgk', e.target, 'user_1p06fNIzCxsM5ONwGr0mT')
      .then((result) => {
        document.getElementById('loading').style.display ="none";
        document.getElementById('sent-message').style.display ="block";
      }).catch( (error) => {
        document.getElementById('loading').style.display ="none";
        document.getElementById('error-message').style.display ="block";
      });
  }
    return (
      
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          
          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map" />
                  <h4>Location:</h4>
                  <p>Bengaluru, India</p>
                </div>
                <div className="email">
                  <i className="icofont-envelope" />
                  <h4>Email:</h4>
                  <p>shefyaneabraham@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="icofont-phone" />
                  <h4>Call:</h4>
                  <p>+91 00000000</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form className="php-email-form" onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="from_name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="reply_to" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading" id="loading">Loading</div>
                  <div className="error-message"id ="error-message">There was an error. Please try again later.</div>
                    <div className="sent-message" id="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><input type="submit" value="Send Message" /></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;