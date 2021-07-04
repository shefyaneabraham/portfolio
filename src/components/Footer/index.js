import React from "react";

const Footer = (props) => {
    return (
        <footer id="footer">
        <div className="container">
          {/* <h3>Shefy Ane Abraham</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
           */}
          <div className="social-links">
          <a href="https://twitter.com/AbrahamShefy" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="https://facebook.com/shefy.abraham" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="https://instagram.com/shefycient" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="https://linkedin.com/in/shefyaneabraham" className="linkedin"><i className="bx bxl-linkedin" /></a>
            <a href="https://github.com/shefyaneabraham" className="github"><i className="bx bxl-github" /></a>
          </div>
          <div className="copyright">
            © Copyright <strong><span>Shefy Ane Abraham</span></strong>
          </div>
          <div className="credits">
            Design: BootstrapMade
          </div>
        </div>
      </footer>
    )
}

export default Footer;