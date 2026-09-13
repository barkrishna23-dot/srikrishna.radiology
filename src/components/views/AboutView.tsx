import React, { useState } from 'react';
import { siteConfig } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';
import {
  User,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Globe,
  MapPin,
  Calendar,
  Building,
  ShieldCheck,
} from 'lucide-react';

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-white font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const AboutView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'experience' | 'education'>('bio');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="w-full py-6 md:py-10 max-w-[1100px] mx-auto space-y-10 animate-fade-in">
      {/* Top Breadcrumb / Navigation indicator */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>ABOUT</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#42D8D5] border border-[#42D8D5]/30">
          <User className="w-3.5 h-3.5" />
          <span>{t.about.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.about.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.about.subtitle}
        </p>
      </div>

      {/* Accessible Tabs Header */}
      <div
        role="tablist"
        aria-label="About Sections"
        className="flex items-center gap-2 border-b border-[#20284A] pb-3"
      >
        <button
          type="button"
          role="tab"
          id="tab-bio"
          aria-selected={activeTab === 'bio'}
          aria-controls="panel-bio"
          onClick={() => setActiveTab('bio')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeTab === 'bio'
              ? 'bg-[#283E86] text-white border border-[#42D8D5]/50 shadow-md'
              : 'text-[#E2E8F5]/70 hover:text-white hover:bg-[#151D38]'
          }`}
        >
          <User className="w-4 h-4 text-[#42D8D5]" />
          <span>{t.about.tabs.bio}</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-experience"
          aria-selected={activeTab === 'experience'}
          aria-controls="panel-experience"
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeTab === 'experience'
              ? 'bg-[#283E86] text-white border border-[#42D8D5]/50 shadow-md'
              : 'text-[#E2E8F5]/70 hover:text-white hover:bg-[#151D38]'
          }`}
        >
          <Briefcase className="w-4 h-4 text-[#FF873B]" />
          <span>{t.about.tabs.experience}</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-education"
          aria-selected={activeTab === 'education'}
          aria-controls="panel-education"
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeTab === 'education'
              ? 'bg-[#283E86] text-white border border-[#42D8D5]/50 shadow-md'
              : 'text-[#E2E8F5]/70 hover:text-white hover:bg-[#151D38]'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-[#E44CA5]" />
          <span>{t.about.tabs.education}</span>
        </button>
      </div>

      {/* Tab Panels */}
      {/* Panel 1: Bio */}
      {activeTab === 'bio' && (
        <div
          role="tabpanel"
          id="panel-bio"
          aria-labelledby="tab-bio"
          className="space-y-8 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left side text */}
            <div className="md:col-span-8 space-y-6">
              <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-lg">
                {t.about.bioSections && t.about.bioSections.length > 0 ? (
                  t.about.bioSections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className={`space-y-3.5 ${
                        sIdx > 0 ? 'pt-6 border-t border-[#20284A]' : ''
                      }`}
                    >
                      <h2 className="text-xl sm:text-2xl slogan-text">
                        {section.title}
                      </h2>
                      <div className="space-y-3">
                        {section.paragraphs.map((para, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-base text-[#E2E8F5]/90 leading-relaxed font-bengali"
                          >
                            {renderFormattedText(para)}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <h2 className="text-xl sm:text-2xl slogan-text">
                      {t.about.bioTitle}
                    </h2>
                    <p className="text-base text-[#E2E8F5]/90 leading-relaxed font-bengali">
                      {renderFormattedText(t.about.bioP1)}
                    </p>
                    <p className="text-base text-[#E2E8F5]/90 leading-relaxed font-bengali">
                      {renderFormattedText(t.about.bioP2)}
                    </p>
                  </>
                )}
              </div>

              {/* Languages & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#151D38] border border-[#20284A] p-5">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5] mb-2">
                    <Globe className="w-4 h-4" />
                    <span>{t.about.langTitle}</span>
                  </div>
                  <p className="text-white font-semibold text-base mb-1">
                    {t.about.langValue}
                  </p>
                  <p className="text-xs text-[#E2E8F5]/70 font-bengali">
                    {t.about.langDesc}
                  </p>
                </div>

                <div className="rounded-xl bg-[#151D38] border border-[#20284A] p-5">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FF873B] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{t.about.originTitle}</span>
                  </div>
                  <p className="text-white font-semibold text-base mb-1">
                    {t.about.originValue}
                  </p>
                  <p className="text-xs text-[#E2E8F5]/70 font-bengali">
                    {t.about.originDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side summary card */}
            <div className="md:col-span-4 space-y-4">
              <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#283E86] flex items-center justify-center text-white font-bold text-lg font-mono-tech border border-[#42D8D5]/40">
                    SK
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {siteConfig.ownerName}
                    </h3>
                    <span className="text-xs text-[#42D8D5] font-mono-tech">
                      {siteConfig.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-[#20284A] text-xs font-mono-tech text-[#E2E8F5]/80">
                  <div className="flex justify-between py-1 border-b border-[#20284A]/40">
                    <span className="text-[#E2E8F5]/60">MODALITIES:</span>
                    <span className="text-white">X-Ray, CT, MRI, PACS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#20284A]/40">
                    <span className="text-[#E2E8F5]/60">{t.about.statusLabel}</span>
                    <span className="text-[#42D8D5]">{t.about.statusActive}</span>
                  </div>
                </div>
              </div>

              {/* Personal Disclosure Section (Initially Collapsed) */}
              <div className="rounded-2xl bg-[#151D38] border border-[#20284A] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  aria-expanded={isDetailsOpen}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-[#20284A]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#42D8D5]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#42D8D5]" />
                    <span className="text-sm font-semibold text-white font-bengali">
                      {t.about.disclosureBtn}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#42D8D5] transition-transform duration-200 ${
                      isDetailsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isDetailsOpen && (
                  <div className="px-4 pb-5 pt-1 space-y-3 border-t border-[#20284A] bg-[#0B1026]/40 text-xs font-mono-tech">
                    <div>
                      <span className="text-[#E2E8F5]/60 block mb-0.5">{t.about.fatherLabel}</span>
                      <span className="text-white font-semibold">{siteConfig.fatherName}</span>
                    </div>
                    <div>
                      <span className="text-[#E2E8F5]/60 block mb-0.5">{t.about.addressLabel}</span>
                      <address className="not-italic text-[#E2E8F5]/90 space-y-0.5 leading-relaxed">
                        <div>{siteConfig.ownerName}</div>
                        <div>Village & P.O.: {siteConfig.address.village}</div>
                        <div>P.S.: {siteConfig.address.policeStation}</div>
                        <div>District: {siteConfig.address.district}</div>
                        <div>{siteConfig.address.state}, {siteConfig.address.country} — PIN: {siteConfig.address.postalCode}</div>
                      </address>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panel 2: Work Experience */}
      {activeTab === 'experience' && (
        <div
          role="tabpanel"
          id="panel-experience"
          aria-labelledby="tab-experience"
          className="space-y-6 animate-fade-in"
        >
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#20284A] space-y-8">
            {t.about.timeline.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B1026] border-2 border-[#42D8D5] group-hover:scale-125 transition-transform" />

                <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-3 shadow-lg hover:border-[#42D8D5]/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white font-bengali">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1026] text-xs font-mono-tech text-[#42D8D5] border border-[#20284A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#FF873B]">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" />
                      {item.organization}
                    </span>
                    <span className="flex items-center gap-1 text-[#E2E8F5]/60">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-[#E2E8F5]/85 leading-relaxed font-bengali">
                    {item.description}
                  </p>

                  {item.statusNote && (
                    <div className="pt-2 text-xs font-mono-tech text-[#E2E8F5]/60 bg-[#0B1026]/40 p-2.5 rounded-lg border border-[#20284A]/60">
                      <strong>{t.about.sourceNote}</strong> {item.statusNote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Panel 3: Education */}
      {activeTab === 'education' && (
        <div
          role="tabpanel"
          id="panel-education"
          aria-labelledby="tab-education"
          className="space-y-6 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-4 shadow-lg hover:border-[#42D8D5]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1026] flex items-center justify-center text-[#E44CA5] border border-[#20284A]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0B1026] text-xs font-mono-tech text-[#42D8D5] border border-[#20284A]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-bengali mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-mono-tech text-[#FF873B] mb-3">
                    {edu.institution} • {edu.location}
                  </p>

                  {edu.status && (
                    <div className="inline-block mb-3 px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-[#FF873B]/10 text-[#FF873B] border border-[#FF873B]/30">
                      {edu.status}
                    </div>
                  )}

                  <ul className="space-y-1.5 pt-2 border-t border-[#20284A]/60">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-[#E2E8F5]/85 flex items-start gap-2 font-bengali">
                        <span className="text-[#42D8D5] mt-1 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
