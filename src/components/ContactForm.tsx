import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-oslob-cyan rounded-t-[4rem] md:rounded-t-[8rem] relative z-30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[4rem] shadow-fun border-4 border-oslob-blue overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-oslob-blue p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-display font-black tracking-tight mb-8">Say Hello!</h2>
              <p className="text-white/70 text-lg mb-12">Have questions about your upcoming trip to Oslob? Our local team is ready to help you plan the perfect escape.</p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <MapPin className="text-oslob-cyan" />
                  </div>
                  <span className="font-bold">Brgy. Tan-awan, Oslob, Cebu</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Mail className="text-oslob-pink" />
                  </div>
                  <span className="font-bold">hello@oslobtourism.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Phone className="text-oslob-yellow" />
                  </div>
                  <span className="font-bold">+63 912 345 6789</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 opacity-50 text-sm">
                * We usually respond within 24 hours.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-16">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-oslob-blue">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Juan Dela Cruz"
                    className="w-full bg-oslob-sand border-2 border-oslob-blue/10 p-4 rounded-2xl font-bold focus:border-oslob-cyan outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-oslob-blue">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="juan@example.com"
                    className="w-full bg-oslob-sand border-2 border-oslob-blue/10 p-4 rounded-2xl font-bold focus:border-oslob-cyan outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-oslob-blue">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="I'm planning to visit next month..."
                    className="w-full bg-oslob-sand border-2 border-oslob-blue/10 p-4 rounded-2xl font-bold focus:border-oslob-cyan outline-none transition-colors resize-none"
                  />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-oslob-pink text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-fun border-4 border-oslob-blue flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
