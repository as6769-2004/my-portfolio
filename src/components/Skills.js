import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Palette, 
  Smartphone, 
  Server,
  Zap
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    'Frontend Development': Palette,
    'Backend Development': Server,
    'AI & Machine Learning': Cloud,
    'Tools & Technologies': Zap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="mobile-padding section-bg-alt">
      <div className="max-w-7xl mx-auto mobile-optimized">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-2xl sm:max-w-3xl mx-auto px-4"
          >
            A comprehensive toolkit for building exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.name] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-card rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">{category.name}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary text-xs sm:text-sm font-medium">{skill.name}</span>
                        <span className="text-primary-500 text-xs sm:text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                          }}
                          className={`h-1.5 sm:h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Redux', 
              'MobX', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn',
              'REST APIs', 'Microservices', 'JWT', 'OAuth', 'Socket.io',
              'WebSockets', 'REST', 'GraphQL', 'Apollo', 'Prisma', 'TypeORM',
              'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch',
              'AWS', 'Vercel', 'Netlify', 'Heroku', 'DigitalOcean',
              'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CircleCI'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.02) }}
                className="skill-badge text-xs sm:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 