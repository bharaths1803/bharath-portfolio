import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data";

const Header = () => {
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPostion = window.scrollY;
      setHasBeenScrolled(scrollPostion > 50);

      const allSections = document.querySelectorAll("section[id]");
      allSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPostion >= sectionTop &&
          scrollPostion <= sectionTop + sectionHeight
        )
          setActiveSection(sectionId);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasBeenScrolled
          ? "bg-gray-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-blue-400">
            Portfolio
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((navLink, idx) => (
              <a
                href={navLink.href}
                key={navLink.name}
                className={`text-sm font-medium ${
                  activeSection === navLink.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                {navLink.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800"
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}
          >
            {ismobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {ismobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="py-3 space-y-1">
            {navLinks.map((navLink, idx) => (
              <a
                href={navLink.href}
                key={navLink.name}
                className={`block rounded-md px-3 py-2 font-medium ${
                  activeSection === navLink.href.substring(1)
                    ? "bg-gray-800 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {navLink.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
