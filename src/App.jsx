import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster />
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
