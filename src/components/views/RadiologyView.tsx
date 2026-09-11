import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Activity,
  Shield,
  Layers,
  Cpu,
  CheckCircle2,
  Scan,
} from 'lucide-react';

export const RadiologyView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedModalityId, setSelectedModalityId] = useState('mri');

  const selectedModality =
    t.radiology.modalities.find((m) => m.id === selectedModalityId) ||
    t.radiology.modalities[0];

  return (
    <div className="w-full py-6 md:py-10 max-w-[1150px] mx-auto space-y-10 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>RADIOLOGY</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#42D8D5] border border-[#42D8D5]/30">
          <Activity className="w-3.5 h-3.5" />
          <span>{t.radiology.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.radiology.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.radiology.subtitle}
        </p>
      </div>

      {/* Modalities Selection Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {t.radiology.modalities.map((modality) => {
          const isSelected = selectedModality.id === modality.id;
          return (
            <button
              key={modality.id}
              type="button"
              onClick={() => setSelectedModalityId(modality.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1C254B] border-[#42D8D5] shadow-lg shadow-[#42D8D5]/10'
                  : 'bg-[#151D38] border-[#20284A] hover:bg-[#20284A] text-[#E2E8F5]/70'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-tech font-bold text-[#42D8D5]">
                  {modality.id.toUpperCase()}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#42D8D5]" />
                )}
              </div>
              <span className="text-sm font-bold text-white font-bengali leading-snug">
                {modality.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Modality Detail Panel */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#20284A]">
          <div>
            <span className="text-xs font-mono-tech text-[#42D8D5] uppercase tracking-wider block mb-1">
              {t.radiology.workflowBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-bengali">
              {selectedModality.title}
            </h2>
            <p className="text-sm font-mono-tech text-[#FF873B] mt-0.5">
              {selectedModality.subTitle}
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-[#0B1026] border border-[#20284A] text-xs font-mono-tech text-[#42D8D5] flex items-center gap-2">
            <Scan className="w-4 h-4" />
            <span>{t.radiology.checklistTitle}</span>
          </div>
        </div>

        {/* Overview & Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-bengali flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#42D8D5]" />
              <span>{t.radiology.descTitle}</span>
            </h3>
            <p className="text-base text-[#E2E8F5]/90 leading-relaxed font-bengali">
              {selectedModality.description}
            </p>
            <div className="p-4 rounded-xl bg-[#0B1026]/70 border border-[#20284A] space-y-1.5">
              <span className="text-xs font-mono-tech text-[#FF873B] block">
                {t.radiology.scientificPrinciple}
              </span>
              <p className="text-sm text-[#E2E8F5]/85 font-bengali">
                {selectedModality.principles}
              </p>
            </div>
          </div>

          {/* Technologist Standard Workflows */}
          <div className="lg:col-span-5 rounded-xl bg-[#0B1026]/50 border border-[#20284A] p-5 space-y-3">
            <h3 className="text-sm font-mono-tech text-[#42D8D5] uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{t.radiology.checklistTitle}</span>
            </h3>
            <ul className="space-y-2.5">
              {selectedModality.keyWorkflows.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F5]/90 font-bengali">
                  <CheckCircle2 className="w-4 h-4 text-[#42D8D5] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Radiation Protection & Safety Callout Box */}
      <div className="rounded-2xl bg-gradient-to-r from-[#151D38] to-[#191535] border border-[#20284A] p-6 sm:p-8 space-y-4 shadow-lg">
        <div className="flex items-center gap-2.5 text-[#FF873B]">
          <Shield className="w-5 h-5" />
          <h3 className="text-xl font-bold text-white font-bengali">
            {t.radiology.alaraTitle}
          </h3>
        </div>
        <p className="text-sm sm:text-base text-[#E2E8F5]/85 font-bengali leading-relaxed">
          {t.radiology.alaraDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-[#0B1026] border border-[#20284A] text-xs font-mono-tech">
            <span className="text-[#42D8D5] block mb-1">{t.radiology.timeLabel}</span>
            <p className="text-[#E2E8F5]/70 font-bengali">{t.radiology.timeDesc}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B1026] border border-[#20284A] text-xs font-mono-tech">
            <span className="text-[#FF873B] block mb-1">{t.radiology.distLabel}</span>
            <p className="text-[#E2E8F5]/70 font-bengali">{t.radiology.distDesc}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B1026] border border-[#20284A] text-xs font-mono-tech">
            <span className="text-[#E44CA5] block mb-1">{t.radiology.shieldLabel}</span>
            <p className="text-[#E2E8F5]/70 font-bengali">{t.radiology.shieldDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
