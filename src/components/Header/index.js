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
      {navbarOpen
        ? <button className={className} onClick={closeMenu}><i className="icofont-close"></i></button>
        : <button className={className} onClick={handleToggle}><i className="icofont-navigation-menu"></i></button>
      }


      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul

          >

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
              ><i className="bx bx-book-content" /> <span>Projects</span></NavLink>
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

          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;