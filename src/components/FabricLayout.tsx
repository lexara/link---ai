import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FabricLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function FabricLayout({ children, className }: FabricLayoutProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={cn("min-h-screen bg-fabric-light relative overflow-hidden selection:bg-gray-900 selection:text-white", className)}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient Light Follower - Subtle highlight moving across the matte surface */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.4),
              transparent 50%
            )
          `,
        }}
      />
      
      {/* Global Light Source (Fixed Top-Left) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-black/5 pointer-events-none z-0 mix-blend-overlay" />

      {/* Main Content Container - The "Molded Tray" */}
      <div className="relative z-10 max-w-[1400px] mx-auto my-4 md:my-8 p-4 md:p-8">
        <div className="molded-tray bg-fabric-light relative overflow-hidden p-6 md:p-12 min-h-[90vh]">
           {/* Inner noise overlay for the tray specifically */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
           
           <div className="relative z-20">
             {children}
           </div>
        </div>
      </div>
    </div>
  );
}
