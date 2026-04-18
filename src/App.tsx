import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import AttractionSection from './components/AttractionSection';
import FoodGallery from './components/FoodGallery';
import TravelGuide from './components/TravelGuide';
import SafetyRules from './components/SafetyRules';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import WhaleSharkMascot from './components/WhaleSharkMascot';

const ATTRACTIONS = [
  {
    title: 'Gentle Giants',
    description: 'Jump entirely into the blue! Watch these magnificent creatures up close. Since 2011, the fishermen organized as TOSWFA have protected these waters, completely revitalizing the ecosystem and the local livelihood.',
    imageUrl: '/whalesharkwatching.jpg',
    reverse: false,
    color: 'blue' as const,
  },
  {
    title: 'Tumalog Falls',
    description: 'After the salty ocean swim, you have to cool off here. Tumalog Falls looks like a magical umbrella pouring crystal clear mountain water down mossy rocks. It is pure tropical perfection hiding in the mountains of Oslob.',
    imageUrl: '/tumalog-falls.jpg',
    reverse: true,
    color: 'green' as const,
  },
  {
    title: 'Cuartel Ruins',
    description: 'The Cuartel was intended to be a Spanish military barracks built using thick coral stones in the 1890s to protect from Moro raiders. Construction halted when the Americans arrived in 1898. Now, it stands as a beautiful monument.',
    imageUrl: '/cuartel-beach.jpg',
    reverse: false,
    color: 'pink' as const,
  },
  {
    title: 'Sumilon Island',
    description: 'A tiny slice of paradise. The shifting white sandbar changes its shape depending on the tide and the season. It was actually the first marine protected area in the Philippines! Grab your snorkel and dive into the colorful coral reefs.',
    imageUrl: '/sumilon-sandbar.jpg',
    reverse: true,
    color: 'yellow' as const,
  }
];

function App() {
  return (
    <SmoothScroll>
      <div className="bg-oslob-sand text-zinc-900 min-h-screen font-sans selection:bg-oslob-cyan selection:text-white">
        <Cursor />
        <Header />
        <WhaleSharkMascot />
        
        <main>
          <Hero />

          <HistorySection />

          <div id="attractions" className="relative z-10 bg-white py-24 rounded-[4rem] md:rounded-[8rem] shadow-fun">
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-5xl font-display font-black text-oslob-blue tracking-tight">
                Explore The Magic
              </h2>
              <p className="text-oslob-green font-bold mt-2 text-lg uppercase tracking-widest">
                Top Tourism Spots
              </p>
            </div>

            {ATTRACTIONS.map((attraction, index) => (
              <AttractionSection 
                key={index}
                title={attraction.title}
                description={attraction.description}
                imageUrl={attraction.imageUrl}
                reverse={attraction.reverse}
                color={attraction.color}
              />
            ))}
          </div>

          <FoodGallery />

          <TravelGuide />

          <SafetyRules />

          <FAQ />

          <ContactForm />

          <footer className="w-full py-24 bg-oslob-blue text-white flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4 text-center z-10 drop-shadow-md">
              See You In Oslob!
            </h2>
            <p className="text-oslob-cyan font-bold z-10">Cebu, Philippines</p>
            <p className="text-white/50 mt-12 text-sm z-10 font-medium tracking-widest uppercase">© 2026 Oslob Tourism Council</p>

            <div className="absolute top-10 left-10 w-32 h-32 bg-oslob-pink rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-oslob-cyan rounded-full blur-3xl opacity-30"></div>
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
