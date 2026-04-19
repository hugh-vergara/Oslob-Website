import { motion } from 'framer-motion';

const DELICACIES = [
  {
    name: 'Rosquillos',
    desc: 'A classic Cebuano biscuit—light, crisp, and slightly sweet with a buttery flavor. Perfect for pairing with coffee or hot chocolate, making it a simple yet satisfying treat any time of day.',
    img: '/rosquillos.jpg',
    color: 'bg-oslob-cyan',
  },
  {
    name: 'Kinilaw',
    desc: 'Cebu\'s take on ceviche. Freshly diced fish marinated in native coconut vinegar, fiery chili, ginger, and calamansi. Extremely refreshing!',
    img: '/kinilaw.jpg',
    color: 'bg-oslob-pink',
  },
  {
    name: 'Puto Maya & Tsokolate',
    desc: 'The ultimate breakfast. Glutinous sticky rice cooked with coconut milk, paired with a rich, thick cup of locally sourced hot chocolate.',
    img: '/puto-maya.jpg',
    color: 'bg-oslob-yellow',
  },
  {
    name: 'Torta Cebuana',
    desc: 'A delightfully soft, fluffy cake traditionally baked in special clay ovens. A sweet reward after swimming with the whale sharks!',
    img: '/torta-cebuana.jpg',
    color: 'bg-white text-oslob-blue border-oslob-blue border-2',
  }
];

export default function FoodGallery() {
  return (
    <section id="culture" className="relative w-full py-24 bg-oslob-sand">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black text-oslob-blue tracking-tight"
          >
            Taste the Culture
          </motion.h2>
          <p className="text-xl text-zinc-600 mt-4 max-w-2xl mx-auto font-medium">
            Oslob isn't just a feast for the eyes; it's a paradise for your tastebuds! Discover our local delicacies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DELICACIES.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-[2rem] overflow-hidden p-4 shadow-fun-soft group ${food.color}`}
            >
              <div className="h-48 rounded-2xl overflow-hidden mb-4 border-2 border-black/10">
                <img 
                  src={food.img} 
                  alt={food.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-2xl font-black font-display mb-2">{food.name}</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">{food.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
