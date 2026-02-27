import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: "01",
    name: "Project Blue Sky",
    desc: "Community AGI — a distributed local AI model and local storage layer for neighborhoods, studios, and micro-factories.",
    status: "Active"
  },
  {
    id: "02",
    name: "ARK",
    desc: "A secure, local-first vault for all your data — private by default, portable across devices.",
    status: "In Build"
  },
  {
    id: "03",
    name: "LINK CODE",
    desc: "Build apps, websites, and machine workflows with natural language — from idea to deploy.",
    status: "In Build"
  },
  {
    id: "04",
    name: "LINK CODE Mobile",
    desc: "A pocket studio for building: apps, sites, automation, and machine-to-machine programming on the move.",
    status: "In Build"
  },
  {
    id: "05",
    name: "Topia",
    desc: "A decentralized network where humans connect, share, collaborate, build products/services, and seek investment together.",
    status: "In Build"
  },
  {
    id: "06",
    name: "TOPIAN Server",
    desc: "A real-world AR + virtual media platform for human networking — anchored to places, events, and communities.",
    status: "In Build"
  },
  {
    id: "07",
    name: "TOPIAN Multiagents",
    desc: "Create your augmented profile for the hyperphysical world — multi-agent identities, permissions, and presence across the hyperphysical world.",
    status: "In Build"
  },
  {
    id: "08",
    name: "TOPIAN AGI",
    desc: "A multi-agent AGI network that communicates with friends/colleagues — your personal team of PA / 'astro' agents and chosen advisors (living or legacy), with explicit permission controls.",
    status: "In Build"
  },
  {
    id: "09",
    name: "TOPIAN Network",
    desc: "The decentralised coordination layer for people, teams, studios, and communities — connect, share, collaborate, and co-build products and services.",
    status: "In Build"
  },
  {
    id: "10",
    name: "TOPIAN Coin Ledger",
    desc: "A programmable economic layer for the platform: users can buy, sell, trade, invest, delegate, contribute, and vote — including the ability to create personal currencies ('Personal Topia') for communities, creators, and projects.",
    status: "In Build"
  },
  {
    id: "11",
    name: "Sidekick",
    desc: "A guiding agent for human prompting — take back control of your life with step-by-step direction and accountability.",
    status: "In Build"
  },
  {
    id: "12",
    name: "Matrix AGI Hardware",
    desc: "Physical interfaces for the hyperphysical world: Mixed Reality headsets, intelligent home cores, and autonomous robotics.",
    status: "In Build"
  }
];

export function TheStack() {
  return (
    <section className="relative py-24 px-4 md:px-8">
      
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-gray-200 pb-6 gap-4">
        <div>
          <h3 className="text-2xl font-display font-medium text-gray-800 tracking-tight mb-2">
            The LINK—AI Stack
          </h3>
          <p className="text-sm text-gray-500 max-w-md">
            A modular system of projects, agents, and networks — designed to run locally, coordinate globally.
          </p>
        </div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          System Inventory
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="group relative h-64 deboss-panel-light rounded-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-gray-400 tracking-widest">MODULE {mod.id}</span>
              <div className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500",
                mod.status === "Active" 
                  ? "bg-[#F2F3F5] border-white/50 shadow-[inset_1px_1px_2px_rgba(163,177,198,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]" 
                  : "bg-transparent border-transparent"
              )}>
                {mod.status === "Active" && (
                  <div className="led-container w-4 h-4">
                    <div className="led-green animate-pulse" />
                  </div>
                )}
                <span className={cn(
                  "text-[10px] font-mono tracking-wider uppercase",
                  mod.status === "Active" ? "text-emerald-800 font-semibold text-deboss-light" : "text-gray-400"
                )}>
                  {mod.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <h4 className="text-lg font-display font-medium text-gray-800 group-hover:text-black transition-colors">
                {mod.name}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {mod.desc}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 flex justify-end">
               <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
