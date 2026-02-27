import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function LinkOS() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-gray-100/50 rounded-2xl mx-2 md:mx-0 mb-12 border border-gray-200/50">
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                Control Plane
              </span>
            </div>
            <h3 className="text-3xl font-display font-medium text-gray-800 tracking-tight mb-6">
              LINK OS
            </h3>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              LINK OS is the orchestration intelligence that routes tasks, enforces permissions, and coordinates agents across the platform — with human-defined rules, auditability, and community governance.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Orchestrates multi-agent workflows",
              "Enforces permissions + identity boundaries",
              "Bridges local-first compute with network governance"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-sm border border-gray-100">
                  <Check className="w-3 h-3 text-gray-400" />
                </div>
                <span className="text-sm text-gray-500 font-mono">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Abstract Representation of OS */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 deboss-panel-light rounded-full opacity-50" />
            <div className="absolute inset-8 border border-gray-200 rounded-full" />
            <div className="absolute inset-16 border border-gray-200/50 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <span className="text-xs font-bold text-gray-300 tracking-widest">OS</span>
              </div>
            </div>
            
            {/* Orbiting Nodes */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full shadow-sm"
              animate={{ rotate: 360 }}
              style={{ originY: "128px" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
             <motion.div 
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-200 rounded-full shadow-sm"
              animate={{ rotate: -360 }}
              style={{ originX: "-128px" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

      </div>
      
    </section>
  );
}
