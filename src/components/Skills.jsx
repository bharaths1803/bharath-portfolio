import { useEffect, useRef } from "react";
import { categoryNames, skills } from "../data";

const Skills = () => {
  const sectionRef = useRef();
  const skillRefs = useRef([]);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);

    return acc;
  }, {});

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

    skillRefs.current.forEach((skillRefCurrent) => {
      if (skillRefCurrent) observer.observe(skillRefCurrent);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);

      skillRefs.current.forEach((skillRefCurrent) => {
        if (skillRefCurrent) observer.unobserve(skillRefCurrent);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-16 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            {" "}
            A comprehensive overview of my technical skills and proficiency
            levels across various development areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], categoryIdx) => (
              <div
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${0.3 + 0.1 * categoryIdx}s`,
                  animationFillMode: "forwards",
                }}
                key={category}
              >
                <h3 className="mb-6 text-xl font-bold pb-2 text-white border-b border-gray-700">
                  {categoryNames[category]}
                </h3>
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIdx) => (
                    <div
                      className="opacity-0"
                      ref={(ele) =>
                        (skillRefs.current[7 * categoryIdx + skillIdx] = ele)
                      }
                      style={{
                        animationDelay: `${
                          0.4 + 0.1 * categoryIdx + 0.05 * skillIdx
                        }s`,
                        animationFillMode: "forwards",
                      }}
                      key={skill}
                    >
                      <span className="text-gray-400 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
