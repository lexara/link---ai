import { motion } from 'framer-motion';

export function MatrixProducts() {
  return (
    <section className="relative py-24 px-4 md:px-8 border-t border-gray-200/50">
      
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-display font-medium text-gray-800 tracking-tight mb-4">
            Matrix AGI Hardware
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            The next phase of LINK—AI: Physical interfaces for the hyperphysical world. 
            We are developing a suite of Mixed Reality headsets, intelligent home cores, and autonomous robotics 
            to bring the network into physical space.
          </p>
          <div className="mt-6 flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
             <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
               Confidential Development • Coming 2026
             </span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Hardware Division
        </span>
      </div>
      
    </section>
  );
}
