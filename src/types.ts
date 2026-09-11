export type Language = 'bn' | 'en';

export type AppView =
  | 'home'
  | 'about'
  | 'radiology'
  | 'creative'
  | 'portfolio'
  | 'market-learning'
  | 'contact'
  | 'privacy';

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface AddressInfo {
  village: string;
  postOffice: string;
  policeStation: string;
  district: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface ContactConfig {
  brandName: string;
  ownerName: string;
  role: string;
  fatherName: string;
  email: string;
  emailHref: string;
  phoneDisplay: string;
  phoneHref: string;
  socialLinks: SocialLinks;
  address: AddressInfo;
  contactMode: 'mailto' | 'server';
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  statusNote?: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status?: string;
  details: string[];
}

export interface RadiologyModality {
  id: string;
  title: string;
  bengaliTitle: string;
  description: string;
  iconName: string;
  keyWorkflows: string[];
  principles: string;
}

export interface CreativeCategory {
  id: string;
  name: string;
  bengaliTitle: string;
  summary: string;
  detailedDescription: string;
  tools: string[];
  areasOfFocus: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'photography' | 'video' | 'design' | 'web' | '3d-ai';
  categoryLabel: string;
  description: string;
  role: string;
  tools?: string[];
  year?: string;
  imagePlaceholder?: string;
  link?: string;
  isDemonstration?: boolean;
}
