import { motion } from 'framer-motion';

export function DebossedLogo() {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <div className="relative z-10 p-12">
        {/* The Logo Container - Pressed into the fabric */}
        <motion.h1 
          className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-deboss-light select-none"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          LINK—AI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-center flex flex-col items-center gap-4"
        >
          <span className="text-sm font-mono text-gray-500 tracking-[0.5em] uppercase">
            SAVE HUMANITY
          </span>
          <span className="text-[10px] font-mono text-gray-400 tracking-[0.3em] uppercase">
            BUILT BY THE COMMUNITY FOR HUMANITY
          </span>
        </motion.div>
        
        {/* Micro-details around the logo - Darker text for light theme */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center">
           <div className="absolute top-4 text-[10px] font-mono text-gray-400 tracking-widest">
             EST. 2020
           </div>
        </div>
      </div>
    </div>
  );
}
