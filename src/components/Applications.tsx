import { motion } from 'framer-motion';

const apps = [
  "Local AI micro-factories + community compute",
  "Personal agent teams for work + life coordination",
  "AR networking events + place-based media",
  "Human-machine programming + M2M automation",
  "Secure local-first identity + data sovereignty",
  "Spatial web interfaces + head-tracked depth UI"
];

export function Applications() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-gray-50/50 rounded-2xl mx-2 md:mx-0 mb-12">
      
      <div className="mb-12">
        <h3 className="text-xl font-display font-medium text-gray-800 tracking-tight">
          Applications
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="deboss-panel-light rounded-lg p-6 flex items-center min-h-[100px] transition-all duration-300 hover:translate-y-[1px]"
          >
            <p className="text-sm text-gray-600 font-medium">
              {app}
            </p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
