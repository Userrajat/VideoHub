import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <TrendingSection />
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;