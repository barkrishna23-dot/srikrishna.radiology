import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HomeHero } from './components/HomeHero';
import { AboutView } from './components/views/AboutView';
import { RadiologyView } from './components/views/RadiologyView';
import { CreativeView } from './components/views/CreativeView';
import { PortfolioView } from './components/views/PortfolioView';
import { MarketLearningView } from './components/views/MarketLearningView';
import { ContactView } from './components/views/ContactView';
import { PrivacyView } from './components/views/PrivacyView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<AppView>('home');

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = (): AppView => {
      const hash = window.location.hash.replace('#', '');
      const validViews: AppView[] = [
        'home',
        'about',
        'radiology',
        'creative',
        'portfolio',
        'market-learning',
        'contact',
        'privacy',
      ];
      if (validViews.includes(hash as AppView)) {
        return hash as AppView;
      }
      return 'home';
    };

    const initialView = parseHash();
    setActiveView(initialView);

    const handleHashChange = () => {
      setActiveView(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: AppView) => {
    setActiveView(view);
    window.location.hash = `#${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0B1026] text-[#E2E8F5] flex flex-col selection:bg-[#42D8D5] selection:text-[#0B1026] relative font-sans">
        {/* Ambient background glow & scan grid pattern */}
        <div className="fixed inset-0 bg-scan-grid opacity-15 pointer-events-none z-0" />
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#283E86]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed top-1/3 right-10 w-96 h-96 bg-[#FF873B]/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Main Header */}
        <Header activeView={activeView} onNavigate={handleNavigate} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {activeView === 'home' && (
            <div className="animate-fade-in space-y-4">
              <HomeHero onNavigate={handleNavigate} />
            </div>
          )}

          {activeView === 'about' && <AboutView />}

          {activeView === 'radiology' && <RadiologyView />}

          {activeView === 'creative' && (
            <CreativeView onNavigatePortfolio={() => handleNavigate('portfolio')} />
          )}

          {activeView === 'portfolio' && <PortfolioView />}

          {activeView === 'market-learning' && <MarketLearningView />}

          {activeView === 'contact' && <ContactView />}

          {activeView === 'privacy' && (
            <PrivacyView onNavigateHome={() => handleNavigate('home')} />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}
