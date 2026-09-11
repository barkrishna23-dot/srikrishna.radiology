import React, { useEffect } from 'react';
import { X, Lock, Shield, Phone, Mail, MessageSquare } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  portraitImage?: string | null;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, portraitImage }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Block common print/save shortcuts
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's')) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae View"
      onContextMenu={(e) => e.preventDefault()}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md select-none overflow-y-auto"
    >
      {/* Container */}
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-[#0F172A] rounded-2xl border border-[#334155] shadow-2xl overflow-hidden my-auto"
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1E293B] border-b border-[#334155] text-white shrink-0">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="px-2.5 py-1 rounded-md bg-[#0284C7]/20 border border-[#38BDF8]/30 text-[#38BDF8] font-bold text-xs tracking-wider uppercase font-mono-tech">
              সিভি • CV
            </span>
            <span className="hidden sm:inline text-slate-300 text-xs">
              Srikrishna Bar — Curriculum Vitae
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>সুরক্ষিত ভিউয়ার (ডাউনলোড নিষ্ক্রিয়)</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            title="বন্ধ করুন (Close)"
            aria-label="Close CV Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable CV Document View */}
        <div
          className="relative overflow-y-auto p-3 sm:p-6 flex justify-center bg-[#0B0F19]"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Transparent protection shield layer: prevents right clicking, downloading or saving images */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            aria-hidden="true"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Actual 1-Page CV Document replication in pixel-precise high-fidelity */}
          <div
            id="cv-document-sheet"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className="relative w-full max-w-[800px] bg-white text-slate-900 rounded shadow-2xl overflow-hidden flex flex-col md:flex-row select-none"
            style={{ minHeight: '1050px' }}
          >
            {/* Watermark security overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-[0.035] select-none"
              aria-hidden="true"
            >
              <div className="rotate-[-35deg] text-6xl font-black tracking-widest text-slate-900">
                VIEW ONLY • CONFIDENTIAL
              </div>
            </div>

            {/* Left Column (Teal/Slate - approx 35% width) */}
            <div className="w-full md:w-[36%] bg-[#1A3845] text-white p-5 sm:p-6 flex flex-col space-y-6 shrink-0">
              {/* Circular Photo */}
              <div className="flex justify-center pt-2">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#00B4D8] bg-[#00AEEF] shadow-lg relative shrink-0">
                  {portraitImage ? (
                    <img
                      src={portraitImage}
                      alt="Srikrishna Bar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#00AEEF] to-[#0284C7] text-white p-2 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-1">
                        <span className="text-2xl font-bold">SK</span>
                      </div>
                      <span className="text-[11px] font-semibold">Srikrishna Bar</span>
                    </div>
                  )}
                </div>
              </div>

              {/* ABOUT ME */}
              <div>
                <div className="border border-[#00B4D8] py-1 px-3 mb-3 bg-[#0F2631]">
                  <h3 className="text-sm font-bold tracking-wider text-[#00B4D8] uppercase">
                    ABOUT ME
                  </h3>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans text-justify">
                  The obtain a position as a Radiology Technician to apply my academic knoledge &amp; clinical knowledge (MRI , CT SCAN , &amp; DIGITAL X-RAY ) and further to contribute as much as I can to Health care Services.
                </p>
              </div>

              {/* PERSONAL DETAILS */}
              <div>
                <div className="border border-[#00B4D8] py-1 px-3 mb-3 bg-[#0F2631]">
                  <h3 className="text-sm font-bold tracking-wider text-[#00B4D8] uppercase">
                    PERSONAL DETAILS
                  </h3>
                </div>
                <div className="text-xs text-slate-200 space-y-1 font-sans">
                  <p><span className="text-slate-400">Father Name:</span> Kashinath Bar</p>
                  <p><span className="text-slate-400">Village:</span> Palpur</p>
                  <p><span className="text-slate-400">PO:</span> Palpur</p>
                  <p><span className="text-slate-400">PS:</span> Gosaba</p>
                  <p><span className="text-slate-400">Dist:</span> South 24 (P.G.S)</p>
                  <p><span className="text-slate-400">PIN:</span> 743611</p>
                </div>
              </div>

              {/* HOBBIES */}
              <div>
                <div className="border border-[#00B4D8] py-1 px-3 mb-3 bg-[#0F2631]">
                  <h3 className="text-sm font-bold tracking-wider text-[#00B4D8] uppercase">
                    HOBBIES
                  </h3>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  Technical aptitude, such as volunteering at Health fairs, Taking photography. Sports - Cricket, Football, Swimming &amp; To plant a Tree. Helping the Poor.
                </p>
              </div>

              {/* Security note */}
              <div className="pt-4 mt-auto border-t border-[#00B4D8]/30 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Shield className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>Verified by Srikrishna Bar</span>
              </div>
            </div>

            {/* Right Column (White Sheet - approx 64% width) */}
            <div className="w-full md:w-[64%] p-5 sm:p-7 flex flex-col space-y-5 bg-white text-slate-800">
              {/* Top Header: Name & Contact Badges */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-2 border-slate-900 pb-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase font-sans">
                    SRIKRISHNA BAR
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#007799] uppercase mt-0.5">
                    RADIOLOGY TECHNOLOGIST
                  </p>
                </div>

                {/* Contacts */}
                <div className="text-[11px] font-medium text-slate-700 space-y-0.5 text-left sm:text-right shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-emerald-700">
                    <Phone className="w-3 h-3 text-cyan-600 shrink-0" />
                    <span>91+ 9093562024</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-emerald-600">
                    <MessageSquare className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>9093562024</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-slate-600">
                    <Mail className="w-3 h-3 text-red-500 shrink-0" />
                    <span className="break-all">srikrishnabar2000@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* WORK EXPERIENCE */}
              <div>
                <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-sans">
                  WORK EXPERIENCE
                </h2>

                <div className="space-y-3 text-xs">
                  {/* Job 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <div className="sm:col-span-5 font-medium">
                      <p className="font-bold text-slate-950 uppercase">DISTRICT HOSPITAL KALIMPONG</p>
                      <p className="text-[11px] text-slate-600">Present Organization - ESKAG SANJEEVANI PVT. LTD. KOLKATA</p>
                      <p className="text-[10px] font-semibold text-slate-500 mt-0.5">AUGUST 2020 - Till Now</p>
                    </div>
                    <div className="sm:col-span-7 pl-2 sm:border-l border-slate-200 text-slate-700 space-y-0.5 text-[11px]">
                      <p>• Radiology Technician - MRI, CT SCAN &amp; DIGITAL X-RAY</p>
                      <p>• MRI- 1.5 TESLA / PHILIPS (INGENIA)</p>
                      <p>• CT SCAN - SIEMENS 16 SLICE (SOMATOM SCOPE)</p>
                      <p>• X-RAY- AGFA 600 mA</p>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1.5 border-t border-slate-100">
                    <div className="sm:col-span-5 font-medium">
                      <p className="font-bold text-slate-950 uppercase">GREEN VIEW CLINIC PVD. LTD</p>
                      <p className="text-[10px] font-semibold text-slate-500">(MARCH - 2020 TO JUN 2020)</p>
                    </div>
                    <div className="sm:col-span-7 pl-2 sm:border-l border-slate-200 text-slate-700 space-y-0.5 text-[11px]">
                      <p>• Bharatiya Reserve Bank Note Mudran pvd. Ltd (X-RAY GME CR)</p>
                    </div>
                  </div>

                  {/* Job 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1.5 border-t border-slate-100">
                    <div className="sm:col-span-5 font-medium">
                      <p className="font-bold text-slate-950 uppercase">INTERNSHIP</p>
                      <p className="text-[10px] font-semibold text-slate-500">(SEPTEMBER 2019 TO FEBRUARY 2020)</p>
                    </div>
                    <div className="sm:col-span-7 pl-2 sm:border-l border-slate-200 text-slate-700 space-y-0.5 text-[11px]">
                      <p className="font-semibold">• BARASAT DISTRICT HOSPITAL</p>
                      <p>• CT SCAN - SIEMENS (SOMATOM SCOPE)</p>
                      <p>• X-RAY- AGFA 600 mA</p>
                    </div>
                  </div>

                  {/* RSO */}
                  <div className="pt-1 text-[11px] bg-slate-50 p-1.5 rounded border border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-slate-900">RSO (Radiology Safety Officer)</span>
                    <span className="font-mono text-slate-700 font-semibold">Doc No.: 24-RSO-1243744</span>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div>
                <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-sans">
                  EDUCATION
                </h2>

                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <div className="sm:col-span-6 font-bold text-slate-950 text-[11px]">
                      DIPLOMA. (In Medical Radiology &amp; Imaging Technology) (U.G.C)
                    </div>
                    <div className="sm:col-span-6 text-[11px] text-slate-700 sm:border-l border-slate-200 sm:pl-2">
                      • (From OM STERLLING GLOBAL UNIVERSITY- PARAMEDICAL INSTITUTE OF KOLKATA) In progress......
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                    <div className="sm:col-span-6 font-bold text-slate-950 text-[11px]">
                      Radiology &amp; Imaging Technology (N.S.D.C)
                    </div>
                    <div className="sm:col-span-6 text-[11px] text-slate-700 sm:border-l border-slate-200 sm:pl-2">
                      • VIVO Helthcare, Jodhpur park, Kolkata (2019) Grade/Class (B)
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                    <div className="sm:col-span-6 font-bold text-slate-950 text-[11px]">
                      HONOURS SUBJECT : BENGALI [EBG] (N.S.O.N)
                    </div>
                    <div className="sm:col-span-6 text-[11px] text-slate-700 sm:border-l border-slate-200 sm:pl-2">
                      • STUDY CENTRE : (B-09) Sonarpur Mahavidyalaya (2021) Grade/Class (A+)
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                    <div className="sm:col-span-6 font-bold text-slate-950 text-[11px]">
                      HIGHER SECONDARY (W.B.C.H.S.E)
                    </div>
                    <div className="sm:col-span-6 text-[11px] text-slate-700 sm:border-l border-slate-200 sm:pl-2">
                      • From BIPRADASPUR HIGH SCHOOL. (2018) Grade/Class (B)
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1 border-t border-slate-100">
                    <div className="sm:col-span-6 font-bold text-slate-950 text-[11px]">
                      MADHYAMIK (W.B.B.S.E)
                    </div>
                    <div className="sm:col-span-6 text-[11px] text-slate-700 sm:border-l border-slate-200 sm:pl-2">
                      • From PALPUR ADARSHA VIDYAPITH. (2016) Grade/Class (C)
                    </div>
                  </div>
                </div>
              </div>

              {/* SKILL */}
              <div>
                <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-1.5 font-sans">
                  SKILL
                </h2>
                <div className="text-[11px] text-slate-700 leading-relaxed space-y-1">
                  <p>
                    Hard skills like medical image interpretation (X-ray, CT Scan, MRI) and soft skills such as analytical thinking, communication with patients and colleagues, and attention to detail. Reports &amp; Feedback analysis.
                  </p>
                  <p>
                    Patient’s Clinical observation, patient’s History study &amp; Missed Diagnosis.....
                  </p>
                  <p>
                    Key hard skills include proficiency with Picture Archiving and Communication Systems (PACS), knowledge of radiation safety protocols, and familiarity with diagnostic imaging procedures. Essential soft skills involve the ability to communicate clearly with patients and colleagues, critical thinking, and problem-solving.
                  </p>
                </div>
              </div>

              {/* LANGUAGES */}
              <div>
                <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-1 font-sans">
                  LANGUAGES
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-800 pt-0.5">
                  <span>1. Bengali</span>
                  <span>2. Hindi</span>
                  <span>3. English</span>
                  <span>4. Nepali</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & protection banner */}
        <div className="px-4 py-2.5 bg-[#1E293B] border-t border-[#334155] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">ডাউনলোড সুরক্ষিত (Download Disabled)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 rounded bg-[#334155] hover:bg-[#475569] text-white transition-colors text-xs font-medium"
          >
            বন্ধ করুন (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
