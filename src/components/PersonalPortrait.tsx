import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, FileText } from 'lucide-react';
import { siteConfig } from '../data/content';
import { CvModal } from './CvModal';

interface PersonalPortraitProps {
  className?: string;
  imageSrc?: string;
}

export const PersonalPortrait: React.FC<PersonalPortraitProps> = ({
  className = '',
  imageSrc,
}) => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(() => {
    if (imageSrc) return imageSrc;
    try {
      return localStorage.getItem('srikrishna_portrait_photo');
    } catch {
      return null;
    }
  });

  // Check for public image assets if none currently loaded
  useEffect(() => {
    if (!currentImage) {
      const testPaths = [
        '/krish pp.jpg',
        '/krish_pp.jpg',
        '/krish-pp.jpg',
        '/krish.jpg',
        '/profile.jpg',
      ];
      for (const path of testPaths) {
        const img = new Image();
        img.onload = () => {
          setCurrentImage(path);
          try {
            localStorage.setItem('srikrishna_portrait_photo', path);
          } catch {
            // ignore
          }
        };
        img.src = path;
      }
    }
  }, [currentImage]);

  return (
    <div
      id="personal-portrait-card"
      className={`golden-thin-card transition-all w-full max-w-[440px] mt-3.5 sm:mt-5 ${className}`}
    >
      <div className="relative w-full rounded-[14px] bg-[#12182F] p-3 sm:p-4 overflow-hidden shadow-xl border border-[#20284A]">
        {/* ID Card Lanyard Punch Slot */}
        <div className="flex justify-center -mt-1 mb-2">
          <div className="w-12 h-1.5 rounded-full bg-[#080D1D] border border-[#26325C] shadow-inner" />
        </div>

        {/* ID Card Top Header */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#20284A]/80 gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-[#42D8D5] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#42D8D5] shrink-0" />
            <span className="tracking-wider uppercase font-semibold">MEDICAL ID BADGE</span>
          </div>
          <span className="text-[10px] font-mono-tech text-[#FF873B] tracking-wider px-1.5 py-0.5 rounded bg-[#FF873B]/10 border border-[#FF873B]/20 font-bold shrink-0">
            RSO ID :- 24-RSO-1243744
          </span>
        </div>

        {/* Card Body: Info on Left, Passport Photo on Right */}
        <div className="flex items-center justify-between gap-3">
          {/* Left details */}
          <div className="flex flex-col justify-center space-y-1 min-w-0 flex-1">
            <div>
              <span className="text-[9px] font-mono-tech text-[#E2E8F5]/50 tracking-wider block uppercase">
                Name of Professional
              </span>
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight tracking-tight truncate">
                {siteConfig.ownerName}
              </h3>
            </div>

            <div>
              <span className="text-[9px] font-mono-tech text-[#E2E8F5]/50 tracking-wider block uppercase">
                Department / Role
              </span>
              <p className="text-xs sm:text-[13px] text-[#42D8D5] font-semibold leading-tight">
                {siteConfig.role}
              </p>
              <p className="text-[10px] text-[#E2E8F5]/70 font-mono-tech">
                Medical Imaging & Radiodiagnosis
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#FF873B] pt-0.5">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{siteConfig.address.village}, {siteConfig.address.district}</span>
            </div>
          </div>

          {/* Right side portrait frame: sized like standard passport photo on ID badge */}
          <div
            title="Srikrishna Bar - Radiology Technologist"
            className="relative w-24 sm:w-28 h-28 sm:h-32 rounded-lg overflow-hidden border-2 border-[#42D8D5]/50 bg-[#00AEEF] shrink-0 shadow-md select-none"
          >
            {currentImage ? (
              /* Real portrait photo */
              <img
                src={currentImage}
                alt="Srikrishna Bar - Radiology Technologist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top pointer-events-none"
              />
            ) : (
              /* Fallback SVG representation matching krish pp.jpg */
              <svg
                viewBox="0 0 160 200"
                className="w-full h-full object-cover select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Vibrant cyan blue background matching photo */}
                <rect width="160" height="200" fill="#00AEEF" />

                {/* White Shirt Shoulder & Torso */}
                <path
                  d="M -10 200 L 32 142 L 68 152 L 92 152 L 128 142 L 170 200 Z"
                  fill="#FFFFFF"
                />
                <path d="M 32 142 L 10 200" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 128 142 L 150 200" stroke="#E2E8F0" strokeWidth="1.5" />

                {/* White Collar Flaps */}
                <path
                  d="M 50 140 L 76 168 L 78 144 L 56 136 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                <path
                  d="M 110 140 L 84 168 L 82 144 L 104 136 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />

                {/* Burgundy Necktie with micro-dots */}
                <path d="M 74 152 L 86 152 L 90 200 L 70 200 Z" fill="#7A1C2E" />
                <path d="M 75 144 L 85 144 L 87 155 L 73 155 Z" fill="#8B1E3F" />

                <g fill="#FFFFFF" opacity="0.65">
                  <circle cx="80" cy="160" r="0.9" />
                  <circle cx="76" cy="166" r="0.9" />
                  <circle cx="84" cy="166" r="0.9" />
                  <circle cx="80" cy="172" r="0.9" />
                  <circle cx="75" cy="178" r="0.9" />
                  <circle cx="85" cy="178" r="0.9" />
                  <circle cx="80" cy="184" r="0.9" />
                  <circle cx="75" cy="190" r="0.9" />
                  <circle cx="85" cy="190" r="0.9" />
                  <circle cx="80" cy="196" r="0.9" />
                </g>
                <g fill="#42D8D5" opacity="0.45">
                  <circle cx="80" cy="166" r="0.8" />
                  <circle cx="76" cy="172" r="0.8" />
                  <circle cx="84" cy="172" r="0.8" />
                  <circle cx="80" cy="178" r="0.8" />
                  <circle cx="75" cy="184" r="0.8" />
                  <circle cx="85" cy="184" r="0.8" />
                  <circle cx="80" cy="190" r="0.8" />
                </g>

                {/* Neck */}
                <path d="M 66 110 L 94 110 L 98 146 L 62 146 Z" fill="#B97852" />
                <path d="M 66 122 C 74 135 86 135 94 122 Z" fill="#9D5E39" opacity="0.45" />

                {/* Head / Face */}
                <ellipse cx="80" cy="86" rx="30" ry="36" fill="#C4845E" />
                <ellipse cx="68" cy="90" rx="9" ry="7" fill="#CF8F69" opacity="0.6" />
                <ellipse cx="92" cy="90" rx="9" ry="7" fill="#CF8F69" opacity="0.6" />

                {/* Ears */}
                <path d="M 49 84 C 47 78, 48 94, 51 98 Z" fill="#B5754F" />
                <path d="M 111 84 C 113 78, 112 94, 109 98 Z" fill="#B5754F" />

                {/* Hair - side-swept style matching photo */}
                <path
                  d="M 48 80 C 47 50, 66 42, 80 42 C 98 42, 113 52, 111 80 C 105 58, 96 52, 78 54 C 62 56, 52 68, 48 80 Z"
                  fill="#171515"
                />
                <path d="M 62 48 C 76 44, 94 48, 106 60" stroke="#292524" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 52 74 C 54 62, 64 54, 76 52" stroke="#292524" strokeWidth="2" strokeLinecap="round" />

                {/* Eyebrows */}
                <path d="M 61 74 Q 70 70 76 74" stroke="#1F1D1D" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 84 74 Q 90 70 99 74" stroke="#1F1D1D" strokeWidth="2.8" strokeLinecap="round" />

                {/* Eyes */}
                <ellipse cx="69" cy="80" rx="4" ry="2.6" fill="#1C1917" />
                <ellipse cx="91" cy="80" rx="4" ry="2.6" fill="#1C1917" />
                <circle cx="70" cy="79" r="1" fill="#FFFFFF" />
                <circle cx="92" cy="79" r="1" fill="#FFFFFF" />

                {/* Nose */}
                <path d="M 80 79 L 77 92 L 83 93" stroke="#9E5D39" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 74 94 Q 80 97 86 94" stroke="#9E5D39" strokeWidth="1.6" strokeLinecap="round" fill="none" />

                {/* Mustache */}
                <path d="M 72 99 Q 80 97 88 99" stroke="#231F20" strokeWidth="2.4" strokeLinecap="round" />

                {/* Smile / Lips */}
                <path d="M 73 104 Q 80 109 87 104" stroke="#882C18" strokeWidth="2.2" strokeLinecap="round" fill="#9F3622" />

                {/* Chin goatee stubble */}
                <ellipse cx="80" cy="114" rx="6" ry="2.5" fill="#231F20" opacity="0.65" />
              </svg>
            )}
          </div>
        </div>

        {/* ID Card Footer with security strip & barcode */}
        <div className="flex items-center justify-between pt-2 mt-2.5 border-t border-[#20284A]/80 text-[10px] font-mono-tech text-[#E2E8F5]/50">
          <span className="tracking-wider">VERIFIED CLINICAL STAFF</span>
          {/* Simulated barcode */}
          <div className="flex items-center gap-[2px] opacity-40 h-2.5" aria-hidden="true">
            <div className="w-[1.5px] h-full bg-white" />
            <div className="w-[3px] h-full bg-white" />
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[2px] h-full bg-white" />
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[3px] h-full bg-white" />
            <div className="w-[2px] h-full bg-white" />
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[2.5px] h-full bg-white" />
          </div>
          <span
            role="button"
            tabIndex={0}
            onClick={() => setIsCvOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsCvOpen(true);
              }
            }}
            title="সিভি দেখতে ক্লিক করুন (Protected View)"
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#42D8D5]/15 hover:bg-[#42D8D5]/25 border border-[#42D8D5]/40 hover:border-[#42D8D5] text-[#42D8D5] hover:text-white font-bold cursor-pointer transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-[#42D8D5]"
          >
            <FileText className="w-2.5 h-2.5" />
            <span>সিভি</span>
          </span>
        </div>
      </div>

      {/* Protected View-Only CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        portraitImage={currentImage}
      />
    </div>
  );
};
