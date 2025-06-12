import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { useEffect, useRef } from "react";

const Projects = () => {
  const sectionRef = useRef();
  const projectRefs = useRef([]);

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

    projectRefs.current.forEach((projectRefCurrent) => {
      if (projectRefCurrent) observer.observe(projectRefCurrent);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);

      projectRefs.current.forEach((projectRefCurrent) => {
        if (projectRefCurrent) observer.unobserve(projectRefCurrent);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-16 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Here are some of my recent projects showcasing my skills and
            expertise in web development and design.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="opacity-0 duration-300 shadow-md hover:shadow-lg transition-shadow rounded-xl bg-gray-800"
              ref={(ele) => (projectRefs.current[idx] = ele)}
              style={{
                animationDelay: `${0.2 + 0.1 * idx}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover duration-500 hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.technologies.map((technology, idx) => (
                    <span
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-gray-300 hover:text-white"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        width={"24"}
                        height={"24"}
                        className="mr-1"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>{" "}
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
