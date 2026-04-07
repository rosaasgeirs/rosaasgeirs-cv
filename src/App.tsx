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
      <Hero />
      <About />
      <Highlights />
      <Education />
      <SkillsAndLanguages />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
