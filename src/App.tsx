import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50" dir="rtl">
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
