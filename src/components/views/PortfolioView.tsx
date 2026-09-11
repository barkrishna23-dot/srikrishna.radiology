import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PortfolioProject } from '../../types';
import {
  Briefcase,
  Filter,
  Info,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';

export const PortfolioView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedFilter === 'all'
      ? t.portfolio.projects
      : t.portfolio.projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="w-full py-6 md:py-10 max-w-[1150px] mx-auto space-y-10 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>PORTFOLIO</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#42D8D5] border border-[#42D8D5]/30">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{t.portfolio.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.portfolio.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.portfolio.subtitle}
        </p>
      </div>

      {/* Transparent Honest Notice Banner */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
        <div className="w-12 h-12 rounded-xl bg-[#283E86] flex items-center justify-center text-[#42D8D5] shrink-0 border border-[#42D8D5]/30">
          <Info className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-white font-bengali">
            {t.portfolio.noticeTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#E2E8F5]/85 font-bengali leading-relaxed">
            {t.portfolio.noticeDesc}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#20284A] pb-4">
        <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#E2E8F5]/60 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>{t.portfolio.filterLabel}</span>
        </div>
        {t.portfolio.filters.map((filter) => {
          const isActive = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#283E86] text-white border border-[#42D8D5]/40 shadow-sm'
                  : 'bg-[#151D38] text-[#E2E8F5]/70 hover:text-white hover:bg-[#20284A] border border-[#20284A]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#151D38] border border-[#20284A] hover:border-[#42D8D5]/50 overflow-hidden shadow-lg transition-all flex flex-col justify-between group"
          >
            {/* Visual Header / Placeholder Art Frame */}
            <div className="relative h-44 bg-gradient-to-br from-[#0C1226] via-[#161F42] to-[#1F173B] p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md bg-[#0B1026]/80 text-[#42D8D5] text-xs font-mono-tech border border-[#20284A]">
                  {project.categoryLabel}
                </span>
                {project.isDemonstration && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#FF873B]/20 text-[#FF873B] border border-[#FF873B]/40">
                    {t.portfolio.demoBadge}
                  </span>
                )}
              </div>

              {/* Decorative Geometric Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all">
                <Sparkles className="w-24 h-24 text-[#42D8D5]" />
              </div>

              <div className="z-10 flex items-center justify-between text-xs font-mono-tech text-[#E2E8F5]/60">
                <span>{t.portfolio.yearLabel}: {project.year}</span>
                <span>{t.portfolio.roleLabel}: {project.role}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-[#42D8D5] transition-colors font-bengali">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E2E8F5]/80 font-bengali leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tools Tags */}
              <div className="pt-3 border-t border-[#20284A] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools?.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#0B1026] text-[11px] font-mono-tech text-[#E2E8F5]/80 border border-[#20284A]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#42D8D5]/40 text-xs font-mono-tech text-[#42D8D5] font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t.portfolio.viewPreview}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-[#070A18]/85 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project Preview"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#151D38] border border-[#42D8D5]/40 p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#0B1026] text-[#E2E8F5]/70 hover:text-white hover:bg-[#20284A] border border-[#20284A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-2.5 py-1 rounded bg-[#0B1026] text-xs font-mono-tech text-[#42D8D5] border border-[#20284A]">
                {activeModalProject.categoryLabel}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-bengali mt-3">
                {activeModalProject.title}
              </h2>
            </div>

            <p className="text-sm text-[#E2E8F5]/90 font-bengali leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0B1026]/70 border border-[#20284A] space-y-2 text-xs font-mono-tech">
              <div className="flex justify-between">
                <span className="text-[#E2E8F5]/60">{t.portfolio.roleLabel}:</span>
                <span className="text-white">{activeModalProject.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E2E8F5]/60">{t.portfolio.yearLabel}:</span>
                <span className="text-white">{activeModalProject.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E2E8F5]/60">{t.portfolio.statusLabel}:</span>
                <span className="text-[#FF873B]">{t.portfolio.statusValue}</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#283E86] hover:bg-[#3451b0] text-white font-semibold text-sm transition-all"
              >
                {t.portfolio.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
