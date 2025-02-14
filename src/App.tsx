import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Download, ExternalLink, Phone, MessageCircle } from 'lucide-react';

function App() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    initial: { y: 100 },
    animate: { y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skills = [
    { 
      name: "Adobe Photoshop", 
      icon: "https://vectorseek.com/wp-content/uploads/2021/02/Photoshop-Logo-Vector.jpg"
    },
    { 
      name: "Adobe Illustrator", 
      icon: "https://th.bing.com/th/id/OIP.o6EhQ505NyofmVoXYmY4PwHaHO?rs=1&pid=ImgDetMain"
    },
    { 
      name: "Canva", 
      icon: "https://th.bing.com/th/id/OIP.6Apc95OeeD54_ve4rzDGWQHaHa?rs=1&pid=ImgDetMain"
    },
    { 
      name: "Figma", 
      icon: "https://th.bing.com/th/id/OIP.CjyWvWBbuwPdBOt5dXguzQHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
    },
    { 
      name: "HTML", 
      icon: "https://th.bing.com/th/id/OIP.44LYtCUCOP3ynJDkORGB_wHaHa?rs=1&pid=ImgDetMain"
    },
    { 
      name: "CSS", 
      icon: "https://th.bing.com/th/id/OIP.aiII04uB8m611vQPSw7HfgHaHa?rs=1&pid=ImgDetMain"
    },
    { 
      name: "JavaScript", 
      icon: "https://ih1.redbubble.net/image.316760504.5828/abf,4x4,x900-bg,ffffff.jpg"
    }
  ];

  const projects = [
    {
      title: "Health & Wellness App Design",
      description: "A modern wellness application interface focusing on user engagement and accessibility. The design incorporates intuitive navigation, calming color schemes, and accessible features for all users.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      tags: ["UI/UX", "Figma", "Design System"],
      link: "/projects/health-app"
    },
    {
      title: "E-commerce Platform Redesign",
      description: "Complete redesign of an e-commerce platform with focus on conversion optimization. Implemented modern design patterns, improved checkout flow, and enhanced product discovery.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["UI/UX", "Adobe XD", "Prototype"],
      link: "/projects/ecommerce"
    },
    {
      title: "Educational App Interface",
      description: "User-centered design for an educational platform focusing on student engagement. Created an immersive learning experience with gamification elements and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      tags: ["UI/UX", "Figma", "User Research"],
      link: "/projects/education"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechStart",
      content: "Bikram's attention to detail and user-centric approach transformed our product completely. His designs not only look beautiful but also significantly improved our user engagement.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      role: "CEO at DesignCraft",
      content: "Working with Bikram was a game-changer for our platform. His understanding of user experience and modern design trends helped us create a product our users love.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Williams",
      role: "Startup Founder",
      content: "The redesign exceeded our expectations. Bikram's ability to translate our vision into a beautiful, functional design was impressive. Our user satisfaction increased dramatically.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const socialLinks = [
    { 
      icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-behance-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-95529.png?f=webp&w=256" 
                 alt="Behance" 
                 className="w-6 h-6" />, 
      href: "https://www.behance.net/bikramdhami" 
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/bikram-dhami-997605244/" 
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/_markib_0077" 
    },
    { 
      icon: <Mail size={24} />, 
      href: "mailto:rtrdhami@gmail.com" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 bg-[#0a192f]/80 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold text-[#64ffda]"
            >
              BD
            </motion.span>
            <motion.div 
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex gap-6"
            >
              {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={fadeIn}
                  whileHover={{ y: -2 }}
                  className="hover:text-[#64ffda] transition-colors relative group"
                >
                  <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-[#64ffda] font-mono mb-4"
              >
                Hi, my name is
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-gray-200"
              >
                Bikram Dhami
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-400 mb-6"
              >
                UX/UI Designer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-400 mb-8 max-w-lg"
              >
                I craft intuitive and beautiful digital experiences that solve real user problems.
                Currently focusing on creating user-centered design solutions that combine aesthetics with functionality.
              </motion.p>
              <motion.div 
                variants={stagger}
                initial="initial"
                animate="animate"
                className="flex gap-4 mb-8"
              >
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    variants={fadeIn}
                    whileHover={{ y: -2 }}
                    className="p-2 hover:text-[#64ffda] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ y: -2 }}
                href="#contact"
                className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors flex items-center gap-2"
              >
                Get in Touch <ExternalLink size={20} />
              </motion.a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.2, rotate: 6 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-[#64ffda] rounded-lg"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://res.cloudinary.com/des4un3c1/image/upload/v1739537658/dfhsd_yzkisv.jpg"
                  alt="Bikram Dhami"
                  className="relative z-10 rounded-lg shadow-xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="experience" 
        className="py-20"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-gray-200"
          >
            <span className="text-[#64ffda] font-mono">02.</span> Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#64ffda]/20"></div>
            <motion.div 
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {[
                {
                  period: "2024 - Present",
                  title: "UX/UI Designer",
                  description: "Creating user-centered design solutions that combine aesthetics with functionality.",
                  side: "right"
                },
                {
                  period: "2022 - 2024",
                  title: "Graphic Designer",
                  description: "Created visual designs and brand identities for various clients.",
                  side: "left"
                },
                {
                  period: "2022",
                  title: "Pokhara University",
                  description: "Started studying Software Engineering, focusing on building a strong technical foundation.",
                  side: "right"
                },
                {
                  period: "2019 - 2022",
                  title: "Content Writer",
                  description: "Created engaging digital content and developed understanding of user engagement.",
                  side: "left"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemAnimation}
                  className={`flex ${item.side === 'left' ? 'flex-row-reverse' : ''} items-center gap-8`}
                >
                  <div className={`flex-1 ${item.side === 'left' ? 'text-right' : ''}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-800"
                    >
                      <span className="text-sm text-[#64ffda] font-mono">{item.period}</span>
                      <h3 className="text-xl font-semibold mt-2 text-gray-200">{item.title}</h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="relative flex items-center justify-center w-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full bg-[#64ffda]"
                    />
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="skills" 
        className="py-20"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-gray-200 text-center"
          >
            <span className="text-[#64ffda] font-mono">03.</span> Skills
          </motion.h2>
          <motion.div 
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 rounded-full bg-[#64ffda]/20 absolute"
                />
                <div className="w-24 h-24 rounded-full bg-[#112240] shadow-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-all border border-gray-800">
                  <motion.div 
                    className="text-center p-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-1 mx-auto"
                    />
                    <div className="text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 left-0 right-0 text-center">
                      {skill.name}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className="py-20"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-gray-200"
          >
            <span className="text-[#64ffda] font-mono">04.</span> Featured Projects
          </motion.h2>
          <motion.div 
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                variants={itemAnimation}
                whileHover={{ y: -10 }}
                className="group relative bg-[#112240] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-800"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-200 flex items-center gap-2 group-hover:text-[#64ffda] transition-colors">
                    {project.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-[#233554] rounded-full text-sm text-[#64ffda] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-gray-200 text-center"
          >
            <span className="text-[#64ffda] font-mono">05.</span> Client Testimonials
          </motion.h2>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -5 }}
                className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-200">{testimonial.name}</h3>
                    <p className="text-sm text-[#64ffda]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact" 
        className="py-20"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-gray-200 text-center"
          >
            <span className="text-[#64ffda] font-mono">06.</span> Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 mb-8 text-center"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.a 
                whileHover={{ y: -2 }}
                href="mailto:rtrdhami@gmail.com"
                className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors flex items-center justify-center gap-2"
              >
                Email Me <Mail size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="https://wa.me/9779868878377"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors flex items-center justify-center gap-2"
              >
                WhatsApp <MessageCircle size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="tel:+9779868878377"
                className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors flex items-center justify-center gap-2"
              >
                Call Me <Phone size={20} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8 border-t border-gray-800"
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Bikram Dhami. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
