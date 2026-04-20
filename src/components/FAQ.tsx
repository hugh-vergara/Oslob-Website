import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: "How much does it cost?",
    a: "Base fees for interaction are around ₱1000 for tourists. This includes boat rental, life vest, and snorkeling gear. Prices may vary based on local ordinances."
  },
  {
    q: "What if it rains?",
    a: "The activity runs rain or shine! It only stops if the Coast Guard declares strong winds or waves that make the small paddle boats unsafe."
  },
  {
    q: "Can I bring my own gear?",
    a: "Absolutely! While masks and snorkels are provided, many guests prefer bringing their own for hygiene. Life vests are mandatory for safety."
  },
  {
    q: "Is there an age limit?",
    a: "There is no strict age limit, but children must be accompanied by adults and feel comfortable in the water. Life vests for kids are available."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" data-header-theme="dark" className="py-24 bg-oslob-sand border-t-8 border-oslob-blue/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-oslob-cyan mx-auto mb-6 animate-bounce" />
          <h2 className="text-5xl md:text-6xl font-display font-black text-oslob-blue tracking-tight">
            Curious Minds
          </h2>
          <p className="text-xl text-zinc-600 mt-4 font-medium">Quick answers to your most common questions.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[2rem] border-2 border-oslob-blue/10 shadow-fun-soft overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-oslob-cyan/5 transition-colors focus:outline-none"
              >
                <span className="text-xl font-bold text-oslob-blue">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-oslob-cyan transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 text-zinc-600 font-medium text-lg leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
