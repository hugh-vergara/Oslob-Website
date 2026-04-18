import { motion } from 'framer-motion';
import { ShieldCheck, XCircle, Sun, Wind, CameraOff } from 'lucide-react';

const RULES = [
  { icon: <XCircle className="text-red-500" />, text: "No Touching the Whaleshark" },
  { icon: <Wind className="text-blue-500" />, text: "Stay 4-5 Meters Away" },
  { icon: <CameraOff className="text-zinc-500" />, text: "No Flash Photography" },
  { icon: <Sun className="text-yellow-500" />, text: "No Sunscreen in the Water" }
];

export default function SafetyRules() {
  return (
    <section className="py-24 bg-oslob-blue text-white overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-oslob-cyan rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-oslob-pink rounded-full blur-[140px] opacity-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-oslob-pink text-white font-bold rounded-full mb-6 border-2 border-white/20">
                <ShieldCheck className="w-4 h-4" /> Responsible Tourism
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
                Protect the <span className="text-oslob-cyan">Butanding</span>
              </h2>
              <p className="text-xl text-white/80 font-medium leading-relaxed mb-8">
                Whalesharks are gentle giants, but stay fragile! To ensure their protection and the sustainability of Oslob's nature, we adhere to strict international safety guidelines.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RULES.map((rule, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                      {rule.icon}
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">{rule.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-fun shadow-oslob-cyan/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1579737197148-5c4048e9c3e1?auto=format&fit=crop&q=80&w=1000" 
                alt="Protection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oslob-blue/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-black text-2xl uppercase tracking-tighter">Your respect keeps them returning!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
