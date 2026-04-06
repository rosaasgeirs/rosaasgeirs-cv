import { useState } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main>
        <CardGrid onSelect={setActiveSection} />
      </main>
      {activeSection && (
        <Modal
          sectionId={activeSection}
          onClose={() => setActiveSection(null)}
        />
      )}
    </>
  );
}

export default App;
