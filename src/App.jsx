import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
