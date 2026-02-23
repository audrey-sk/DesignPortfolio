import React from 'react';
import { motion } from 'motion/react';
import { Camera, Plane, Heart, Coffee, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black text-charcoal-800 mb-6 tracking-tight">
            Hi, I'm <span className="text-coral-500">Audrey</span>.
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            A creative soul with a logical mind. I'm a designer who loves to code, 
            a traveler who loves to capture moments, and a lifelong learner.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="aspect-[4/5] bg-orange-100 rounded-[3rem] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/audrey-portrait/800/1000" 
              alt="Audrey Safikhani" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-coral-500/10 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-charcoal-800 mb-6">My Journey</h2>
            <div className="space-y-6 text-charcoal-600 leading-relaxed">
              <p>
                I'm a Math & Computer Science student with a deep passion for the intersection of logic and creativity. 
                My journey is heavily inspired by my mother, an arts professor, who taught me to see the beauty in systems 
                and the structure in art.
              </p>
              <p>
                This unique upbringing led me to combine technical fields like Machine Learning and Computer Vision 
                with the human-centric world of UI/UX design. I believe that the most powerful tools are those that 
                are as intuitive as they are intelligent.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-2xl text-sm font-bold text-charcoal-700">
                  <Heart size={16} className="text-coral-500" />
                  <span>Art + Tech</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-2xl text-sm font-bold text-charcoal-700">
                  <Coffee size={16} className="text-orange-800" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-coral-100 text-coral-600 rounded-2xl">
              <Camera size={24} />
            </div>
            <h2 className="text-3xl font-bold text-charcoal-800 tracking-tight">Through My Lens</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square bg-orange-50 rounded-3xl overflow-hidden border border-orange-100 relative group"
              >
                <img 
                  src={`https://picsum.photos/seed/photo-${i}/600/600`} 
                  alt={`Photography ${i}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">View Photo</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-charcoal-400 text-sm italic">
            Capturing the beauty in the mundane and the extraordinary.
          </p>
        </section>

        {/* Travels Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-olive-100 text-olive-600 rounded-2xl">
              <Plane size={24} />
            </div>
            <h2 className="text-3xl font-bold text-charcoal-800 tracking-tight">Wanderlust</h2>
          </div>
          <div className="space-y-4">
            {[
              { city: "Paris, France", desc: "Exploring the intersection of history and modern design.", date: "2023" },
              { city: "Tokyo, Japan", desc: "Minimalism, neon lights, and incredible user experiences.", date: "2022" },
              { city: "New York, USA", desc: "The energy of the city that never sleeps.", date: "2021" }
            ].map((trip, i) => (
              <div key={i} className="p-6 bg-white rounded-[2rem] border border-orange-100 flex items-center justify-between group hover:border-coral-200 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-charcoal-400 group-hover:text-coral-500 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-800">{trip.city}</h3>
                    <p className="text-sm text-charcoal-500">{trip.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-charcoal-300">{trip.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-12 bg-charcoal-800 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl" />
          <h2 className="text-3xl font-bold mb-6 relative z-10">Want to know more?</h2>
          <p className="text-charcoal-300 mb-10 max-w-md mx-auto relative z-10">
            I'm always open to chatting about design, code, or the best places to find a good croissant.
          </p>
          <a href="mailto:hello@audrey.com" className="inline-block px-10 py-4 bg-coral-500 text-white rounded-full font-bold hover:bg-coral-600 transition-all relative z-10">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
