import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div
            className="opacity-0 animate-fade-in lg:w-1/2 mb-10 lg:mb-0 "
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            <div className="mx-auto relative size-64 sm:size-80 rounded-full border-4 border-gray-800 shadow-xl overflow-hidden">
              <img
                src="/bharath-portfolio-image-actual.png"
                alt="Bharath's image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in lg:w-1/2 mb-10 lg:mb-0 "
            style={{
              animationDelay: "0.4s",
              animationFillMode: "forwards",
            }}
          >
            <h1 className="font-bold mb-4 text-white text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-blue-400">Hello, I'm</span>
              <br />
              Bharath Seshadri
            </h1>
            <h2 className="mb-6 text-gray-300 font-medium text-xl sm:text-2xl">
              Full Stack Engineer
            </h2>
            <p className="mb-8 text-lg text-gray-400 leading-relaxed">
              I create seamless digital experiences with clean code and
              beautiful design. Passionate about building products that solve
              real problems and delight users.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 duration-300 transition-colors shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-gray-800 duration-300 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
