import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCoffee from './components/FeaturedCoffee';
import About from './components/About';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ReservationCTA from './components/ReservationCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingMapButton from './components/FloatingMapButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCoffee />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <ReservationCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingMapButton />
    </>
  );
}
