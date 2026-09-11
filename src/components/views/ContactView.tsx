import React, { useState } from 'react';
import { siteConfig } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [draftGenerated, setDraftGenerated] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.errors.name;
    }
    if (!formData.contact.trim()) {
      errs.contact = t.contact.errors.contact;
    }
    if (!formData.subject.trim()) {
      errs.subject = t.contact.errors.subject;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = t.contact.errors.message;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link
    const emailTo = siteConfig.email;
    const emailSubject = encodeURIComponent(
      `[Website Contact] ${formData.subject} - from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nContact (Email/Phone): ${formData.contact}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n--\nSent from SRIKRISHNA Personal Website`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    setDraftGenerated(true);

    // Open user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full py-6 md:py-10 max-w-[1150px] mx-auto space-y-10 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
        <span className="text-[#E2E8F5]/50">HOME</span>
        <span>/</span>
        <span>CONTACT</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech bg-[#151D38] text-[#38BDF8] border border-[#38BDF8]/30">
          <Mail className="w-3.5 h-3.5" />
          <span>{t.contact.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-bengali">
          {t.contact.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#E2E8F5]/85 font-bengali max-w-3xl leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Methods & Address */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Cards */}
          <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-4 shadow-xl">
            <h2 className="text-lg font-bold text-white font-bengali">
              {t.contact.directTitle}
            </h2>

            <div className="space-y-3">
              {/* Phone */}
              <a
                href={siteConfig.phoneHref}
                className="p-3.5 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#42D8D5]/50 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151D38] flex items-center justify-center text-[#42D8D5] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 block">
                    {t.contact.callLabel}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#42D8D5] transition-colors font-mono-tech">
                    {siteConfig.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={siteConfig.emailHref}
                className="p-3.5 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#FF873B]/50 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151D38] flex items-center justify-center text-[#FF873B] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono-tech text-[#E2E8F5]/60 block">
                    {t.contact.emailLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF873B] transition-colors font-mono-tech truncate block">
                    {siteConfig.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Social Media Row */}
            <div className="pt-4 border-t border-[#20284A] space-y-3">
              <span className="text-xs font-mono-tech text-[#E2E8F5]/60 block">
                {t.contact.socialLabel}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* Facebook */}
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#42D8D5]/50 text-center text-xs font-mono-tech text-white hover:text-[#42D8D5] transition-all flex flex-col items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
                {/* Instagram */}
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#FF873B]/50 text-center text-xs font-mono-tech text-white hover:text-[#FF873B] transition-all flex flex-col items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>
                {/* YouTube */}
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0B1026] hover:bg-[#20284A] border border-[#20284A] hover:border-[#E44CA5]/50 text-center text-xs font-mono-tech text-white hover:text-[#E44CA5] transition-all flex flex-col items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Postal Address Block */}
          <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#42D8D5]">
              <MapPin className="w-4 h-4" />
              <span>{t.contact.addressTitle}</span>
            </div>
            <address className="not-italic text-sm text-[#E2E8F5]/90 space-y-1 font-mono-tech leading-relaxed">
              <div className="text-white font-bold text-base">{siteConfig.ownerName}</div>
              <div>Village & P.O.: {siteConfig.address.village}</div>
              <div>Police Station: {siteConfig.address.policeStation}</div>
              <div>District: {siteConfig.address.district}</div>
              <div>State: {siteConfig.address.state}, {siteConfig.address.country}</div>
              <div className="text-[#FF873B] font-semibold">PIN Code: {siteConfig.address.postalCode}</div>
            </address>
          </div>
        </div>

        {/* Right Column: Contact Draft Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#151D38] border border-[#20284A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-bengali">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#E2E8F5]/75 font-bengali mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono-tech text-[#E2E8F5]/80 mb-1.5"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1026] border border-[#20284A] focus:border-[#42D8D5] focus:outline-none focus:ring-1 focus:ring-[#42D8D5] text-white text-sm"
                />
                {errors.name && (
                  <p className="text-xs text-[#FF6B4A] flex items-center gap-1 mt-1 font-bengali">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Contact (Email or Phone) */}
              <div>
                <label
                  htmlFor="contact-detail"
                  className="block text-xs font-mono-tech text-[#E2E8F5]/80 mb-1.5"
                >
                  {t.contact.contactLabel}
                </label>
                <input
                  id="contact-detail"
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder={t.contact.contactPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1026] border border-[#20284A] focus:border-[#42D8D5] focus:outline-none focus:ring-1 focus:ring-[#42D8D5] text-white text-sm"
                />
                {errors.contact && (
                  <p className="text-xs text-[#FF6B4A] flex items-center gap-1 mt-1 font-bengali">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.contact}</span>
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono-tech text-[#E2E8F5]/80 mb-1.5"
                >
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1026] border border-[#20284A] focus:border-[#42D8D5] focus:outline-none focus:ring-1 focus:ring-[#42D8D5] text-white text-sm"
                />
                {errors.subject && (
                  <p className="text-xs text-[#FF6B4A] flex items-center gap-1 mt-1 font-bengali">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono-tech text-[#E2E8F5]/80 mb-1.5"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1026] border border-[#20284A] focus:border-[#42D8D5] focus:outline-none focus:ring-1 focus:ring-[#42D8D5] text-white text-sm resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-[#FF6B4A] flex items-center gap-1 mt-1 font-bengali">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submission Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#283E86] hover:bg-[#324db0] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-[#42D8D5]/30 hover:border-[#42D8D5] shadow-md"
                >
                  <Send className="w-4 h-4 text-[#42D8D5]" />
                  <span>{t.contact.submitBtn}</span>
                </button>

                {/* Explicit Guidance Note */}
                <p className="text-xs text-[#E2E8F5]/60 font-bengali text-center leading-relaxed">
                  {t.contact.note}
                </p>
              </div>

              {draftGenerated && (
                <div className="p-4 rounded-xl bg-[#0B1026] border border-[#42D8D5]/50 flex items-center gap-2.5 text-xs sm:text-sm text-[#42D8D5] font-bengali">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>
                    {t.contact.draftSuccess}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
