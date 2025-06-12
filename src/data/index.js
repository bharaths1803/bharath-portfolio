export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  // Programming Languages
  { name: "C++", category: "programming" },
  { name: "HTML", category: "programming" },
  { name: "CSS", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "Python", category: "programming" },

  // Frontend
  { name: "React", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Next.js", category: "backend" }, // also used server-side

  // Databases
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },

  // Coursework
  { name: "Data structures & algorithms", category: "coursework" },
  { name: "Object oriented programming", category: "coursework" },
  { name: "Computer Networks", category: "coursework" },
  { name: "Database management systems", category: "coursework" },
  { name: "Operating Systems", category: "coursework" },

  // Tools
  { name: "VS Code", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel/Render", category: "tools" },
];

export const categoryNames = {
  programming: "Programming Languages",
  frontend: "Frontend Development",
  backend: "Backend Development",
  database: "Databases",
  coursework: "Coursework & CS Fundamentals",
  tools: "Tools & Platforms",
};

export const projects = [
  {
    id: 1,
    title: "FinTrack",
    description:
      "A comprehensive personal finance tracker with budgets, shared accounts, expense insights, email reminders, and financial reports.",
    technologies: [
      "React",
      "NextJs",
      "Postgres",
      "Prisma",
      "Typescript",
      "Inngest",
      "Resend",
      "TailwindCSS",
      "Recharts",
    ],
    imageUrl:
      "https://images.pexels.com/photos/14907338/pexels-photo-14907338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    link: "https://fintrack-kappa-amber.vercel.app/",
    github: "https://github.com/bharaths1803/fintrack",
  },
  {
    id: 2,
    title: "Talkatives",
    description:
      "A real-time chat application with support for private messaging and group chats.",
    technologies: [
      "Javascript",
      "React",
      "TailwindCSS",
      "Node",
      "Express",
      "Socket.io",
      "MongoDB",
      "Mongoose",
    ],
    imageUrl:
      "https://images.pexels.com/photos/7342998/pexels-photo-7342998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://talkatives.onrender.com",
    github: "https://github.com/bharaths1803/talkatives",
  },
  {
    id: 3,
    title: "Swipify",
    description:
      "A swipe-based dating app featuring left/right swipes, real-time messaging between matched users, and online status indicators.",
    technologies: [
      "Javascript",
      "React",
      "TailwindCSS",
      "Node",
      "Express",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "Framer Motion",
    ],
    imageUrl:
      "https://images.pexels.com/photos/6833565/pexels-photo-6833565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://swipify.onrender.com",
    github: "https://github.com/bharaths1803/swipify",
  },
  {
    id: 4,
    title: "Bharath's Portfolio",
    description:
      "A responsive portfolio website showcasing my projects and skills.",
    technologies: ["React", "TailwindCSS", "Framer Motion", "EmailJs"],
    imageUrl:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 5,
    title: "Socialise",
    description:
      "A full-stack social media platform enabling users to connect and engage through posts, likes, and comments.",
    technologies: [
      "Typescript",
      "React",
      "NextJs",
      "TailwindCSS",
      "Postgres",
      "Prisma",
    ],
    imageUrl:
      "https://images.pexels.com/photos/15226554/pexels-photo-15226554/free-photo-of-instagram-on-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://socialise-theta.vercel.app/",
    github: "https://github.com/bharaths1803/socialise",
  },
  {
    id: 6,
    title: "Churn Catcher",
    description:
      "An intelligent telcom customer churn prediction and insights platform built with a full-stack architecture. Users can upload customer data, run ML predictions, view churn risk segmentation, analyze trends, and download AI-generated retention strategy reports.",
    technologies: [
      "Javacript",
      "Python",
      "React",
      "TailwindCSS",
      "Recharts",
      "Flask",
      "Machine Learning",
    ],
    imageUrl:
      "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://churn-catcher.vercel.app/",
    github: "https://github.com/bharaths1803/churn-catcher",
  },
];
