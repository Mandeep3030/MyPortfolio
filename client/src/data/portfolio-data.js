// Portfolio data of Mandeep Singh
// This file centralizes all personal and professional information

export const personalInfo = {
  name: "Mandeep Singh",
  title: "Full Stack Developer & Software Engineering Student",
  email: "Mandeep.singh3030@gmail.com",
  phone: "(647) 971-6235",
  location: "Toronto, ON",
  linkedIn: "https://linkedin.com/in/mandeepsingh3030",
  github: "https://github.com/mandeepsingh3030",
  resumePDF: "/src/assets/documents/Resume Mandeep Singh.pdf"
};

export const missionStatement = `Passionate Full Stack Developer and Software Engineering student with expertise in modern web technologies. 
I create innovative, user-focused solutions that bridge the gap between creative design and robust functionality. 
My mission is to leverage cutting-edge technologies to build scalable applications that make a meaningful impact.`;

export const bio = `I am a dedicated Software Engineering Technology student at Centennial College with a strong foundation in 
full-stack development. My journey in technology is driven by curiosity and a commitment to continuous learning. 
I specialize in React, Node.js, and modern web development practices, with experience in both frontend and backend technologies.

With a background that combines technical expertise and problem-solving skills, I enjoy tackling complex challenges 
and transforming ideas into functional, elegant solutions. When I'm not coding, I'm exploring new technologies, 
contributing to open-source projects, or mentoring fellow developers.`;

export const skills = {
  frontend: [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "SASS/SCSS", 
    "Responsive Design", "Bootstrap", "Material-UI", "Redux"
  ],
  backend: [
    "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", 
    "PostgreSQL", "GraphQL", "JWT Authentication"
  ],
  tools: [
    "Git & GitHub", "VS Code", "npm/yarn", "Webpack", "Vite", 
    "Postman", "Docker", "AWS Basics", "Figma"
  ],
  languages: [
    "JavaScript", "Python", "Java", "C#", "SQL", "PHP"
  ]
};

export const education = [
  {
    id: 1,
    institution: "Centennial College",
    degree: "Advanced Diploma in Software Engineering Technology",
    period: "2024 - Present",
    location: "Toronto, ON",
    description: "Comprehensive program covering full-stack development, software design patterns, database management, and modern programming practices.",
    highlights: [
      "Software Development Lifecycle", 
      "Object-Oriented Programming", 
      "Database Design & Management", 
      "Web Development Technologies"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "/src/assets/images/ecommerce-project.jpg", // Placeholder
    demoLink: "#",
    githubLink: "#",
    highlights: [
      "Responsive design with mobile-first approach",
      "Secure user authentication and authorization",
      "Real-time inventory management",
      "Integrated payment processing"
    ]
  },
  {
    id: 2,
    title: "Task Management Application",
    description: "A collaborative project management tool featuring real-time updates, team collaboration, and advanced task tracking capabilities.",
    technologies: ["React", "Redux", "Socket.io", "Express", "PostgreSQL"],
    image: "/src/assets/images/taskmanager-project.jpg", // Placeholder
    demoLink: "#",
    githubLink: "#",
    highlights: [
      "Real-time collaboration features",
      "Drag-and-drop task organization",
      "Team member management",
      "Progress tracking and analytics"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather application providing real-time weather data, forecasts, and location-based services with an intuitive user interface.",
    technologies: ["React", "OpenWeather API", "CSS Modules", "Responsive Design"],
    image: "/src/assets/images/weather-project.jpg", // Placeholder
    demoLink: "#",
    githubLink: "#",
    highlights: [
      "Real-time weather data integration",
      "Geolocation-based services",
      "5-day weather forecast",
      "Responsive and accessible design"
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces using modern frameworks like React, with a focus on performance and user experience.",
    icon: "🎨",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"]
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust server-side applications and APIs using Node.js, Express, and various database technologies.",
    icon: "⚙️",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Full Stack Solutions",
    description: "End-to-end web application development from concept to deployment, ensuring seamless integration between frontend and backend.",
    icon: "🔧",
    technologies: ["MERN Stack", "REST APIs", "Database Design"]
  },
  {
    id: 4,
    title: "Web Optimization",
    description: "Improving website performance, SEO, and accessibility to ensure optimal user experience across all devices.",
    icon: "🚀",
    technologies: ["Performance Optimization", "SEO", "Accessibility"]
  }
];

export const contactInfo = {
  email: "Mandeep.singh3030@gmail.com",
  phone: "(647) 971-6235",
  location: "Toronto, ON, Canada",
  availability: "Available for internships and full-time opportunities",
  socialLinks: {
    linkedin: "https://linkedin.com/in/mandeepsingh3030",
    github: "https://github.com/mandeepsingh3030",
    email: "mailto:Mandeep.singh3030@gmail.com"
  }
};

// Navigation items for the website
export const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" }
];