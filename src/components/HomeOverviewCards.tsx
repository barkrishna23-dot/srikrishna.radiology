import React from 'react';
import { AppView } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  User,
  Activity,
  Sparkles,
  Briefcase,
  TrendingUp,
  Mail,
  ArrowRight,
} from 'lucide-react';

interface HomeOverviewCardsProps {
  onNavigate: (view: AppView) => void;
}

export const HomeOverviewCards: React.FC<HomeOverviewCardsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'about':
        return <User className="w-6 h-6 text-[#42D8D5]" />;
      case 'radiology':
        return <Activity className="w-6 h-6 text-[#FF873B]" />;
      case 'creative':
        return <Sparkles className="w-6 h-6 text-[#E44CA5]" />;
      case 'portfolio':
        return <Briefcase className="w-6 h-6 text-[#42D8D5]" />;
      case 'market-learning':
        return <TrendingUp className="w-6 h-6 text-[#FACC15]" />;
      case 'contact':
        return <Mail className="w-6 h-6 text-[#38BDF8]" />;
      default:
        return <ArrowRight className="w-6 h-6 text-[#42D8D5]" />;
    }
  };

  return (
    <section id="work-domains" className="w-full pt-4 pb-16" aria-label="Work Domains Overview">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5] uppercase tracking-wider mb-2">
          <span className="w-6 h-[1px] bg-[#42D8D5]" />
          <span>{t.homeCards.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-bengali">
          {t.homeCards.heading}
        </h2>
        <p className="text-base text-[#E2E8F5]/85 leading-relaxed font-bengali">
          {t.homeCards.description}
        </p>
      </div>

      {/* 6 Category Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.homeCards.cards.map((card) => (
          <div
            key={card.id}
            onClick={() => onNavigate(card.destination as AppView)}
            className="group relative rounded-2xl bg-[#151D38] hover:bg-[#20284A] border border-[#20284A] hover:border-[#42D8D5]/50 p-6 shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate(card.destination as AppView);
              }
            }}
          >
            {/* Top row: Icon + arrow indicator */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B1026] border border-[#20284A] flex items-center justify-center group-hover:border-[#42D8D5]/40 transition-colors">
                  {getIcon(card.id)}
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#0B1026]/60 flex items-center justify-center text-[#E2E8F5]/50 group-hover:text-[#42D8D5] group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-2">
                <span className="text-xs font-mono-tech text-[#E2E8F5]/60 tracking-wider">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#42D8D5] transition-colors font-bengali">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#E2E8F5]/80 font-bengali leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom active hint */}
            <div className="pt-4 mt-4 border-t border-[#20284A]/60 flex items-center gap-1.5 text-xs font-mono-tech text-[#42D8D5] group-hover:text-[#5EEAD4] font-medium">
              <span>{t.homeCards.viewDetails}</span>
              <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
