import React from "react";

const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://twitter.com/AbrahamShefy" className="twitter"><i className="bx bxl-twitter" /></a>
          <a href="https://facebook.com/shefy.abraham" className="facebook"><i className="bx bxl-facebook" /></a>
          <a href="https://instagram.com/shefy_abraham30" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="https://linkedin.com/in/shefyaneabraham" className="linkedin"><i className="bx bxl-linkedin" /></a>
          <a href="https://github.com/shefyaneabraham" className="github"><i className="bx bxl-github" /></a>
        </div>
        <div className="copyright">
          © 2021 <strong><span>Shefy Ane Abraham</span></strong>
        </div>
        <div className="credits">
          Design: BootstrapMade
        </div>
      </div>
    </footer>
  )
}

export default Footer;