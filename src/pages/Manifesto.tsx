import { FabricLayout } from '@/components/FabricLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Manifesto() {
  return (
    <FabricLayout>
      {/* Top Navigation / Status Bar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <Link to="/" className="text-xs font-bold tracking-tighter text-gray-800 hover:opacity-70 transition-opacity">
          LINK—AI
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          
          {/* Header */}
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-medium text-gray-800 tracking-tight">
              A Manifesto for the Hyperphysical Era
            </h1>
            <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
              Founded in London. Designed globally.
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-gray max-w-none text-center md:text-lg text-gray-600 leading-relaxed space-y-8">
            <p>
              LINK—AI was built on a simple belief:
            </p>
            <p className="font-medium text-gray-800">
              Intelligence should not be owned.<br/>
              It should be embedded.<br/>
              Shared.<br/>
              Permissioned.<br/>
              And collectively shaped.
            </p>
            <p>
              We are entering a new industrial phase — Industry 5.0 — where systems are no longer centralised machines of scale, but coordinated networks of human and artificial intelligence.
            </p>
            <p>
              Industry 5.0 is not about automation replacing people.<br/>
              It is about augmentation.<br/>
              Collaboration.<br/>
              Community-scale capability.
            </p>
            <p>
              LINK—AI exists to build the infrastructure for that shift.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200" />

          {/* Sections */}
          <div className="grid gap-24">
            
            {/* Intelligence, Embedded */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">Intelligence, Embedded</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We believe AI should not live in distant data centres controlled by a few entities.
                </p>
                <p>
                  It should live locally.<br/>
                  In devices.<br/>
                  In communities.<br/>
                  In spaces.<br/>
                  In the fabric of environments.
                </p>
                <p>
                  From distributed local AI models to multi-agent coordination systems, LINK—AI is building a decentralised stack that allows intelligence to operate across homes, studios, cities, and networks — without surrendering ownership or autonomy.
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 pt-4">
                  This is not cloud dependency. This is compute sovereignty.
                </p>
              </div>
            </section>

            {/* Decentralisation Is a Design Principle */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">Decentralisation Is a Design Principle</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Decentralisation is not a trend.<br/>
                  It is an architectural decision.
                </p>
                <p>
                  Ownership matters.<br/>
                  Governance matters.<br/>
                  Trust must be designed — not assumed.
                </p>
                <p>
                  Through distributed ledgers, community voting systems, personal currencies, and cooperative infrastructure, LINK—AI explores new models of participation:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-500">
                  <li>Users can build.</li>
                  <li>Users can contribute.</li>
                  <li>Users can invest.</li>
                  <li>Users can delegate.</li>
                  <li>Users can vote.</li>
                  <li>Users can launch their own micro-economies.</li>
                </ul>
                <p>
                  The platform is not controlled by a single authority.
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 pt-4">
                  It is coordinated.
                </p>
              </div>
            </section>

            {/* The Hyperphysical World */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">The Hyperphysical World</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We no longer live purely online or offline.
                </p>
                <p>
                  We live in the hyperphysical world — where physical environments, digital identity, spatial media, and machine systems overlap.
                </p>
                <p>
                  LINK—AI builds for this layer.
                </p>
                <p>
                  From augmented human profiles and multi-agent identities, to AR networking platforms anchored to real-world places, to wearable and robotic interfaces — the goal is not to escape reality.
                </p>
                <p>
                  It is to enhance it.
                </p>
                <p className="font-medium text-gray-800">
                  To make intelligence spatial.<br/>
                  Contextual.<br/>
                  Permissioned.<br/>
                  Human-aware.
                </p>
              </div>
            </section>

            {/* LINK OS */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">LINK OS</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At the core sits LINK OS — the orchestration layer.
                </p>
                <p>
                  Not a ruler.<br/>
                  Not an overlord.
                </p>
                <p className="font-medium text-gray-800">
                  A coordination intelligence.
                </p>
                <p>
                  It routes tasks.<br/>
                  Manages permissions.<br/>
                  Synchronises agents.<br/>
                  Bridges local compute with network governance.
                </p>
                <p>
                  It exists to support human intent — not override it.
                </p>
                <p>
                  Human-defined rules.<br/>
                  Transparent systems.<br/>
                  Auditable logic.
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 pt-4">
                  Control remains distributed.
                </p>
              </div>
            </section>

            {/* Industry 5.0 */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">Industry 5.0</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  LINK—AI is structured as an Industry 5.0 business.
                </p>
                <p className="font-medium text-gray-800">
                  Human-centric.<br/>
                  Local-first.<br/>
                  Collaborative.<br/>
                  Resilient.
                </p>
                <p>
                  It integrates:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-500">
                  <li>AI infrastructure</li>
                  <li>Community governance</li>
                  <li>Spatial computing</li>
                  <li>Robotics and wearables</li>
                  <li>Local data sovereignty</li>
                </ul>
                <p>
                  Not as separate products, but as a unified fabric.
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 pt-4">
                  A system woven across people and machines.
                </p>
              </div>
            </section>

            {/* Origin */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">Origin</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded by Lexan, a designer focused on decentralisation, freedom, and open technological systems.
                </p>
                <p>
                  Building AI and cryptographic projects since the age of 16, his work explores how distributed intelligence can empower communities rather than centralise power.
                </p>
                <p>
                  From AI tools for education and home environments, to robotic wearables and architectural interfaces, the direction has remained consistent:
                </p>
                <p className="font-medium text-gray-800">
                  Design systems that increase autonomy.<br/>
                  Design infrastructure that increases participation.<br/>
                  Design intelligence that serves communities.
                </p>
              </div>
            </section>

            {/* This Is Not a Startup */}
            <section className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-gray-800">This Is Not a Startup</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  This is infrastructure.
                </p>
                <p>
                  Not for rapid extraction.<br/>
                  But for long-term coordination.
                </p>
                <p>
                  Not for hype cycles.<br/>
                  But for generational systems.
                </p>
                <p>
                  LINK—AI is an experiment in building the next layer of intelligence — embedded into the material, social, and spatial fabric of our world.
                </p>
                <p>
                  The future is not centralised.<br/>
                  It is interwoven.
                </p>
                <p className="font-mono text-sm uppercase tracking-widest text-gray-800 pt-8">
                  Intelligence, embedded.
                </p>
              </div>
            </section>

          </div>

        </motion.div>

        {/* Footer */}
        <footer className="py-16 border-t border-gray-200 mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-2">
              <h5 className="text-lg font-bold tracking-tighter text-gray-800">LINK—AI</h5>
              <p className="text-xs font-mono text-gray-400">
                Built for local intelligence.
              </p>
            </div>
            <div className="flex gap-6 text-xs font-mono text-gray-400">
              <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </footer>

      </main>
    </FabricLayout>
  );
}
