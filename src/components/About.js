import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Code, Coffee } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Award: Award,
    Users: Users,
    Code: Code,
    Coffee: Coffee,
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
    <section id="about" className="mobile-padding section-bg">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-2xl sm:max-w-3xl mx-auto px-4"
          >
            {personalInfo.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-1">
                  <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl font-bold gradient-text">{personalInfo.avatar}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 sm:p-6 bg-card border border-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-secondary">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Turning Ideas Into <span className="gradient-text">Reality</span>
            </h3>
            
            <p className="text-secondary leading-relaxed mb-4 sm:mb-6 mobile-text">
              {personalInfo.bio}
            </p>
            
            {personalInfo.about.map((paragraph, index) => (
              <p key={index} className="text-secondary leading-relaxed mb-4 sm:mb-6 mobile-text">
                {paragraph}
              </p>
            ))}

            <div className="space-y-3 sm:space-y-4">
              {personalInfo.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'} rounded-full`}></div>
                  <span className="text-secondary mobile-text">{specialty}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              Learn More About Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 