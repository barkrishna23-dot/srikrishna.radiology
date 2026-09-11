import React, { useState, useEffect } from 'react';
import { AppView } from '../types';
import { siteConfig } from '../data/content';
import { SkLogo } from './SkLogo';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems: { view: AppView; label: string; hash: string }[] = [
    { view: 'home', label: t.nav.home, hash: '#home' },
    { view: 'about', label: t.nav.about, hash: '#about' },
    { view: 'radiology', label: t.nav.radiology, hash: '#radiology' },
    { view: 'creative', label: t.nav.creative, hash: '#creative' },
    { view: 'portfolio', label: t.nav.portfolio, hash: '#portfolio' },
  ];

  const handleNavClick = (view: AppView, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full h-16 md:h-[76px] bg-[#0B1026]/90 backdrop-blur-md border-b border-[#20284A]/70 transition-colors"
      role="banner"
    >
      <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand & Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('home', e)}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#42D8D5] rounded-xl p-1 -ml-1 transition-all"
          aria-label="SRIKRISHNA BAR Home"
        >
          <SkLogo size={48} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wider text-white group-hover:text-[#42D8D5] transition-colors leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="text-[11px] font-mono-tech text-[#42D8D5] hidden sm:inline tracking-tight">
              Radiology Technologist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <a
                key={item.view}
                href={item.hash}
                onClick={(e) => handleNavClick(item.view, e)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-lg text-[15px] font-medium transition-all ${
                  isActive
                    ? 'text-[#42D8D5] bg-[#151D38] border border-[#42D8D5]/30 shadow-sm'
                    : 'text-[#E2E8F5]/85 hover:text-white hover:bg-[#151D38]/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right side: Language Switcher + Contact CTA */}
        <div className="hidden md:flex items-center gap-2 mr-3 lg:mr-6">
          {/* Single Combined Language Toggle: বাংলা / English in one place */}
          <button
            type="button"
            id="lang-toggle-btn"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold bg-[#151D38] hover:bg-[#1f2a4f] text-white border border-[#20284A] hover:border-[#42D8D5]/40 transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#42D8D5]"
            title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            aria-label="Toggle language (বাংলা / English)"
          >
            <Globe className="w-3 h-3 text-[#42D8D5] shrink-0" aria-hidden="true" />
            <span
              className={`transition-colors ${
                language === 'bn'
                  ? 'font-bengali font-bold text-[#42D8D5]'
                  : 'font-bengali text-[#E2E8F5]/60 hover:text-white'
              }`}
            >
              বাংলা
            </span>
            <span className="text-[#E2E8F5]/30 text-[10px] select-none">/</span>
            <span
              className={`transition-colors ${
                language === 'en'
                  ? 'font-mono-tech font-bold text-[#42D8D5]'
                  : 'font-mono-tech text-[#E2E8F5]/60 hover:text-white'
              }`}
            >
              EN
            </span>
          </button>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#283E86] hover:bg-[#3451b0] text-white transition-all shadow-xs border border-[#42D8D5]/30 hover:border-[#42D8D5]"
          >
            <span>{t.nav.contactCta}</span>
            <ArrowUpRight className="w-3 h-3 text-[#42D8D5]" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1.5">
          {/* Single Combined Mobile Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-[#151D38] border border-[#20284A] text-white focus:outline-none focus:ring-1 focus:ring-[#42D8D5]"
            aria-label="Toggle language"
          >
            <Globe className="w-2.5 h-2.5 text-[#42D8D5] shrink-0" aria-hidden="true" />
            <span className={language === 'bn' ? 'text-[#42D8D5] font-bengali font-bold' : 'text-[#E2E8F5]/60 font-bengali'}>
              বাং
            </span>
            <span className="text-[#E2E8F5]/30 text-[9px]">/</span>
            <span className={language === 'en' ? 'text-[#42D8D5] font-mono-tech font-bold' : 'text-[#E2E8F5]/60 font-mono-tech'}>
              EN
            </span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="px-2 py-1 rounded-md text-[11px] font-semibold bg-[#283E86] text-white border border-[#42D8D5]/30"
          >
            {t.nav.contact}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#151D38] border border-[#20284A] text-[#E2E8F5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#42D8D5]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 bg-[#0B1026]/95 backdrop-blur-xl border-b border-[#20284A] px-4 py-6 shadow-2xl transition-all"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Mobile Full Language Toggle */}
          <div className="mb-4 pb-4 border-b border-[#20284A] flex items-center justify-between">
            <span className="text-xs font-mono-tech text-[#42D8D5]">LANGUAGE / ভাষা:</span>
            <div className="flex items-center rounded-xl bg-[#151D38] p-1 border border-[#20284A]">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all font-bengali ${
                  language === 'bn' ? 'bg-[#42D8D5] text-[#0B1026] font-bold' : 'text-[#E2E8F5]/70'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all font-mono-tech ${
                  language === 'en' ? 'bg-[#42D8D5] text-[#0B1026] font-bold' : 'text-[#E2E8F5]/70'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeView === item.view;
              return (
                <a
                  key={item.view}
                  href={item.hash}
                  onClick={(e) => handleNavClick(item.view, e)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-[#42D8D5] bg-[#151D38] border border-[#42D8D5]/30'
                      : 'text-[#E2E8F5] hover:bg-[#151D38]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#42D8D5]" />}
                </a>
              );
            })}

            {/* Mobile Social Links Row */}
            <div className="pt-4 mt-2 border-t border-[#20284A] flex items-center justify-around">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#151D38] text-white hover:text-[#42D8D5]"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#151D38] text-white hover:text-[#FF873B]"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#151D38] text-white hover:text-[#E44CA5]"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href={siteConfig.phoneHref}
                className="p-3 rounded-xl bg-[#151D38] text-white hover:text-[#42D8D5]"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a
                href={siteConfig.emailHref}
                className="p-3 rounded-xl bg-[#151D38] text-white hover:text-[#FF873B]"
                aria-label="Email"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
