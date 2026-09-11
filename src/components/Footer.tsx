import React from 'react';
import { AppView } from '../types';
import { siteConfig } from '../data/content';
import { SkLogo } from './SkLogo';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { view: AppView; label: string }[] = [
    { view: 'home', label: t.nav.home },
    { view: 'about', label: t.nav.about },
    { view: 'radiology', label: t.nav.radiology },
    { view: 'creative', label: t.nav.creative },
    { view: 'portfolio', label: t.nav.portfolio },
    { view: 'privacy', label: t.privacy.heading },
  ];

  return (
    <footer className="w-full bg-[#070A18] relative mt-16 border-t border-[#20284A]" role="contentinfo">
      {/* Subtle Rainbow Logo-colored Divider Line */}
      <div className="w-full h-[2.5px] bg-gradient-to-r from-[#FACC15] via-[#42D8D5] via-[#3B82F6] via-[#E44CA5] to-[#FF873B]" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Identity & Social (~5 of 12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SkLogo size={44} />
              <div>
                <span className="text-xl font-bold text-white tracking-wider font-mono-tech">
                  {siteConfig.brandName}
                </span>
                <p className="text-xs text-[#42D8D5] font-mono-tech">
                  {siteConfig.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E2E8F5]/75 font-bengali max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* Social & Contact Links (Compact & Seamless) */}
            <div className="pt-2 flex flex-col space-y-1 max-w-sm">
              <span className="text-xs font-mono-tech text-[#42D8D5] uppercase tracking-wider block mb-0.5">
                Connect & Social
              </span>

              {/* Facebook */}
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center py-1 px-1.5 bg-transparent hover:bg-white/[0.04] active:bg-white/[0.06] rounded-md transition-all"
                aria-label="Facebook Profile"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[#42D8D5] group-hover:scale-105 shrink-0 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-white group-hover:text-[#42D8D5] transition-colors leading-tight">
                      Facebook
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 group-hover:text-[#E2E8F5]/90 truncate">
                      facebook.com/srikrishna.bar.102
                    </span>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center py-1 px-1.5 bg-transparent hover:bg-white/[0.04] active:bg-white/[0.06] rounded-md transition-all"
                aria-label="Instagram Profile"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[#FF873B] group-hover:scale-105 shrink-0 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-white group-hover:text-[#FF873B] transition-colors leading-tight">
                      Instagram
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 group-hover:text-[#E2E8F5]/90 truncate">
                      @srikrishnabar2000
                    </span>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={siteConfig.emailHref}
                className="group flex items-center py-1 px-1.5 bg-transparent hover:bg-white/[0.04] active:bg-white/[0.06] rounded-md transition-all"
                aria-label="Direct Email"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[#42D8D5] group-hover:scale-105 shrink-0 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-white group-hover:text-[#42D8D5] transition-colors leading-tight">
                      Email
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 group-hover:text-[#E2E8F5]/90 truncate">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center py-1 px-1.5 bg-transparent hover:bg-white/[0.04] active:bg-white/[0.06] rounded-md transition-all"
                aria-label="YouTube Channel"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[#E44CA5] group-hover:scale-105 shrink-0 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-white group-hover:text-[#E44CA5] transition-colors leading-tight">
                      YouTube
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 group-hover:text-[#E2E8F5]/90 truncate">
                      @skshortstory1500
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (~3 of 12) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech text-[#42D8D5] uppercase tracking-wider block">
              {t.footer.quickNav}
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.view}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.view)}
                    className="text-xs sm:text-sm text-[#E2E8F5]/70 hover:text-white transition-colors font-bengali"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Address (~4 of 12) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono-tech text-[#FF873B] uppercase tracking-wider block">
              {t.footer.addressTitle}
            </span>
            <address className="not-italic text-xs font-mono-tech text-[#E2E8F5]/80 space-y-1 leading-relaxed">
              <div className="text-white font-semibold">{siteConfig.ownerName}</div>
              <div>Village & P.O.: {siteConfig.address.village}</div>
              <div>P.S.: {siteConfig.address.policeStation}</div>
              <div>District: {siteConfig.address.district}</div>
              <div>State: {siteConfig.address.state}, {siteConfig.address.country}</div>
              <div className="text-[#42D8D5]">PIN Code: {siteConfig.address.postalCode}</div>
              <div className="pt-2 text-[11px] text-[#E2E8F5]/60">
                Phone: {siteConfig.phoneDisplay}
              </div>
            </address>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 pt-6 border-t border-[#20284A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#E2E8F5]/60">
          <p>
            {t.footer.copyright}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151D38] hover:bg-[#20284A] border border-[#20284A] hover:border-[#42D8D5]/40 text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#42D8D5]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#42D8D5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
