import React, { useEffect } from "react";
import Header from "./components/Header/index"
import Hero from "./components/Hero/index"
import About from "./components/About/index"
import Facts from "./components/Facts/index"
import Skills from "./components/Skills/index"
import Resume from "./components/Resume/index"
import Portfolio from "./components/Portfolio/index"
import Projects from "./components/Portfolio/projects"
import Services from "./components/Services/index"
import Testimonials from "./components/Testimonials/index"
import Contact from "./components/Contact/index"
import Footer from "./components/Footer/index"
import AOS from "aos";
import "aos/dist/aos.css"
import { Switch, Route , BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/scrollToTop";
import AboutInfo from "./components/About/aboutInfo";
/**
 * @author
 * @function App
 **/

const App = (props) => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[]);

  return (
    // <div>
    //   <Header />
    //   <Hero />
    //   <main id="main">
      /* <Switch>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/skills" exact>
                <Skills />
              </Route>
              <Route path="/resume" exact>
                <Resume />
              </Route>
              <Route path="/portfolio" exact>
                <Portfolio />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
        </Switch> */
        /* <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
         <Contact /> 
      </main>
      <Footer />
    </div> */
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <AboutInfo/>
          </Route>
          {/* <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/certifications">
            <Services />
          </Route> */}
          <Route path="/resume">
            <Resume />
          </Route>         
          <Route path="/portfolio">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;