import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      title: 'Phone',
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contactInfo.location,
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: contactInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: contactInfo.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: contactInfo.social.instagram, label: 'Instagram' },
    { icon: Youtube, href: contactInfo.social.youtube, label: 'YouTube' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
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
    <section id="contact" className="mobile-padding section-bg-alt relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary-500/5 to-primary-500/5 rounded-full blur-3xl"
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
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-primary-500" />
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-2xl sm:max-w-3xl mx-auto px-4"
          >
            Let's discuss your next project and bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-primary-500" />
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>
              <p className="text-secondary leading-relaxed mb-6 sm:mb-8 mobile-text">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactDetails.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card border border-card rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold text-sm sm:text-base">{info.title}</h4>
                    <p className="text-secondary text-xs sm:text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-card rounded-full flex items-center justify-center text-secondary hover:text-primary-500 hover:shadow-lg transition-all duration-300 interactive"
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-4 sm:p-6 bg-card border border-card rounded-xl"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {contactInfo.availability}
                </span>
              </div>
              <p className="text-secondary text-xs sm:text-sm flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {contactInfo.responseTime}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-card rounded-xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center">
              <Send className="w-6 h-6 mr-2 text-primary-500" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400 text-center text-sm sm:text-base flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 