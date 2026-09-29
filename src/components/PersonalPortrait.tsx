import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, MapPin, FileText, Camera } from 'lucide-react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);
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
        '/KRISHNA PICK.jpeg',
        '/KRISHNA%20PICK.jpeg',
        '/KRISHNA PICK.jpg',
        '/krishna_pick.jpeg',
        '/krishna-pick.jpeg',
        '/krishna.jpeg',
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setCurrentImage(result);
          try {
            localStorage.setItem('srikrishna_portrait_photo', result);
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        if (result) {
          setCurrentImage(result);
          try {
            localStorage.setItem('srikrishna_portrait_photo', result);
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      id="personal-portrait-card"
      className={`golden-thin-card transition-all w-full max-w-[440px] mt-3.5 sm:mt-5 ${className}`}
    >
      <div className="relative w-full rounded-[14px] bg-[#12182F] p-3 sm:p-4 overflow-hidden shadow-xl border border-[#20284A]">
        {/* Hidden File Input for Custom Portrait Photo */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          aria-label="Upload Portrait Photo"
          className="hidden"
          onChange={handleImageUpload}
        />

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
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            title="ছবি যুক্ত বা পরিবর্তন করতে ক্লিক করুন (বা KRISHNA PICK.jpeg ড্রপ করুন)"
            className="group relative w-24 sm:w-28 h-28 sm:h-32 rounded-lg overflow-hidden border-2 border-[#42D8D5]/60 hover:border-[#42D8D5] bg-[#00AEEF] shrink-0 shadow-md select-none cursor-pointer transition-all"
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
              /* High-fidelity Portrait Representation matching KRISHNA PICK.jpeg */
              <svg
                viewBox="0 0 160 200"
                className="w-full h-full object-cover select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Studio backdrop gradient */}
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00BAF2" />
                    <stop offset="45%" stopColor="#00A0E9" />
                    <stop offset="100%" stopColor="#0080D0" />
                  </linearGradient>
                  {/* Subtle skin gradient */}
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D2936E" />
                    <stop offset="100%" stopColor="#BA754E" />
                  </linearGradient>
                  {/* Necktie gradient */}
                  <linearGradient id="tieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8A1830" />
                    <stop offset="60%" stopColor="#701224" />
                    <stop offset="100%" stopColor="#550A18" />
                  </linearGradient>
                  {/* Shirt shadow */}
                  <linearGradient id="shirtShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                </defs>

                {/* Vibrant cyan blue background matching photo */}
                <rect width="160" height="200" fill="url(#bgGrad)" />

                {/* Subtle studio glow */}
                <circle cx="80" cy="85" r="70" fill="#38BDF8" opacity="0.25" />

                {/* White Shirt Shoulder & Torso */}
                <path
                  d="M -10 200 L 30 140 L 68 150 L 92 150 L 130 140 L 170 200 Z"
                  fill="url(#shirtShadow)"
                />
                <path d="M 30 140 L 8 200" stroke="#CBD5E1" strokeWidth="1.5" />
                <path d="M 130 140 L 152 200" stroke="#CBD5E1" strokeWidth="1.5" />

                {/* White Collar Flaps with 3D bevel */}
                <path
                  d="M 48 138 L 76 168 L 78 142 L 56 134 Z"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="1.2"
                />
                <path
                  d="M 112 138 L 84 168 L 82 142 L 104 134 Z"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="1.2"
                />

                {/* Burgundy Necktie with micro-dots */}
                <path d="M 74 150 L 86 150 L 91 200 L 69 200 Z" fill="url(#tieGrad)" />
                <path d="M 74 142 L 86 142 L 88 153 L 72 153 Z" fill="#911C34" />

                {/* Fine Silk Tie Micro-dots Pattern */}
                <g fill="#FFFFFF" opacity="0.8">
                  <circle cx="80" cy="158" r="0.9" />
                  <circle cx="76" cy="164" r="0.9" />
                  <circle cx="84" cy="164" r="0.9" />
                  <circle cx="80" cy="170" r="0.9" />
                  <circle cx="75" cy="176" r="0.9" />
                  <circle cx="85" cy="176" r="0.9" />
                  <circle cx="80" cy="182" r="0.9" />
                  <circle cx="74" cy="188" r="0.9" />
                  <circle cx="86" cy="188" r="0.9" />
                  <circle cx="80" cy="194" r="0.9" />
                </g>
                <g fill="#60A5FA" opacity="0.5">
                  <circle cx="80" cy="164" r="0.8" />
                  <circle cx="76" cy="170" r="0.8" />
                  <circle cx="84" cy="170" r="0.8" />
                  <circle cx="80" cy="176" r="0.8" />
                  <circle cx="75" cy="182" r="0.8" />
                  <circle cx="85" cy="182" r="0.8" />
                  <circle cx="80" cy="188" r="0.8" />
                </g>

                {/* Neck & Neck Shadow */}
                <path d="M 65 108 L 95 108 L 98 144 L 62 144 Z" fill="url(#skinGrad)" />
                <path d="M 64 122 C 72 136 88 136 96 122 Z" fill="#9A5936" opacity="0.4" />

                {/* Head / Face */}
                <ellipse cx="80" cy="84" rx="30" ry="37" fill="url(#skinGrad)" />
                {/* Cheeks soft contour */}
                <ellipse cx="66" cy="88" rx="8" ry="6" fill="#DC9C78" opacity="0.5" />
                <ellipse cx="94" cy="88" rx="8" ry="6" fill="#DC9C78" opacity="0.5" />

                {/* Ears */}
                <path d="M 49 82 C 46 76, 47 92, 51 96 Z" fill="#B7734E" />
                <path d="M 111 82 C 114 76, 113 92, 109 96 Z" fill="#B7734E" />

                {/* Hair - Neat side-swept parting matching KRISHNA PICK.jpeg */}
                <path
                  d="M 48 78 C 47 48, 65 40, 80 40 C 98 40, 114 50, 112 78 C 105 56, 96 50, 78 52 C 62 54, 52 66, 48 78 Z"
                  fill="#121111"
                />
                <path d="M 60 46 C 74 42, 92 46, 104 58" stroke="#262323" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 52 72 C 54 60, 64 52, 76 50" stroke="#262323" strokeWidth="2" strokeLinecap="round" />

                {/* Eyebrows */}
                <path d="M 60 72 Q 69 68 76 72" stroke="#1A1818" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 84 72 Q 91 68 100 72" stroke="#1A1818" strokeWidth="2.8" strokeLinecap="round" />

                {/* Eyes */}
                <ellipse cx="68" cy="78" rx="4.2" ry="2.8" fill="#141212" />
                <ellipse cx="92" cy="78" rx="4.2" ry="2.8" fill="#141212" />
                {/* White Catchlights */}
                <circle cx="69" cy="77" r="1.1" fill="#FFFFFF" />
                <circle cx="93" cy="77" r="1.1" fill="#FFFFFF" />

                {/* Nose bridge and tip */}
                <path d="M 80 77 L 77 90 L 83 91" stroke="#9A5A37" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 74 92 Q 80 95 86 92" stroke="#9A5A37" strokeWidth="1.6" strokeLinecap="round" fill="none" />

                {/* Mustache matching photo */}
                <path d="M 71 97 Q 80 95 89 97" stroke="#1C1819" strokeWidth="2.6" strokeLinecap="round" />

                {/* Polite, confident smile */}
                <path d="M 73 102 Q 80 107 87 102" stroke="#8E2D1A" strokeWidth="2.2" strokeLinecap="round" fill="#A83924" />

                {/* Chin goatee stubble */}
                <ellipse cx="80" cy="112" rx="6" ry="2.5" fill="#1C1819" opacity="0.6" />
              </svg>
            )}

            {/* Hover overlay hint to click or drop photo */}
            <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-white text-[11px] font-medium p-1 text-center backdrop-blur-[1px]">
              <Camera className="w-5 h-5 mb-1 text-[#42D8D5]" />
              <span className="leading-tight text-white font-semibold">ছবি আপলোড</span>
              <span className="text-[9px] text-[#42D8D5]">KRISHNA PICK</span>
            </div>

            {/* Subtle camera badge indicator */}
            {!currentImage && (
              <div
                className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-xs p-1 rounded-md border border-white/20 text-[#42D8D5] shadow-sm pointer-events-none"
                title="ছবি সিলেক্ট করুন"
              >
                <Camera className="w-3 h-3" />
              </div>
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
