import Hero from "./components/Hero";
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
      <Hero />
      <main>
        <About />
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
