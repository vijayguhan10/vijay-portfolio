import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import OpenSource from "./components/OpenSource";
import Blog from "./components/Blog";
import Fun from "./components/Fun";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="font-primary mono-page">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Home />
        <AboutMe />
        <Projects />
        <OpenSource />
        <Blog />
        <Experience />
        <Achievements />
        {/* <Gallery /> */}
        <Fun />
        <Contact />
      </main>
    </div>
  );
}

export default App;
