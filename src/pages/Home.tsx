import { FabricLayout } from '@/components/FabricLayout';
import { DebossedLogo } from '@/components/DebossedLogo';
import { Hero } from '@/components/Hero';
import { TheStack } from '@/components/TheStack';
import { GovernanceEconomy } from '@/components/GovernanceEconomy';
import { LinkOS } from '@/components/LinkOS';
import { MatrixProducts } from '@/components/MatrixProducts';
import { Origin } from '@/components/Origin';
import { Applications } from '@/components/Applications';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <FabricLayout>
      {/* Top Navigation / Status Bar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <div className="text-xs font-bold tracking-tighter text-gray-800">
          LINK—AI
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-gray-900 transition-colors">Platform</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Network</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Access</a>
        </div>
      </nav>

      <main className="relative z-10">
        <div className="pt-24 pb-8">
          <DebossedLogo />
        </div>
        
        <Hero />
        
        <div className="my-24 w-full h-px bg-gray-200" />
        
        <TheStack />
        
        <GovernanceEconomy />
        
        <div className="my-12" />
        
        <LinkOS />
        
        <div className="my-12" />
        
        <MatrixProducts />
        
        <Origin />
        
        <div className="my-12" />
        
        <Applications />

        {/* Footer */}
        <footer className="py-16 px-8 border-t border-gray-200 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-2">
              <h5 className="text-lg font-bold tracking-tighter text-gray-800">LINK—AI</h5>
              <p className="text-xs font-mono text-gray-400">
                Built for local intelligence.
              </p>
            </div>
            <div className="flex gap-6 text-xs font-mono text-gray-400">
              <Link to="/manifesto" className="hover:text-gray-600 transition-colors">Manifesto</Link>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Access</a>
            </div>
          </div>
        </footer>
      </main>
    </FabricLayout>
  );
}
