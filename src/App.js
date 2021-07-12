import React, { useEffect } from "react";
import Header from "./components/Header/index"
import Resume from "./components/Resume/index"
import Projects from "./components/Portfolio/projects"
import Contact from "./components/Contact/index"
import Footer from "./components/Footer/index"
import AOS from "aos";
import "aos/dist/aos.css"
import { Switch, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/scrollToTop";
import AboutInfo from "./components/About/aboutInfo";
import history from "./components/history";

const App = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <>
      <Router history={history}>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <AboutInfo />
          </Route>
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