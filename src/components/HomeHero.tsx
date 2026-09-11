import React from 'react';
import { AppView } from '../types';
import { Hero3DScanner } from './Hero3DScanner';
import { PersonalPortrait } from './PersonalPortrait';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, UserCheck } from 'lucide-react';

interface HomeHeroProps {
  onNavigate: (view: AppView) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero-section"
      className="relative w-full pt-6 md:pt-10 pb-12 lg:pb-16"
      aria-label="Hero Overview"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: ~56% width (7 of 12 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.28] font-bengali">
            {t.hero.heading.includes(',') ? (
              <>
                <span className="text-white drop-shadow-sm">
                  {t.hero.heading.split(',')[0]},
                </span>{' '}
                <span className="block sm:inline text-white font-bold drop-shadow-sm">
                  {t.hero.heading.split(',')[1]}
                </span>
              </>
            ) : (
              t.hero.heading
            )}
          </h1>

          {/* English Tagline */}
          <p className="text-base sm:text-lg text-[#42D8D5] font-editorial italic -mt-1 font-normal tracking-wide">
            &ldquo;{t.hero.subHeading}&rdquo;
          </p>

          {/* Description */}
          <p className="text-base sm:text-[17px] text-[#E2E8F5]/90 leading-[1.75] font-bengali">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#283E86] hover:bg-[#324db0] text-white font-semibold text-base transition-all shadow-lg border border-[#42D8D5]/40 hover:border-[#42D8D5] focus:outline-none focus:ring-2 focus:ring-[#42D8D5]"
            >
              <span>{t.hero.primaryBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#42D8D5]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#151D38] hover:bg-[#20284A] text-[#E2E8F5] hover:text-white font-semibold text-base transition-all border border-[#20284A] hover:border-[#E2E8F5]/40 focus:outline-none focus:ring-2 focus:ring-[#42D8D5]"
            >
              <UserCheck className="w-4 h-4 text-[#FF873B]" />
              <span>{t.hero.secondaryBtn}</span>
            </button>
          </div>

          {/* Compact Personal Banner / Portrait Slot */}
          <div className="pt-2">
            <PersonalPortrait />
          </div>
        </div>

        {/* Right Column: ~44% width (5 of 12 columns) - 3D Radiology Scene */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <Hero3DScanner />
        </div>
      </div>
    </section>
  );
};
