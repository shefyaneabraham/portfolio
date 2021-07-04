import React, { useState } from "react";

import { NavLink } from 'react-router-dom';


const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    document.body.classList.add('mobile-nav-active');
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    document.body.classList.remove('mobile-nav-active');
    setNavbarOpen(false)
  }
  let className = navbarOpen ? 'mobile-nav-active mobile-nav-toggle' : 'mobile-nav-toggle d-xl-none';
  return (
    <div>
      {/* <button className ={className} onClick={handleToggle} ><i className="icofont-navigation-menu"></i></button> */}

      {navbarOpen
        ? <button className={className} onClick={closeMenu}><i className="icofont-close"></i></button>
        : <button className={className} onClick={handleToggle}><i className="icofont-navigation-menu"></i></button>
      }

      {/* <div className="mobile-menu-icon" >
      <MdMenu />
    </div> */}
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul
          // className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
          >
            {/* <div className="closeNavIcon">
            <MdClose/>
          </div> */}
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <NavLink to="/"
                activeStyle={{

                  background: "#eebd73"
                }}
                onClick={() => closeMenu()}
                exact><i className="bx bx-home" /><span>Home</span></NavLink>
            </li>
            <li >
              <NavLink to="/about"
                activeStyle={{

                  background: "#eebd73"
                }}
                onClick={() => closeMenu()}
                exact><i className="bx bx-user" /><span>About</span></NavLink>
            </li>
            {/* <li>
            <NavLink to ="/skills"
            activeStyle={{
            background: "#eebd73"
            }}
            onClick={() => closeMenu()}
            exact
            ><i className="bx bx-brain" /><span>Skills</span></NavLink>
          </li>
          <li>
            <NavLink to ="/certifications"
            activeStyle={{
              
              background: "#eebd73"
              }}
            onClick={() => closeMenu()}
            exact
            ><i className="bx bx-certification" /> <span>Certifications</span></NavLink>
          </li> */}
            <li>
              <NavLink to="/resume"
                activeStyle={{

                  background: "#eebd73"
                }}
                onClick={() => closeMenu()}
                exact
              ><i className="bx bx-file-blank" /> <span>Resume</span></NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"
                activeStyle={{

                  background: "#eebd73"
                }}
                onClick={() => closeMenu()}
                exact
              ><i className="bx bx-book-content" /> <span>Portfolio</span></NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                activeStyle={{

                  background: "#eebd73"
                }}
                onClick={() => closeMenu()}
                exact
              ><i className="bx bx-envelope" /> <span>Contact</span></NavLink>
            </li>
            {/* <li className="active">
            <NavLink to="/" exact>
            <i className="bx bx-home" /> <span>Home</span>
          </NavLink>
          </li> */}
            {/* <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
          <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
          <li><a href="#portfolio"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li> */}
            {/* <li><a href="#services"><i className="bx bx-server" /> <span>Services</span></a></li> */}
            {/* <li><a href="#testimonials"><i className="bx bx-comment-dots" /> <span>Testimonials</span></a></li> */}
            {/* <li><a href="#contact"><i className="bx bx-envelope" /> <span>Contact</span></a></li> */}

          </ul>
        </nav>{/* .nav-menu */}
      </header>
    </div>
  )
}

export default Header;