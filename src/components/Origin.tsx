import { motion } from 'framer-motion';

export function Origin() {
  return (
    <section className="relative py-24 px-4 md:px-8 border-t border-gray-200/50">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Origin & Industry 5.0 */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* Origin Header */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-medium text-gray-800 tracking-tight">
                ORIGIN
              </h3>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                LONDON / GLOBAL NETWORK
              </span>
            </div>
            
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed max-w-2xl">
              <p>
                Founded in London. Designed globally.
                LINK—AI is an Industry 5.0 platform built around decentralisation, ownership, trust, community networking, and applied innovation.
              </p>
              <p>
                Positioned at the intersection of local-first AI, distributed governance, and spatial computing, LINK—AI explores how intelligence can be embedded into systems — not owned by corporations, but coordinated by communities.
              </p>
            </div>
          </div>

          {/* Industry 5.0 Sub-section */}
          <div className="deboss-panel-light rounded-xl p-8">
            <h4 className="text-lg font-display font-medium text-gray-800 tracking-tight mb-4">
              Industry 5.0
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              LINK—AI is structured as an Industry 5.0 business — prioritising human-centric technology, decentralised infrastructure, community ownership, and collaborative innovation across physical and digital environments.
            </p>
          </div>

        </div>

        {/* Right Column: Founder */}
        <div className="lg:col-span-5">
          <div className="relative h-full">
            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 hidden lg:block -ml-12" />
            
            <div className="space-y-8">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                FOUNDER
              </span>

              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p>
                  Founded by Lexan — a designer focused on freedom, decentralisation, and open technological innovation.
                </p>
                <p>
                  Lexan began building AI and cryptographic projects from the age of 16, exploring blockchain, Web3, and distributed systems as tools for community-scale empowerment.
                </p>
                <p>
                  His work spans AI products for home and education, robotic wearables, architectural interfaces, and spatial computing systems — all designed to merge physical environments with intelligent infrastructure.
                </p>
              </div>
              
              {/* Signature / Mark */}
              <div className="pt-8 opacity-50">
                 <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-gray-400 text-xs">LX</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
}
