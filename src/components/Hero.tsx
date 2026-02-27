import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6">
      
      <div className="max-w-3xl w-full text-center space-y-12">
        
        <div className="space-y-6">
          <motion.div 
            className="flex justify-center gap-4 text-[10px] font-mono text-gray-400 tracking-widest uppercase items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span>Surface Sample: Textile-01</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-2">
              Node Status: Active
              <div className="led-container w-4 h-4 ml-1">
                <div className="led-green animate-pulse" />
              </div>
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-gray-600 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Humane AI infrastructure.
          </motion.h2>
          
          <motion.p 
            className="max-w-xl mx-auto text-gray-500 leading-relaxed font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            LINK—AI is a decentralized AI stack for local agents, community-scale intelligence, and human-machine coordination — built for the hyperphysical world.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-[#F5F6F7] rounded-lg overflow-hidden transition-all duration-200 active:scale-95">
            {/* Button Surface Deboss */}
            <div className="absolute inset-0 deboss-panel-light rounded-lg opacity-100 group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] transition-shadow" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 text-gray-600 font-mono text-xs tracking-widest uppercase group-hover:text-gray-800 transition-colors">
              Request Access
            </span>
          </button>

          <button className="group relative px-8 py-4 bg-[#F5F6F7] rounded-lg overflow-hidden transition-all duration-200 active:scale-95">
             {/* Button Surface Deboss */}
             <div className="absolute inset-0 deboss-panel-light rounded-lg opacity-100 group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] transition-shadow" />
            
            <span className="relative z-10 flex items-center gap-3 text-gray-500 font-mono text-xs tracking-widest uppercase group-hover:text-gray-700 transition-colors">
              Explore the Stack
            </span>
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
