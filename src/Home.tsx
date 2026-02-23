import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './components/Layout';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

const projects = [
  {
    title: "Chehre Preprocessing",
    category: "Machine Learning • Computer Vision",
    description: "A robust face preprocessing pipeline for computer vision research. Focused on data integrity and visual clarity for model training.",
    image: "https://picsum.photos/seed/face/800/600",
    tags: ["Python", "OpenCV", "ML", "Research"],
    link: "https://github.com/audrey-sk/Chehre-preprocessing"
  },
  {
    title: "Never Gonna Let You Browse",
    category: "Browser Extension • UX Design",
    description: "A playful yet functional browser extension that explores user behavior and digital boundaries through interactive interventions.",
    image: "https://picsum.photos/seed/browse/800/600",
    tags: ["JavaScript", "Chrome API", "UX Design"],
    link: "https://github.com/audrey-sk/Never-Gonna-Let-You-Browse"
  },
  {
    title: "CV & Graphics Explorer",
    category: "Computer Graphics • UI Design",
    description: "A collection of computer vision and graphics implementations, featuring interactive visualizations of complex mathematical concepts.",
    image: "https://picsum.photos/seed/graphics/800/600",
    tags: ["Three.js", "C++", "Visualization"],
    link: "https://github.com/audrey-sk/Computer-Vision-Computer-Graphics"
  },
  {
    title: "ML Insights Dashboard",
    category: "Data Visualization • UI Design",
    description: "Designing intuitive interfaces for complex machine learning models, making data-driven insights accessible to non-technical users.",
    image: "https://picsum.photos/seed/ml/800/600",
    tags: ["React", "D3.js", "Python", "Figma"],
    link: "https://github.com/audrey-sk/Machine-Learning"
  }
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 relative overflow-hidden">
        {/* Whimsical Background Elements */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-coral-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-olive-100 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-coral-600 text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            <span>Available for new adventures</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-charcoal-800 tracking-tighter mb-8 leading-[0.9]"
          >
            Audrey <br />
            <span className="text-coral-500">Safikhani</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-charcoal-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A <span className="font-bold text-charcoal-800">Math & Computer Science</span> student blending <span className="font-bold text-olive-500">Art & Tech</span> to build beautiful, high-impact digital experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#work" className="px-8 py-4 bg-charcoal-800 text-white rounded-full font-bold hover:bg-charcoal-900 transition-all shadow-xl">
              View My Work
            </a>
            <Link to="/about" className="px-8 py-4 bg-white border-2 border-orange-100 text-charcoal-800 rounded-full font-bold hover:border-coral-500 transition-all">
              About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal-800 mb-4 tracking-tight">Selected Work</h2>
              <p className="text-charcoal-500 max-w-md">A collection of projects where I've blended technical precision with user-centric design.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-orange-50 rounded-lg text-xs font-bold text-charcoal-600 uppercase tracking-widest border border-orange-100">
                Design
              </div>
              <div className="px-4 py-2 bg-orange-50 rounded-lg text-xs font-bold text-charcoal-600 uppercase tracking-widest border border-orange-100">
                Code
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-orange-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal-800 mb-8 tracking-tight">
                The best of <br />
                <span className="text-coral-500 italic">both worlds.</span>
              </h2>
              <p className="text-lg text-charcoal-600 mb-10 leading-relaxed">
                My background in software development allows me to design with technical feasibility in mind, 
                while my passion for UI/UX ensures every pixel serves a purpose.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-orange-100 shadow-sm">
                  <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center text-coral-600 mb-4">
                    <Palette size={24} />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2">Design</h3>
                  <p className="text-sm text-charcoal-500">Figma, Adobe Suite, Prototyping, User Research, Design Systems.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-orange-100 shadow-sm">
                  <div className="w-12 h-12 bg-olive-100 rounded-2xl flex items-center justify-center text-olive-600 mb-4">
                    <Code size={24} />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2">Code</h3>
                  <p className="text-sm text-charcoal-500">React, TypeScript, Node.js, Tailwind, Git, API Integration.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] border border-orange-100 shadow-2xl p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {[
                    { label: "User Experience", value: 95, color: "bg-coral-500" },
                    { label: "Visual Design", value: 90, color: "bg-olive-500" },
                    { label: "Frontend Dev", value: 98, color: "bg-orange-400" },
                    { label: "Problem Solving", value: 100, color: "bg-charcoal-800" }
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-charcoal-700">{skill.label}</span>
                        <span className="text-charcoal-400 text-sm">{skill.value}%</span>
                      </div>
                      <div className="h-3 bg-orange-50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-coral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-olive-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
