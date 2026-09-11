import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  TrendingUp,
  BarChart3,
  ShieldAlert,
  BookOpen,
  LineChart,
} from 'lucide-react';

export const MarketLearningView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full py-6 md:py-10 max-w-[1100px] mx-auto space-y-10 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>MARKET LEARNING</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#FACC15] border border-[#FACC15]/30">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{t.market.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.market.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.market.subtitle}
        </p>
      </div>

      {/* Honest Educational Disclaimer */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 flex items-start gap-4 shadow-lg">
        <ShieldAlert className="w-6 h-6 text-[#FF873B] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm font-bengali text-[#E2E8F5]/85 leading-relaxed">
          <strong className="text-white block font-sans">{t.market.disclaimerTitle}</strong>
          {t.market.disclaimerBody}
        </div>
      </div>

      {/* Visual Chart Concept Frame */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#20284A]">
          <div className="flex items-center gap-2">
            <LineChart className="w-5 h-5 text-[#42D8D5]" />
            <h2 className="text-lg sm:text-xl font-bold text-white font-bengali">
              {t.market.chartTitle}
            </h2>
          </div>
          <span className="px-3 py-1 rounded-lg bg-[#0B1026] text-xs font-mono-tech text-[#42D8D5] border border-[#20284A]">
            {t.market.chartBadge}
          </span>
        </div>

        {/* Visual Simulated SVG Chart */}
        <div className="h-48 sm:h-64 w-full bg-[#0B1026] rounded-xl border border-[#20284A] p-4 flex items-end justify-between relative overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-scan-grid opacity-20 pointer-events-none" />

          {/* Candle group */}
          <div className="w-full h-full flex items-end justify-around relative z-10 pt-6">
            {/* Candle 1 (Green) */}
            <div className="flex flex-col items-center h-[40%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#42D8D5]" />
              <div className="w-4 sm:w-6 h-12 bg-[#42D8D5] rounded-sm -my-6 shadow-sm" />
            </div>

            {/* Candle 2 (Green) */}
            <div className="flex flex-col items-center h-[60%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#42D8D5]" />
              <div className="w-4 sm:w-6 h-16 bg-[#42D8D5] rounded-sm -my-8 shadow-sm" />
            </div>

            {/* Candle 3 (Red) */}
            <div className="flex flex-col items-center h-[55%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#FF873B]" />
              <div className="w-4 sm:w-6 h-10 bg-[#FF873B] rounded-sm -my-5 shadow-sm" />
            </div>

            {/* Candle 4 (Green) */}
            <div className="flex flex-col items-center h-[75%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#42D8D5]" />
              <div className="w-4 sm:w-6 h-20 bg-[#42D8D5] rounded-sm -my-10 shadow-sm" />
            </div>

            {/* Candle 5 (Red) */}
            <div className="flex flex-col items-center h-[65%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#FF873B]" />
              <div className="w-4 sm:w-6 h-12 bg-[#FF873B] rounded-sm -my-6 shadow-sm" />
            </div>

            {/* Candle 6 (Green breakout) */}
            <div className="flex flex-col items-center h-[90%] justify-end group cursor-pointer">
              <div className="w-[2px] h-full bg-[#42D8D5]" />
              <div className="w-4 sm:w-6 h-24 bg-[#42D8D5] rounded-sm -my-12 shadow-sm" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono-tech text-[#E2E8F5]/60 pt-1">
          <span>{t.market.support}</span>
          <span>{t.market.discipline}</span>
          <span>{t.market.resistance}</span>
        </div>
      </div>

      {/* 3 Core Pillars of Market Learning */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.market.pillars.map((pillar, idx) => {
          const icons = [
            <BarChart3 key="1" className="w-5 h-5 text-[#42D8D5]" />,
            <ShieldAlert key="2" className="w-5 h-5 text-[#FF873B]" />,
            <BookOpen key="3" className="w-5 h-5 text-[#E44CA5]" />,
          ];
          return (
            <div key={idx} className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#0B1026] flex items-center justify-center border border-[#20284A]">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-white font-bengali">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E2E8F5]/80 font-bengali leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
