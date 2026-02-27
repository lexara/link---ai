import { motion } from 'framer-motion';

const items = [
  "CO-OWNERSHIP",
  "VOTING + PROPOSALS",
  "DELEGATION",
  "PERSONAL TOPIA CURRENCIES"
];

export function GovernanceEconomy() {
  return (
    <section className="relative py-16 px-4 md:px-8 border-t border-gray-200/50">
      
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h3 className="text-xl font-display font-medium text-gray-800 tracking-tight mb-4">
            Governance + Economy (TOPIAN Layer)
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            The platform runs on TOPIAN. Users can participate economically (trade/invest/contribute/delegate), 
            vote on proposals and allocations, and launch "Personal Topia" currencies for their own 
            communities and projects. Everything is permissioned and transparent.
          </p>
        </div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Proto-Economics v0.1
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="deboss-panel-light rounded-lg p-6 flex flex-col items-center justify-center text-center min-h-[120px] transition-all duration-300 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.6)]"
          >
            <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-2">
              Feature {i + 1}
            </span>
            <span className="text-xs font-bold text-gray-600 tracking-wider">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <span className="text-[9px] font-mono text-gray-300 uppercase tracking-widest">
          Prototype economics • design spec subject to iteration
        </span>
      </div>
      
    </section>
  );
}
