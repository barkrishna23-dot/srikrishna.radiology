import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Activity,
  Layers,
  Cpu,
  CheckCircle2,
  Scan,
  ShieldCheck,
  FileCheck,
  Users,
  AlertTriangle,
  GraduationCap,
  Eye,
} from 'lucide-react';

export const RadiologyView: React.FC = () => {
  const { t, language } = useLanguage();
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
            <div className="rounded-2xl bg-[#0B1026]/75 border border-[#20284A] p-4 sm:p-5 space-y-3.5 shadow-xl">
              {selectedModality.id === 'mri' ? (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-[#20284A]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#42D8D5] animate-pulse" />
                      <h4 className={`text-base sm:text-lg font-bold text-white tracking-tight ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                        {language === 'bn' ? 'স্পেশাল কেস' : 'Special Cases'}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full bg-[#151D38] text-[#42D8D5] border border-[#42D8D5]/30">
                      13 Protocols
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      'MRI Brain — Epilepsy Protocol',
                      'MRI Brain — Stroke Protocol',
                      'MRI Brain Perfusion',
                      'MR Spectroscopy — MRS',
                      'MRI Brain — Functional Study',
                      'MRI Pituitary',
                      'MRI Brain + IAC / CP Angle',
                      'MRI Brain MRA + MRV',
                      'MR Abdominal Angiography',
                      'MR Fistulogram',
                      'MRI Both Brachial Plexuses',
                      'MRI Both Breasts',
                      'MR Lower lim Angiography',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-[#151D38]/50 hover:bg-[#151D38] border border-[#20284A] hover:border-[#42D8D5]/30 transition-all duration-200"
                      >
                        <span className="w-6 h-6 rounded-lg bg-[#42D8D5]/10 border border-[#42D8D5]/30 text-[#42D8D5] flex items-center justify-center text-xs font-mono-tech font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-1.5">
                  <span className="text-xs font-mono-tech text-[#FF873B] block">
                    {t.radiology.scientificPrinciple}
                  </span>
                  <p className="text-sm text-[#E2E8F5]/85 font-bengali">
                    {selectedModality.principles}
                  </p>
                </div>
              )}
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

      {/* Radiation Protection & RSO Framework Section */}
      <div id="section-rso" className="rounded-3xl bg-[#151D38] border border-[#20284A] p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#42D8D5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF873B]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header Block: Title, Badges & Document No */}
        <div className="space-y-4 border-b border-[#20284A] pb-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-tech bg-[#0B1026] text-[#42D8D5] border border-[#42D8D5]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#42D8D5]" />
              <span>{t.radiology.rso.badge}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#42D8D5]/10 border border-[#42D8D5]/40 text-xs font-mono-tech text-[#42D8D5]">
              <span className="w-2 h-2 rounded-full bg-[#42D8D5] animate-pulse" />
              <span>
                Document No.: <strong className="text-white font-bold tracking-wider">24-RSO-1243744</strong>
              </span>
            </div>
          </div>

          <div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {t.radiology.rso.heading}
            </h2>
            <p className={`text-sm sm:text-base text-[#FF873B] font-mono-tech mt-1.5 font-medium ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {t.radiology.rso.subHeading}
            </p>
          </div>

          {/* Context & Foundation Paragraphs */}
          <div className={`space-y-3 pt-2 text-[#E2E8F5]/90 text-sm sm:text-base leading-relaxed ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
            <p className="border-l-2 border-[#42D8D5] pl-4 bg-[#0B1026]/40 py-2 rounded-r-xl">
              {t.radiology.rso.introP1}
            </p>
            <p className="text-[#E2E8F5]/80 pl-4">
              {t.radiology.rso.introP2}
            </p>
          </div>
        </div>

        {/* 6 Key Responsibilities Grid */}
        <div className="space-y-5 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#42D8D5]" />
            <h3 className={`text-xl sm:text-2xl font-bold text-white tracking-tight ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {t.radiology.rso.responsibilitiesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.radiology.rso.responsibilities.map((item, idx) => {
              const icons = [Activity, Eye, FileCheck, GraduationCap, ShieldCheck, AlertTriangle];
              const ItemIcon = icons[idx % icons.length];
              const colorThemes = [
                {
                  iconBg: 'bg-[#42D8D5]/10 border-[#42D8D5]/30 text-[#42D8D5]',
                  numColor: 'text-[#42D8D5]',
                  tagBg: 'bg-[#42D8D5]/10 text-[#42D8D5] border-[#42D8D5]/20',
                  hoverBorder: 'hover:border-[#42D8D5]/60',
                },
                {
                  iconBg: 'bg-[#FF873B]/10 border-[#FF873B]/30 text-[#FF873B]',
                  numColor: 'text-[#FF873B]',
                  tagBg: 'bg-[#FF873B]/10 text-[#FF873B] border-[#FF873B]/20',
                  hoverBorder: 'hover:border-[#FF873B]/60',
                },
                {
                  iconBg: 'bg-[#E44CA5]/10 border-[#E44CA5]/30 text-[#E44CA5]',
                  numColor: 'text-[#E44CA5]',
                  tagBg: 'bg-[#E44CA5]/10 text-[#E44CA5] border-[#E44CA5]/20',
                  hoverBorder: 'hover:border-[#E44CA5]/60',
                },
                {
                  iconBg: 'bg-[#42D8D5]/10 border-[#42D8D5]/30 text-[#42D8D5]',
                  numColor: 'text-[#42D8D5]',
                  tagBg: 'bg-[#42D8D5]/10 text-[#42D8D5] border-[#42D8D5]/20',
                  hoverBorder: 'hover:border-[#42D8D5]/60',
                },
                {
                  iconBg: 'bg-[#FF873B]/10 border-[#FF873B]/30 text-[#FF873B]',
                  numColor: 'text-[#FF873B]',
                  tagBg: 'bg-[#FF873B]/10 text-[#FF873B] border-[#FF873B]/20',
                  hoverBorder: 'hover:border-[#FF873B]/60',
                },
                {
                  iconBg: 'bg-[#E44CA5]/10 border-[#E44CA5]/30 text-[#E44CA5]',
                  numColor: 'text-[#E44CA5]',
                  tagBg: 'bg-[#E44CA5]/10 text-[#E44CA5] border-[#E44CA5]/20',
                  hoverBorder: 'hover:border-[#E44CA5]/60',
                },
              ];
              const theme = colorThemes[idx % colorThemes.length];

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-[#0B1026]/80 border border-[#20284A] p-5 space-y-3.5 ${theme.hoverBorder} transition-all duration-300 shadow-md flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${theme.iconBg}`}>
                          <ItemIcon className="w-4.5 h-4.5" />
                        </div>
                        <span className={`text-xs font-mono-tech font-bold ${theme.numColor}`}>
                          {language === 'bn' ? `পয়েন্ট ${item.num}` : `Point ${item.num}`}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded-full border ${theme.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold text-white leading-snug pt-1 ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                      {item.title}
                    </h4>

                    <p className={`text-xs sm:text-sm text-[#E2E8F5]/80 leading-relaxed ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Collaborative Workplace Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#172147] to-[#121A38] border border-[#42D8D5]/30 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-[#0B1026] border border-[#42D8D5]/40 flex items-center justify-center text-[#42D8D5] shrink-0 shadow-inner">
            <Users className="w-6 h-6 text-[#42D8D5]" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#42D8D5]" />
              <h4 className={`text-base sm:text-lg font-bold text-white ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                {t.radiology.rso.collaborativeTitle}
              </h4>
            </div>
            <p className={`text-xs sm:text-sm text-[#E2E8F5]/85 leading-relaxed ${language === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {t.radiology.rso.collaborativeDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
