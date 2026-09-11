import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react';

interface PrivacyViewProps {
  onNavigateHome: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigateHome }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full py-6 md:py-10 max-w-[900px] mx-auto space-y-8 animate-fade-in">
      {/* Back to Home */}
      <button
        type="button"
        onClick={onNavigateHome}
        className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#42D8D5] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.privacy.backBtn}</span>
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#42D8D5] border border-[#42D8D5]/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t.privacy.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-bengali">
          {t.privacy.heading}
        </h1>
        <p className="text-xs font-mono-tech text-[#E2E8F5]/60">
          {t.privacy.effectiveDate}
        </p>
      </div>

      {/* Sections */}
      <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-xl">
        {t.privacy.sections.map((section, idx) => (
          <div key={idx} className="space-y-2 pb-5 border-b border-[#20284A] last:border-b-0 last:pb-0">
            <h2 className="text-lg font-bold text-white font-bengali">
              {section.heading}
            </h2>
            <p className="text-sm text-[#E2E8F5]/85 leading-relaxed font-bengali">
              {section.body}
            </p>
          </div>
        ))}

        <div className="pt-4 flex items-center gap-2 text-xs font-mono-tech text-[#FF873B]">
          <Mail className="w-4 h-4" />
          <span>{t.privacy.contactEmail}</span>
        </div>
      </div>
    </div>
  );
};
