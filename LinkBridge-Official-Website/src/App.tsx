import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { HowItWorks } from './components/HowItWorks';
import { DownloadCenter } from './components/DownloadCenter';
import { SecuritySection } from './components/SecuritySection';
import { AboutDeveloper } from './components/AboutDeveloper';
import { FAQ } from './components/FAQ';
import { ContactSupport } from './components/ContactSupport';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <DownloadCenter />
        <HowItWorks />
        <SecuritySection />
        <AboutDeveloper />
        <FAQ />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
};

export default App;
