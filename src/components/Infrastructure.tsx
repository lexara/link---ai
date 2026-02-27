import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Cpu, Share2, Activity, Radio, Layers, Box } from 'lucide-react';

const panels = [
  {
    id: "01",
    title: "Autonomous Agents",
    icon: Cpu,
    desc: "Self-governing logic units deployed across edge devices.",
    coords: "SEC-09"
  },
  {
    id: "02",
    title: "Machine Sync Layer",
    icon: Layers,
    desc: "Real-time consensus protocol for industrial robotics.",
    coords: "SEC-14"
  },
  {
    id: "03",
    title: "Distributed Compute",
    icon: Share2,
    desc: "Fabric-wide processing power aggregation.",
    coords: "SEC-22"
  }
];

export function Infrastructure() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto">
      
      <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-6">
        <h3 className="text-xl font-mono text-white/40 uppercase tracking-widest">
          Woven Infrastructure
        </h3>
        <span className="text-xs font-mono text-white/20">
          GRID SYSTEM v2.0
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group relative h-96 deboss-panel rounded-xl p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:translate-y-1"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs text-white/20">{panel.id}</span>
              <panel.icon className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
            </div>

            {/* Content */}
            <div className="space-y-4 relative z-10">
              <h4 className="text-xl font-display text-white/70 group-hover:text-white/90 transition-colors">
                {panel.title}
              </h4>
              <p className="text-sm text-white/30 leading-relaxed">
                {panel.desc}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-white/10">{panel.coords}</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="w-1 h-1 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Hover Highlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-white/[0.02] hidden md:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-white/[0.02] hidden md:block" />
      
    </section>
  );
}
