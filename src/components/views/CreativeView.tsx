import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Camera,
  Video,
  Palette,
  Code,
  Sparkles,
  Clapperboard,
  TrendingUp,
  Wrench,
  Target,
  ArrowRight,
} from 'lucide-react';

interface CreativeViewProps {
  onNavigatePortfolio: () => void;
}

export const CreativeView: React.FC<CreativeViewProps> = ({ onNavigatePortfolio }) => {
  const { t } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('photography');

  const selectedCategory =
    t.creative.categories.find((c) => c.id === activeCategoryId) || t.creative.categories[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'photography':
        return <Camera className="w-5 h-5 text-[#42D8D5]" />;
      case 'videography':
        return <Video className="w-5 h-5 text-[#FF873B]" />;
      case 'graphic-design':
        return <Palette className="w-5 h-5 text-[#E44CA5]" />;
      case 'web-development':
        return <Code className="w-5 h-5 text-[#42D8D5]" />;
      case 'ai-tools':
        return <Sparkles className="w-5 h-5 text-[#FACC15]" />;
      case 'animation-3d':
        return <Clapperboard className="w-5 h-5 text-[#FF6B4A]" />;
      case 'market-learning':
        return <TrendingUp className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#42D8D5]" />;
    }
  };

  return (
    <div className="w-full py-6 md:py-10 max-w-[1150px] mx-auto space-y-10 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>CREATIVE</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#E44CA5] border border-[#E44CA5]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.creative.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.creative.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.creative.subtitle}
        </p>
      </div>

      {/* 7 Creative Categories Switcher Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {t.creative.categories.map((cat) => {
          const isActive = cat.id === selectedCategory.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryId(cat.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-[#1C254B] border-[#42D8D5] shadow-lg shadow-[#42D8D5]/10'
                  : 'bg-[#151D38] border-[#20284A] hover:bg-[#20284A] text-[#E2E8F5]/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#0B1026] flex items-center justify-center border border-[#20284A]">
                  {getCategoryIcon(cat.id)}
                </div>
                {isActive && <div className="w-2 h-2 rounded-full bg-[#42D8D5]" />}
              </div>
              <div>
                <span className="text-xs font-mono-tech text-[#E2E8F5]/60 block mb-0.5">
                  {cat.name}
                </span>
                <span className="text-sm font-bold text-white font-bengali">
                  {cat.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Creative Category Detail Card */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#20284A]">
          <div>
            <span className="text-xs font-mono-tech text-[#42D8D5] uppercase tracking-wider block mb-1">
              {t.creative.spotlight}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-bengali">
              {selectedCategory.title} ({selectedCategory.name})
            </h2>
            <p className="text-base text-[#FF873B] font-bengali mt-1">
              &ldquo;{selectedCategory.summary}&rdquo;
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigatePortfolio}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#283E86] hover:bg-[#324db0] text-white text-xs font-mono-tech font-semibold transition-all border border-[#42D8D5]/30"
          >
            <span>{t.creative.viewPortfolio}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#42D8D5]" />
          </button>
        </div>

        {/* Detailed description */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-bengali">
            {t.creative.approachTitle}
          </h3>
          <p className="text-base text-[#E2E8F5]/90 font-bengali leading-relaxed">
            {selectedCategory.detailedDescription}
          </p>
        </div>

        {/* Tools and Areas of Focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#20284A]">
          {/* Tools & Workflow */}
          <div className="p-5 rounded-xl bg-[#0B1026]/60 border border-[#20284A] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
              <Wrench className="w-4 h-4" />
              <span>{t.creative.toolsTitle}</span>
            </div>
            <ul className="space-y-2">
              {selectedCategory.tools.map((tool, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white font-mono-tech">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#42D8D5]" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Focus */}
          <div className="p-5 rounded-xl bg-[#0B1026]/60 border border-[#20284A] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FF873B]">
              <Target className="w-4 h-4" />
              <span>{t.creative.focusTitle}</span>
            </div>
            <ul className="space-y-2">
              {selectedCategory.areasOfFocus.map((focus, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white font-bengali">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF873B]" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
