import { Code, ExternalLink, GitBranch } from "lucide-react";
import { useEffect, useRef } from "react";

const achievements = [
  {
    id: 1,
    title: "LeetCode Problem Solver",
    description:
      "Solved over 1000 coding problems with 4000+ submissions, demonstrating strong algorithmic thinking and problem-solving skills since March 2024",
    icon: <Code size={28} />,
    metric: "1000+",
    subtitle: "Problems Solved",
    link: "https://leetcode.com/u/bharaths14051803",
    linkText: "View LeetCode Profile",
  },
  {
    id: 2,
    title: "Active GitHub Contributor",
    description:
      "Maintained consistent development activity with 300+ contributions, showcasing dedication to continuous learning and projects development since July 2024",
    icon: <GitBranch size={28} />,
    metric: "300+",
    subtitle: "Contributions",
    link: "https://github.com/bharaths1803",
    linkText: "View Github Profile",
  },
];

const Achievements = () => {
  const sectionRef = useRef();
  const achievementRefs = useRef([]);

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

    achievementRefs.current.forEach((achievementRefCurrent) => {
      if (achievementRefCurrent) observer.observe(achievementRefCurrent);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);

      achievementRefs.current.forEach((achievementRefCurrent) => {
        if (achievementRefCurrent) observer.unobserve(achievementRefCurrent);
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-16 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Key milestones that demonstrate my commitment to continuous learning
            and active participation in the developer community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.id}
              className="p-8 opacity-0 duration-300 shadow-md hover:shadow-lg transition-all rounded-xl bg-gray-900 hover:-translate-y-2"
              ref={(ele) => (achievementRefs.current[idx] = ele)}
              style={{
                animationDelay: `${0.3 + 0.1 * idx}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex mb-4 p-4 rounded-full bg-blue-900/30 text-blue-400">
                  {achievement.icon}
                </div>
                <div className="mb-3">
                  <div className="mb-1 text-3xl font-bold text-blue-400">
                    {achievement.metric}
                  </div>
                  <div className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                    {achievement.subtitle}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-400 text-center leading-relaxed mb-6">
                {achievement.description}
              </p>
              <div className="text-center">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {achievement.linkText}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
