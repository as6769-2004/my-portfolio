import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Award, Briefcase, GraduationCap, Star, Zap, Target, Code, Server, Database, Cloud, Settings, Brain, Globe } from 'lucide-react';
import { experience, education, certifications } from '../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tech icon mapping for experience technologies
  const techIconMap = {
    'React': { icon: Code, bgColor: 'bg-blue-500', textColor: 'text-white' },
    'Python': { icon: Code, bgColor: 'bg-blue-600', textColor: 'text-white' },
    'TensorFlow': { icon: Brain, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'AWS': { icon: Cloud, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'Docker': { icon: Settings, bgColor: 'bg-blue-500', textColor: 'text-white' },
    'Flutter': { icon: Globe, bgColor: 'bg-blue-500', textColor: 'text-white' },
    'Dart': { icon: Code, bgColor: 'bg-blue-600', textColor: 'text-white' },
    'Firebase': { icon: Cloud, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'Git': { icon: Settings, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'REST APIs': { icon: Server, bgColor: 'bg-green-500', textColor: 'text-white' },
    'Node.js': { icon: Server, bgColor: 'bg-green-600', textColor: 'text-white' },
    'Express.js': { icon: Server, bgColor: 'bg-gray-600', textColor: 'text-white' },
    'MongoDB': { icon: Database, bgColor: 'bg-green-600', textColor: 'text-white' },
    'PostgreSQL': { icon: Database, bgColor: 'bg-blue-600', textColor: 'text-white' },
    'Pandas': { icon: Code, bgColor: 'bg-blue-500', textColor: 'text-white' },
    'Scikit-learn': { icon: Brain, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'JavaScript': { icon: Code, bgColor: 'bg-yellow-500', textColor: 'text-black' },
    'HTML/CSS': { icon: Code, bgColor: 'bg-orange-500', textColor: 'text-white' },
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
    <section id="experience" className="mobile-padding section-bg relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary-500/5 to-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto mobile-optimized relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary flex items-center justify-center"
          >
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-primary-500" />
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-2xl sm:max-w-3xl mx-auto px-4"
          >
            My professional journey and achievements
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 flex items-center">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary-500" />
                Professional Experience
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-4 sm:left-6 top-16 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                    )}

                    <div className="flex items-start space-x-4 sm:space-x-6">
                      {/* Company Logo */}
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">{exp.company.charAt(0)}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-card border border-card rounded-xl p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-primary mb-1 flex items-center">
                              <Target className="w-4 h-4 mr-2 text-primary-500" />
                              {exp.title}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-secondary space-y-1 sm:space-y-0">
                              <span className="flex items-center">
                                <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                {exp.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                            <span className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-xs flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-secondary mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          {exp.technologies.map((tech) => {
                            const techInfo = techIconMap[tech];
                            const IconComponent = techInfo ? techInfo.icon : Code;
                            const bgColor = techInfo ? techInfo.bgColor : 'bg-gray-500';
                            const textColor = techInfo ? techInfo.textColor : 'text-white';
                            
                            return (
                              <span
                                key={tech}
                                className={`px-2 sm:px-3 py-1 ${bgColor} ${textColor} text-xs rounded-full flex items-center space-x-1`}
                              >
                                <IconComponent className="w-3 h-3" />
                                <span>{tech}</span>
                              </span>
                            );
                          })}
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h5 className="text-xs sm:text-sm font-semibold text-primary mb-2 flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-secondary flex items-start">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-secondary-500" />
                Education
              </h3>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-card rounded-xl p-4 sm:p-6 mb-4 sm:mb-6"
                >
                  <h4 className="text-base sm:text-lg font-bold text-primary mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary-500" />
                    {edu.degree}
                  </h4>
                  <p className="text-primary-500 font-medium mb-2 text-sm sm:text-base">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-secondary mb-2 sm:mb-3 space-y-1 sm:space-y-0">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-secondary text-xs sm:text-sm mb-2 sm:mb-3">{edu.description}</p>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-secondary flex items-center">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary-500" />
                Certifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="flex items-center space-x-3 p-3 sm:p-4 bg-card border border-card rounded-lg"
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-secondary text-xs sm:text-sm font-medium">{cert.name}</div>
                      <div className="text-xs text-secondary">{cert.issuer} • {cert.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 