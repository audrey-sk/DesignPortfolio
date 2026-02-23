import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Camera, Plane, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-coral-500 hover:scale-105 transition-transform">
        AS<span className="text-olive-500">.</span>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/" className="text-sm font-medium text-charcoal-600 hover:text-coral-500 transition-colors">Work</Link>
        <Link to="/about" className="text-sm font-medium text-charcoal-600 hover:text-coral-500 transition-colors">About</Link>
        <a href="#contact" className="px-5 py-2 bg-coral-500 text-white rounded-full text-sm font-semibold hover:bg-coral-600 transition-all shadow-lg shadow-coral-200">
          Say Hello
        </a>
      </div>
    </div>
  </nav>
);

export const Footer = () => (
  <footer id="contact" className="py-20 bg-orange-50">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-charcoal-800 mb-6"
      >
        Let's create something <span className="text-coral-500 italic">magical</span> together.
      </motion.h2>
      <p className="text-charcoal-600 mb-10 max-w-md mx-auto">
        Currently looking for new opportunities to blend code and design into delightful experiences.
      </p>
      <div className="flex justify-center gap-6 mb-12">
        <a href="#" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-charcoal-600 hover:text-coral-500">
          <Github size={24} />
        </a>
        <a href="#" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-charcoal-600 hover:text-coral-500">
          <Linkedin size={24} />
        </a>
        <a href="#" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-charcoal-600 hover:text-coral-500">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-xs text-charcoal-400 uppercase tracking-widest">
        © 2024 Audrey Safikhani • Built with love and pixels
      </p>
    </div>
  </footer>
);

export const ProjectCard = ({ project, index }: { project: any, index: number, key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-[2rem] overflow-hidden border border-orange-100 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500"
  >
    <div className="aspect-[16/10] overflow-hidden bg-orange-50">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-olive-500 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-charcoal-800">{project.title}</h3>
        </div>
        <div className="flex gap-2">
          {project.link && (
            <a href={project.link} className="p-2 bg-orange-50 rounded-full text-charcoal-400 hover:text-coral-500 transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-charcoal-600 mb-6 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-orange-50 text-charcoal-500 text-xs font-medium rounded-full border border-orange-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
