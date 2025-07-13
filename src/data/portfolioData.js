// Portfolio Data Configuration
// Add, edit, or remove items as needed

export const personalInfo = {
  name: "Aditya Sagar Sharma",
  title: "Full Stack Developer",
  subtitle: "AI-Integrated Applications & Practical Solutions",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com",
  avatar: "AS", // Initials for avatar
  bio: "I'm a passionate Full Stack Developer specializing in AI-integrated applications and practical solutions. My journey in technology has evolved from basic programming to building complex systems that solve real-world problems through innovative AI integration.",
  about: [
    "I specialize in Flutter development, Python AI integration, and full-stack systems.",
    "My approach combines cutting-edge AI technologies with robust backend solutions, creating applications that are both intelligent and user-friendly."
  ],
  specialties: [
    "Flutter App Development",
    "AI Integration & ML",
    "Backend & Database Engineering",
    "IoT & Hardware Integration"
  ]
};

export const stats = [
  { icon: "Award", value: "5+", label: "Years Experience" },
  { icon: "Users", value: "50+", label: "Happy Clients" },
  { icon: "Code", value: "100+", label: "Projects Completed" },
  { icon: "Coffee", value: "1000+", label: "Cups of Coffee" }
];

export const skills = {
  categories: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Flutter", level: 95, color: "from-blue-600 to-indigo-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-purple-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Python", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Node.js", level: 85, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "Django", level: 75, color: "from-green-700 to-green-800" },
        { name: "PostgreSQL", level: 85, color: "from-blue-600 to-indigo-700" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" }
      ]
    },
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-red-600" },
        { name: "PyTorch", level: 80, color: "from-red-500 to-red-600" },
        { name: "OpenAI API", level: 90, color: "from-green-500 to-emerald-600" },
        { name: "Computer Vision", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "NLP", level: 80, color: "from-blue-500 to-purple-600" },
        { name: "Data Analysis", level: 85, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "AWS", level: 75, color: "from-orange-500 to-yellow-500" },
        { name: "Firebase", level: 85, color: "from-orange-500 to-yellow-500" },
        { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "Postman", level: 85, color: "from-orange-500 to-red-500" }
      ]
    }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize tasks and suggest optimal scheduling based on user behavior patterns.",
    image: "/project1.jpg", // Add your project images
    technologies: ["Flutter", "Python", "TensorFlow", "Firebase"],
    github: "https://github.com/yourusername/ai-task-manager",
    live: "https://ai-task-manager.vercel.app",
    category: "AI/ML",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/project2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform.vercel.app",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "IoT Smart Home Dashboard",
    description: "A comprehensive dashboard for monitoring and controlling smart home devices with real-time data visualization.",
    image: "/project3.jpg",
    technologies: ["React", "Python", "MQTT", "Chart.js"],
    github: "https://github.com/yourusername/smart-home-dashboard",
    live: "https://smart-home-dashboard.vercel.app",
    category: "IoT",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark/light mode and smooth animations.",
    image: "/project4.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
    category: "Frontend",
    featured: false
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description: "An intelligent chat assistant powered by OpenAI's GPT model, capable of handling customer inquiries and providing support.",
    image: "/project5.jpg",
    technologies: ["Python", "OpenAI API", "Flask", "WebSocket"],
    github: "https://github.com/yourusername/ai-chat-assistant",
    live: "https://ai-chat-assistant.vercel.app",
    category: "AI/ML",
    featured: false
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "A mobile fitness tracking application with workout planning, progress monitoring, and social features.",
    image: "/project6.jpg",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    github: "https://github.com/yourusername/fitness-tracker",
    live: "https://fitness-tracker.vercel.app",
    category: "Mobile",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading development of AI-integrated applications and mentoring junior developers. Implemented machine learning models for predictive analytics.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Implemented AI-powered features that increased user engagement by 60%",
      "Mentored 5 junior developers and improved team productivity"
    ],
    technologies: ["React", "Python", "TensorFlow", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Mobile Apps Co.",
    period: "2021 - 2022",
    location: "New York, NY",
    description: "Developed cross-platform mobile applications using Flutter framework. Collaborated with design and backend teams to deliver high-quality products.",
    achievements: [
      "Developed 3 successful mobile apps with 100K+ downloads",
      "Improved app performance by 35% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 50%"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Git", "REST APIs"]
  },
  {
    id: 3,
    title: "Python Developer",
    company: "Data Analytics Corp.",
    period: "2020 - 2021",
    location: "San Francisco, CA",
    description: "Built data processing pipelines and machine learning models for business intelligence. Worked with large datasets and implemented predictive analytics.",
    achievements: [
      "Developed ML models with 85% accuracy for customer behavior prediction",
      "Automated data processing reducing manual work by 70%",
      "Created interactive dashboards for real-time data visualization"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Web Solutions Ltd.",
    period: "2019 - 2020",
    location: "London, UK",
    description: "Created responsive web applications and user interfaces. Collaborated with UX/UI designers to implement pixel-perfect designs.",
    achievements: [
      "Built 10+ responsive websites with 99% accessibility score",
      "Improved website performance by 45% through optimization",
      "Implemented modern CSS frameworks and design systems"
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Git", "REST APIs"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2015 - 2019",
    location: "City, Country",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    achievements: [
      "Graduated with First Class Honours",
      "Final Year Project: AI-Powered Learning Management System",
      "Member of Computer Science Society"
    ]
  },
  {
    id: 2,
    degree: "Machine Learning Certification",
    school: "Coursera",
    period: "2020",
    location: "Online",
    description: "Comprehensive course covering machine learning algorithms, neural networks, and deep learning.",
    achievements: [
      "Completed with 95% grade",
      "Implemented 10+ ML projects",
      "Specialized in Computer Vision and NLP"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    link: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google",
    date: "2022",
    credentialId: "GCP-789012",
    link: "https://cloud.google.com/certification"
  },
  {
    id: 3,
    name: "Microsoft Azure Developer",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "AZURE-345678",
    link: "https://docs.microsoft.com/en-us/certifications"
  }
];

export const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    youtube: "https://youtube.com/@yourusername"
  },
  availability: "Available for freelance opportunities and full-time positions",
  responseTime: "Usually responds within 24 hours"
};

export const siteConfig = {
  title: "Your Name - Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in AI-integrated applications and practical solutions",
  keywords: ["Full Stack Developer", "AI", "Flutter", "React", "Python", "Machine Learning"],
  author: "Your Name",
  url: "https://your-portfolio.vercel.app"
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get skills by category
export const getSkillsByCategory = (categoryName) => {
  const category = skills.categories.find(cat => cat.name === categoryName);
  return category ? category.skills : [];
}; 