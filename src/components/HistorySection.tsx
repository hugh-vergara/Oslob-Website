import { motion } from 'framer-motion';

export default function HistorySection() {
  return (
    <section id="history" className="relative w-full py-24 bg-oslob-sand flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ type: "spring", bounce: 0.4 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-oslob-pink mb-4">Our Roots</h2>
          <h3 className="text-5xl md:text-7xl font-display font-black text-oslob-blue tracking-tight">
            How "Toslob" Became Oslob
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-fun-soft border-2 border-oslob-blue/10 overflow-hidden"
          >
            <img src="/toslob-festival.jpg" alt="Toslob Festival" className="w-full h-48 object-cover mb-4" />
            <div className="p-8 pt-0">
              <h4 className="text-3xl font-display font-bold text-oslob-cyan mb-4">The Naming Legend</h4>
              <p className="text-zinc-700 leading-relaxed text-lg">
                Long before it was an eco-tourism powerhouse, the town was a quiet *visita* (chapel) of Boljoon established in 1690. Legend dictates the town's name was a linguistic accident! When Spanish soldiers approached a local couple soaking bananas in salt brine, they asked for the name of the town. Believing they were asking what they were doing, the couple replied <strong>"Toslob"</strong> (Cebuano for "to soak"). The Spaniards adopted it, and eventually, the 'T' was dropped!
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mt-4 font-bold text-oslob-pink">
                Today, we celebrate the <strong>Toslob Festival</strong> every December to honor this unique origin story and the town's rich cultural heritage.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-oslob-yellow rounded-3xl shadow-fun-soft border-2 border-oslob-blue/10 overflow-hidden"
          >
            <img src="/fisherman.jpg" alt="Fishermen of Oslob" className="w-full h-48 object-cover mb-4" />
            <div className="p-8 pt-0 text-oslob-blue">
              <h4 className="text-3xl font-display font-bold mb-4 text-oslob-blue">Fisheries to Eco-Tourism</h4>
              <p className="opacity-90 leading-relaxed text-lg">
                Historically, Oslob was an impoverished farming and fishing municipality. But in 2011, everything changed. Local fishermen used to toss <em>uyap</em> (tiny krill) to keep whale sharks away from their fishing nets. Soon, guiding tourists to see these majestic *butanding* became far more lucrative than traditional fisheries. Formally organized under <strong>TOSWFA</strong> (Tan-awan Oslob Sea Wardens), this industry helped lift the community from poverty to prosperity.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
