import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Education from "./components/Education";
import SkillsAndLanguages from "./components/SkillsAndLanguages";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./styles/animations.css";
import "./styles/sections.css";

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <Hero />
      <main>
        <About />
        <Story />
        <Highlights />
        <Education />
        <SkillsAndLanguages />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
