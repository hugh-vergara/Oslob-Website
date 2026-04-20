import { motion } from 'framer-motion';
import { Bus, MapPin, Clock, Wallet, Info } from 'lucide-react';

const GUIDES = [
  {
    icon: <Bus className="w-8 h-8" />,
    title: "How to Get There",
    desc: "Take a Ceres Liner bus from Cebu South Bus Terminal marked 'Bato via Oslob'. It's a 4-hour scenic ride along the coastline.",
    color: "bg-oslob-cyan"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "The Early Bird...",
    desc: "Arrive by 6:00 AM! Whaleshark watching is a morning-only activity (closing at noon). The early start means cooler weather and smaller crowds.",
    color: "bg-oslob-yellow"
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Cash is King",
    desc: "Fees for interaction are approx ₱1000. There are no ATMs in the briefing area, so make sure to withdraw in Cebu City or Carcar on your way.",
    color: "bg-oslob-pink"
  }
];

export default function TravelGuide() {
  return (
    <section id="plan" data-header-theme="dark" className="py-24 bg-white rounded-t-[4rem] md:rounded-t-[8rem] shadow-fun relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-oslob-green text-white font-bold rounded-full mb-6 border-2 border-oslob-blue"
          >
            <Info className="w-4 h-4" /> Practical Guide
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-oslob-blue tracking-tight">
            Plan Your Journey
          </h2>
          <p className="text-xl text-zinc-600 mt-4 max-w-2xl mx-auto font-medium">
            Everything you need to know before you head down south to the paradise of Oslob.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className={`${guide.color} p-8 rounded-[2.5rem] shadow-fun-soft border-2 border-oslob-blue group hover:-translate-y-2 transition-transform`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border-2 border-oslob-blue shadow-fun-soft group-hover:rotate-6 transition-transform">
                {guide.icon}
              </div>
              <h3 className="text-2xl font-black font-display text-oslob-blue mb-4">{guide.title}</h3>
              <p className="text-oslob-blue opacity-90 font-medium leading-relaxed">{guide.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-oslob-sand p-8 rounded-[3rem] border-2 border-oslob-blue/10 flex flex-col md:flex-row items-center gap-8 shadow-inner">
           <MapPin className="w-16 h-16 text-oslob-cyan flex-shrink-0" />
           <div className="text-left">
              <h4 className="text-2xl font-bold text-oslob-blue">Location Tracker</h4>
              <p className="text-zinc-600 font-medium">Briefing Area: Brgy. Tan-awan, Oslob, Cebu (Right beside the Main Highway). Your bus conductor will know exactly where to drop you!</p>
           </div>
        </div>
      </div>
    </section>
  );
}
