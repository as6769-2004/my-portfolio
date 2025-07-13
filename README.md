# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features dark/light mode toggle, smooth animations, and a comprehensive data-driven structure.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Smooth theme switching with persistent state
- **Custom Cursor**: Interactive cursor with hover effects (desktop only)
- **Smooth Animations**: Powered by Framer Motion
- **Data-Driven**: Easy to customize content through JSON data structure
- **Modern UI**: Clean, professional design with gradient accents
- **Mobile-First**: Touch-friendly interface with optimized mobile experience

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.js        # About section
│   ├── Contact.js      # Contact form and info
│   ├── Experience.js   # Work experience and education
│   ├── Footer.js       # Footer component
│   ├── Hero.js         # Hero/landing section
│   ├── Navbar.js       # Navigation bar
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills and technologies
│   └── ThemeToggle.js  # Theme toggle component
├── context/
│   └── ThemeContext.js # Theme context provider
├── data/
│   └── portfolioData.js # All portfolio data
├── App.js              # Main app component
├── index.css           # Global styles
└── index.js            # App entry point
```

## 🎨 Customization

### 1. Personal Information

Edit `src/data/portfolioData.js` to update your personal details:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  subtitle: "AI-Integrated Applications & Practical Solutions",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com",
  avatar: "AS", // Your initials for avatar
  bio: "Your bio description...",
  about: [
    "First paragraph about you...",
    "Second paragraph about you..."
  ],
  specialties: [
    "Your specialty 1",
    "Your specialty 2",
    "Your specialty 3"
  ]
};
```

### 2. Statistics

Update your achievements and stats:

```javascript
export const stats = [
  { icon: "Award", value: "5+", label: "Years Experience" },
  { icon: "Users", value: "50+", label: "Happy Clients" },
  { icon: "Code", value: "100+", label: "Projects Completed" },
  { icon: "Coffee", value: "1000+", label: "Cups of Coffee" }
];
```

### 3. Skills

Organize your skills by categories:

```javascript
export const skills = {
  categories: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Flutter", level: 95, color: "from-blue-600 to-indigo-600" },
        // Add more skills...
      ]
    },
    // Add more categories...
  ]
};
```

### 4. Projects

Add your projects with detailed information:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "/project1.jpg", // Add project images to public folder
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.vercel.app",
    category: "Full Stack",
    featured: true
  },
  // Add more projects...
];
```

### 5. Experience

Update your work experience:

```javascript
export const experience = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Company Name",
    period: "2022 - Present",
    location: "Remote",
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["React", "Python", "AWS"]
  },
  // Add more experience...
];
```

### 6. Education

Add your educational background:

```javascript
export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "University Name",
    period: "2015 - 2019",
    location: "City, Country",
    description: "Degree description...",
    achievements: [
      "Graduated with honors",
      "Final year project award",
      "Other achievements..."
    ]
  }
];
```

### 7. Certifications

List your certifications:

```javascript
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    link: "https://aws.amazon.com/verification"
  },
  // Add more certifications...
];
```

### 8. Contact Information

Update contact details:

```javascript
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
```

## 🎯 Available Icons

The portfolio uses Lucide React icons. Available icons for stats include:
- `Award`
- `Users`
- `Code`
- `Coffee`
- `Mail`
- `Phone`
- `MapPin`
- `Github`
- `Linkedin`
- `Twitter`
- `Instagram`
- `Youtube`
- `Download`
- `ExternalLink`
- `Send`
- `Calendar`
- `Building`
- And many more...

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your data**
   - Edit `src/data/portfolioData.js` with your information
   - Add project images to the `public/` folder
   - Update social media links

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Styling

The portfolio uses Tailwind CSS with custom CSS variables. Key classes:

- `.gradient-text`: Gradient text effect
- `.card-hover`: Hover effects for cards
- `.section-bg`: Section background styling
- `.mobile-optimized`: Mobile-responsive padding
- `.interactive`: Interactive element styling

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices:
- Touch-friendly buttons and links
- Responsive typography
- Optimized spacing and padding
- Hidden custom cursor on mobile
- Mobile-first design approach

## 🌙 Theme System

The portfolio includes a complete dark/light mode system:
- Persistent theme state
- Smooth transitions
- Optimized colors for both themes
- Automatic theme detection

## 🔧 Helper Functions

The data file includes helper functions:
- `getProjectsByCategory(category)`: Filter projects by category
- `getFeaturedProjects()`: Get only featured projects
- `getSkillsByCategory(categoryName)`: Get skills by category

## 📝 Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and use data from `portfolioData.js`
3. Add the component to `App.js`
4. Update navigation in `Navbar.js`

## 🎯 Performance Tips

- Optimize images before adding to `public/`
- Use appropriate image formats (WebP for better compression)
- Keep project descriptions concise
- Use meaningful alt text for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding! 🚀** # my-portfolio
