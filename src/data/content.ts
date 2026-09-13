import {
  ContactConfig,
  TimelineEntry,
  EducationEntry,
  RadiologyModality,
  CreativeCategory,
  PortfolioProject,
} from '../types';

export const siteConfig: ContactConfig = {
  brandName: 'SRIKRISHNA BAR',
  ownerName: 'SRIKRISHNA BAR',
  role: 'Radiology Technologist',
  fatherName: 'Kashinath Bar',
  email: 'srikrishnabar2000@gmail.com',
  emailHref: 'mailto:srikrishnabar2000@gmail.com',
  phoneDisplay: '+91 9093562024',
  phoneHref: 'tel:+919093562024',
  socialLinks: {
    facebook: 'https://www.facebook.com/srikrishna.bar.102/',
    instagram: 'https://www.instagram.com/srikrishnabar2000/',
    youtube: 'https://www.youtube.com/@skshortstory1500',
  },
  address: {
    village: 'Palpur',
    postOffice: 'Palpur',
    policeStation: 'Gosaba',
    district: 'South 24 Parganas',
    state: 'West Bengal',
    country: 'India',
    postalCode: '743611',
  },
  contactMode: 'mailto',
};

export const heroContent = {
  eyebrow: 'SRIKRISHNA BAR',
  heading: 'মেডিক্যাল ইমেজিংয়ে মনোযোগ, মানুষের প্রতি যত্ন।',
  subHeading: 'Precision in Imaging. Creativity in Every Frame.',
  roleBadge: 'Radiology Technologist • Creative Professional',
  description:
    'আমি SRIKRISHNA BAR, একজন রেডিওলজি টেকনিশিয়ান। ২০২০ সালে শুরু হওয়া পেশাগত পথচলায় MRI, CT Scan ও Digital X-ray নিয়ে কাজের অভিজ্ঞতা অর্জন করেছি। রোগীর স্বাচ্ছন্দ্য, নিরাপত্তা এবং মানসম্মত ইমেজ সংগ্রহকে গুরুত্ব দিয়ে দায়িত্বশীলভাবে কাজ করাই আমার লক্ষ্য।',
  primaryButton: 'আমার কাজ দেখুন',
  secondaryButton: 'আমার সম্পর্কে',
  shortLocation: 'Palpur, Gosaba, West Bengal',
};

export const homeSummaryCards = [
  {
    id: 'about',
    title: 'আমার পরিচয়',
    subtitle: 'পথচলা ও শিক্ষা',
    description: 'আমার পথচলা, শিক্ষা ও কাজের অভিজ্ঞতা।',
    icon: 'User',
    destination: 'about',
  },
  {
    id: 'radiology',
    title: 'রেডিওলজি',
    subtitle: 'মেডিক্যাল ইমেজিং',
    description: 'MRI, CT, Digital X-ray ও ইমেজিং কর্মপ্রবাহ।',
    icon: 'Activity',
    destination: 'radiology',
  },
  {
    id: 'creative',
    title: 'ক্রিয়েটিভ কাজ',
    subtitle: 'ভিজ্যুয়াল আর্ট ও মিডিয়া',
    description: 'ছবি, ভিডিও, ডিজাইন, ওয়েব ও অ্যানিমেশন।',
    icon: 'Sparkles',
    destination: 'creative',
  },
  {
    id: 'portfolio',
    title: 'পোর্টফোলিও',
    subtitle: 'কাজের গ্যালারি',
    description: 'নির্বাচিত কাজ ও প্রজেক্টের বিস্তারিত।',
    icon: 'Briefcase',
    destination: 'portfolio',
  },
  {
    id: 'market-learning',
    title: 'বাজার সম্পর্কে শেখা',
    subtitle: 'অ্যানালিসিস ও জ্ঞান',
    description: 'শেয়ারবাজারের ধারণা ও শেখার নোট।',
    icon: 'TrendingUp',
    destination: 'market-learning',
  },
  {
    id: 'contact',
    title: 'যোগাযোগ',
    subtitle: 'কথোপকথন ও কোলাবোরেশন',
    description: 'পেশাগত যোগাযোগ ও কাজের আলোচনা।',
    icon: 'Mail',
    destination: 'contact',
  },
];

export const timelineData: TimelineEntry[] = [
  {
    id: 'rso',
    title: 'RSO (Radiology Safety Officer)',
    organization: 'Radiology Safety Officer',
    period: 'Certified',
    location: 'West Bengal',
    documentNo: '24-RSO-1243744',
    description:
      'রেডিওলজিক্যাল সেফটি অফিসার (RSO) হিসেবে রেডিয়েশন সুরক্ষা ও নিরাপত্তা মান নিয়ন্ত্রণ।',
  },
  {
    id: 'kalimpong',
    title: 'রেডিওলজি টেকনিশিয়ান',
    organization: 'ডিস্ট্রিক্ট হসপিটাল কালিম্পং / এসকাগ সঞ্জীবনী',
    period: 'আগস্ট ২০২০ – বর্তমান',
    location: 'কালিম্পং, পশ্চিমবঙ্গ',
    description:
      'রেডিওলজি টেকনিশিয়ান – MRI, CT SCAN ও ডিজিটাল X-RAY\nMRI- 1.5 TESLA / PHILIPS ( INGENIA)\nCT SCAN - SIEMENS 16 SLICE ( SOMATOM SCOPE)\nX- RAY- AGFA 600 mA',
  },
  {
    id: 'greenview',
    title: 'রেডিওলজি টেকনিশিয়ান',
    organization: 'GREEN VIEW CLINIC PVD. LTD',
    period: 'মার্চ ২০২০ – জুন ২০২০',
    location: 'পশ্চিমবঙ্গ',
    description:
      'Bharatiya Reserve Bank Note Mudran pvd. Ltd\n( X-RAY GME CR )',
  },
  {
    id: 'barasat',
    title: 'ইন্টার্ন রেডিওলজি টেকনিশিয়ান',
    organization: 'বারাসাত জেলা হাসপাতাল',
    period: 'সেপ্টেম্বর ২০১৯ – ফেব্রুয়ারি ২০২০',
    location: 'বারাসাত, পশ্চিমবঙ্গ',
    description:
      'রেডিওলজি বিভাগে ব্যবহারিক ইন্টার্নশিপ—বিভিন্ন এক্স-রে প্রসিডিউর, ইমেজিং টেকনিক ও পেশাদার হসপিটাল ওয়ার্কফ্লোর প্রত্যক্ষ অভিজ্ঞতা।',
  },
];

export const educationData: EducationEntry[] = [
  {
    id: 'diploma-radiology',
    degree: 'DIPLOMA (In Medical Radiology & Imaging Technology)',
    institution: 'OM STERLING GLOBAL UNIVERSITY - PARAMEDICAL INSTITUTE OF KOLKATA',
    period: '2024',
    location: 'Kolkata, West Bengal',
    status: 'U.G.C',
    details: [
      'From OM STERLING GLOBAL UNIVERSITY - PARAMEDICAL INSTITUTE OF KOLKATA',
      'Diploma in Medical Radiology & Imaging Technology (2024)',
      'U.G.C Recognized Program • মেডিক্যাল রেডিওলজি ও ইমেজিং টেকনোলজি',
    ],
  },
  {
    id: 'bengali-honours',
    degree: 'HONOURS SUBJECT : BENGALI',
    institution: 'Netaji Subhas Open University (N.S.O.U)',
    period: '(B.A) 2021',
    location: 'West Bengal',
    status: 'Grade / Class (A+)',
    details: [
      'Honours Subject: Bengali [EBG] (N.S.O.N)',
      '(B-09) Sonarpur Mahavidyalaya',
      'বাংলা ভাষা ও সাহিত্যে স্নাতক • Grade / Class (A+)',
    ],
  },
  {
    id: 'vivo',
    degree: 'Radiology & Imaging Technology',
    institution: 'VIVO Healthcare, Jodhpur Park',
    period: '2019',
    location: 'Kolkata, West Bengal',
    status: 'Grade / Class (B)',
    details: [
      'Digital X-Ray, CT Scan ও MRI ইমেজিংয়ের ফান্ডামেন্টাল ট্রেনিং',
      'রেডিয়েশন প্রটেকশন প্রোটোকল ও ALARA প্রিন্সিপল',
      'অ্যানাটমিক্যাল পজিশনিং ও মেডিক্যাল ডার্ক রুম টেকনিক',
    ],
  },
  {
    id: 'school',
    degree: 'HIGHER SECONDARY ( W.B.C.H.S.E )',
    institution: 'BIPRADASPUR HIGH SCHOOL',
    period: '2018',
    location: 'West Bengal',
    status: 'Grade / Class (B)',
    details: [
      'From BIPRADASPUR HIGH SCHOOL',
      'উত্তীর্ণের বছর: ২০১৮',
    ],
  },
  {
    id: 'madhyamik',
    degree: 'MADHYAMIK ( W.B.B.S.E )',
    institution: 'PALPUR ADARSHA VIDYAPITH',
    period: '2016',
    location: 'West Bengal',
    status: 'Grade / Class (C)',
    details: [
      'From PALPUR ADARSHA VIDYAPITH',
      'উত্তীর্ণের বছর: ২০১৬',
      'West Bengal Board of Secondary Education (W.B.B.S.E)',
    ],
  },
];

export const radiologyModalities: RadiologyModality[] = [
  {
    id: 'mri',
    title: 'MRI (Magnetic Resonance Imaging)',
    bengaliTitle: 'ম্যাগনেটিক রেজোন্যান্স ইমেজিং',
    description:
      'শক্তিশালী চুম্বক ক্ষেত্র এবং রেডিও তরঙ্গের সাহায্যে মানবদেহের নরম টিস্যু ও অভ্যন্তরীণ অঙ্গপ্রত্যঙ্গের অত্যন্ত বিশদ ও স্পষ্ট ক্রস-সেকশনাল চিত্র তৈরি করা হয়।',
    iconName: 'Magnet',
    keyWorkflows: [
      'রোগীর ধাতব বস্তু ও সেফটি স্ক্রিনিং পরীক্ষা',
      'সঠিক কয়েল নির্বাচন ও সঠিক পজিশনিং',
      'নয়েজ প্রটেকশন ও রোগী কমফোর্ট মনিটরিং',
      'হাই-রেজোলিউশন ইমেজ সিকোয়েন্স ক্যাপচার',
    ],
    principles: 'নন-আয়োনাইজিং রেডিওফ্রিকোয়েন্সি ও ম্যাগনেটিক ফিল্ডের সাহায্যে নিখুঁত নরম টিস্যু রেজোলিউশন।',
  },
  {
    id: 'ct',
    title: 'CT Scan (Computed Tomography)',
    bengaliTitle: 'কম্পিউটেড টমোগ্রাফি',
    description:
      'ঘূর্ণায়মান এক্স-রে টিউব ও ডিজিটাল ডিটেক্টরের মাধ্যমে শরীরের পাতলা স্লাইস ইমেজ ধারণ করা হয়, যা জটিল ফ্র্যাকচার ও অভ্যন্তরীণ ট্রমা দ্রুত নির্ণয়ে অপরিহার্য।',
    iconName: 'Scan',
    keyWorkflows: [
      'সঠিক স্লাইস থিকনেস ও ফিল্ড অব ভিউ (FOV) নির্ধারণ',
      'কনট্রাস্ট বা নন-কনট্রাস্ট প্রটোকল প্রস্তুতি',
      'রোগীর শ্বাস-প্রশ্বাস নির্দেশনার সঠিক সমন্বয়',
      '3D মাল্টিপ্ল্যানার রিকনস্ট্রাকশন (MPR)',
    ],
    principles: 'ক্রস-সেকশনাল এক্স-রে অ্যাটেনুয়েশন ডেটার কম্পিউটার প্রসেসিং।',
  },
  {
    id: 'xray',
    title: 'Digital X-Ray (DR & CR)',
    bengaliTitle: 'ডিজিটাল এক্স-রে',
    description:
      'অত্যাধুনিক ডিজিটাল ডিটেক্টর ব্যবহার করে ন্যূনতম রেডিয়েশনে হাড়ের ফ্র্যাকচার, বুকের সংক্রমণ ও অর্থোপেডিক সমস্যা নিখুঁতভাবে ধারণ করা।',
    iconName: 'Bone',
    keyWorkflows: [
      'অঙ্গভেদে সঠিক কেভি (kVp) ও এমএএস (mAs) এক্সপোজার নির্ধারণ',
      'রোগীর আরামদায়ক ও স্ট্যান্ডার্ড অ্যানাটমিক্যাল পজিশনিং',
      'লিড অ্যাপ্রন ও থাইরয়েড শিল্ডের মাধ্যমে রেডিয়েশন সুরক্ষা',
      'ডিজিটাল ইমেজ প্রসেসিং ও কনট্রাস্ট অপ্টিমাইজেশন',
    ],
    principles: 'আয়নাইজিং রেডিয়েশন এবং অপ্টিমাইজড এক্সপোজার টাইম।',
  },
  {
    id: 'pacs',
    title: 'PACS & Digital Workflow',
    bengaliTitle: 'প্যাকস ও ডিজিটাল কর্মপ্রবাহ',
    description:
      'পিকচার আর্কাইভিং অ্যান্ড কমিউনিকেশন সিস্টেম (PACS) ও DICOM ফরম্যাটের মাধ্যমে ইমেজ দ্রুত সংরক্ষণ, স্থানান্তর এবং রেডিওলজিস্টদের পর্যালোচনার জন্য প্রস্তুত করা।',
    iconName: 'Database',
    keyWorkflows: [
      'DICOM মেটাডেটা সঠিক যাচাই ও স্টোরিং',
      'রেডিওলজিস্ট কনসোল ও ক্লিনিশিয়ান ভিউয়ারে দ্রুত ট্রান্সফার',
      'মেডিক্যাল ইমেজ ডেটা ব্যাকআপ ও গোপনীয়তা নিশ্চিতকরণ',
    ],
    principles: 'ডিজিটাল হেলথকেয়ার ইন্টারঅপারেবিলিটি ও স্ট্যান্ডার্ডাইজড ওয়ার্কফ্লো।',
  },
  {
    id: 'safety',
    title: 'Radiation Safety & ALARA Principle',
    bengaliTitle: 'রেডিয়েশন সুরক্ষা ও রোগী সচেতনতা',
    description:
      'ALARA (As Low As Reasonably Achievable) নীতি অনুযায়ী রোগীর জন্য ন্যূনতম কার্যকর রেডিয়েশন প্রয়োগ এবং কর্মীদের সর্বোচ্চ সুরক্ষা প্রদান।',
    iconName: 'ShieldAlert',
    keyWorkflows: [
      'লিড অ্যাপ্রন, গোনাড শিল্ড ও থাইরয়েড গার্ড ব্যবহার',
      'কলিমেশন (Collimation) নিয়ন্ত্রণ করে অপ্রয়োজনীয় এক্সপোজার কমানো',
      'ভয় বা উদ্বেগ কমাতে রোগীর সাথে ইতিবাচক ও স্পষ্ট যোগাযোগ',
      'রেডিয়েশন ব্যাজ (TLD) মনিটরিং ও সেফটি স্ট্যান্ডার্ড রক্ষা',
    ],
    principles: 'সর্বনিম্ন রেডিয়েশন এক্সপোজারে সর্বোচ্চ ডায়াগনস্টিক মান বজায় রাখা।',
  },
];

export const creativeCategories: CreativeCategory[] = [
  {
    id: 'photography',
    name: 'Photography',
    bengaliTitle: 'ফটোগ্রাফি',
    summary: 'আলো, ফ্রেম ও মুহূর্তকে ছবির মাধ্যমে তুলে ধরি।',
    detailedDescription:
      'ক্যামেরার লেন্সে আলোর সঠিক ব্যবহার, কম্পোজিশন ও সাবজেক্টের অনুভূতির সংযোগ ঘটিয়ে ফ্রেমবন্দি করি প্রকৃতির রূপ, পোর্ট্রেট ও নান্দনিক মুহূর্ত। মেডিক্যাল ইমেজিংয়ের নিখুঁত চোখ আমাকে ক্যামেরার ফ্রেমিংয়ে বাড়তি সতর্কতা দেয়।',
    tools: ['Manual Camera Controls', 'Lighting Balancing', 'Color Calibration'],
    areasOfFocus: ['Landscape & Nature', 'Portrait & Street', 'Macro & Product Framing'],
  },
  {
    id: 'videography',
    name: 'Videography',
    bengaliTitle: 'ভিডিওগ্রাফি',
    summary: 'দৃশ্য, গতি ও গল্প মিলিয়ে ভিডিও তৈরি করি।',
    detailedDescription:
      'চলমান ছবির ভেতর দিয়ে অনুভূতির গল্প তৈরি। সিনেমাটিক ফ্রেম রেট, ক্যামেরা মুভমেন্ট ও সঠিক দৃশ্য পরিকল্পনার মাধ্যমে আকর্ষণীয় ভিডিও কনটেন্ট তৈরি করা।',
    tools: ['Video Camera Angles', 'Dynamic Gimbal Work', 'Cinematic Color Grading'],
    areasOfFocus: ['Short Storytelling', 'Cinematic Clips', 'Reels & Event Highlights'],
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    bengaliTitle: 'গ্রাফিক ডিজাইন',
    summary: 'পোস্টার, ব্যানার ও ডিজিটাল ভিজ্যুয়ালের ডিজাইন নিয়ে কাজ করি।',
    detailedDescription:
      'রং, টাইপোগ্রাফি এবং শেপের সমন্বয়ে প্রভাবশালী ভিজ্যুয়াল তৈরি। ব্র্যান্ডের পরিচয় ও বার্তা সহজে দর্শকের কাছে পৌঁছে দেওয়ার জন্য পরিষ্কার ও আধুনিক আর্টওয়ার্ক তৈরি করা।',
    tools: ['Vector Layouts', 'Digital Poster Compositions', 'Color Harmony Systems'],
    areasOfFocus: ['Social Media Creatives', 'Posters & Banners', 'Brand Identity Elements'],
  },
  {
    id: 'web-development',
    name: 'Website Development',
    bengaliTitle: 'ওয়েবসাইট ডেভেলপমেন্ট',
    summary: 'পরিচয় ও কাজ তুলে ধরার জন্য সুন্দর, ব্যবহারযোগ্য ওয়েবসাইট তৈরি করি।',
    detailedDescription:
      'আধুনিক ওয়েব প্রযুক্তি ব্যবহার করে রেসপন্সিভ, দৃষ্টিনন্দন ও ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি। যেকোনো ডিভাইসে মসৃণ অভিজ্ঞতা নিশ্চিত করাই মূল লক্ষ্য।',
    tools: ['HTML5 / CSS3', 'React & Tailwind CSS', 'Modern Responsive UI'],
    areasOfFocus: ['Personal Portfolios', 'Fast Single-Page Apps', 'Clean Component Architecture'],
  },
  {
    id: 'ai-tools',
    name: 'AI Tools & Content',
    bengaliTitle: 'AI টুলস ও কনটেন্ট',
    summary: 'AI টুল ব্যবহার করে ভাবনা, কনটেন্ট ও ভিজ্যুয়াল তৈরির কাজ করি।',
    detailedDescription:
      'আধুনিক কৃত্রিম বুদ্ধিমত্তা টুলস ব্যবহার করে সৃজনশীল আইডিয়া এক্সপ্লোর করা, কনটেন্ট স্ক্রিপ্টিং, ভিজ্যুয়াল জেনারেশন প্রম্পটিং এবং কাজের গতি বৃদ্ধি করা।',
    tools: ['Generative Visual Tools', 'Prompt Engineering', 'Creative Workflow Acceleration'],
    areasOfFocus: ['Concept Art Ideation', 'Creative Script Assistance', 'Rapid Asset Prototyping'],
  },
  {
    id: 'animation-3d',
    name: '3D Cartoon Animation',
    bengaliTitle: '3D কার্টুন অ্যানিমেশন',
    summary: 'চরিত্র, দৃশ্য ও চলনের সমন্বয়ে কার্টুন অ্যানিমেশন তৈরি করি।',
    detailedDescription:
      '3D স্পেসে চরিত্র ও পরিবেশ তৈরি করে তাদের জীবন্ত চলন দেওয়া। কার্টুন গল্প, ছোট দৃশ্য ও আকর্ষণীয় চরিত্র রূপায়ণে 3D অ্যানিমেশনের নানা দিক নিয়ে কাজ করছি।',
    tools: ['3D Character Rigging', 'Keyframe Animation', 'Scene Lighting & Rendering'],
    areasOfFocus: ['Cartoon Characters', 'Short Expressive Clips', 'Stylized 3D Environments'],
  },
  {
    id: 'market-learning',
    name: 'Market Learning',
    bengaliTitle: 'বাজার সম্পর্কে শেখা',
    summary: 'শেয়ারবাজারের সাধারণ ধারণা ও বাজার বিশ্লেষণ সম্পর্কে শেখার আগ্রহ রয়েছে।',
    detailedDescription:
      'শেয়ার এবং স্টক মার্কেটের মৌলিক বিষয়, টেকনিক্যাল চার্ট বিশ্লেষণ, ঝুঁকি ব্যবস্থাপনা এবং দীর্ঘমেয়াদি আর্থিক শৃঙ্খলা সম্পর্কে ব্যক্তিগত কৌতূহল ও শেখার প্রচেষ্টা। এটি সম্পূর্ণ শিক্ষণীয় স্বার্থে নিবেদিত।',
    tools: ['Candlestick Charts', 'Technical Indicators', 'Risk Management Principles'],
    areasOfFocus: ['Price Action & Trend Analysis', 'Support & Resistance', 'Disciplined Learning Habit'],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'Visual Storytelling Frame',
    category: 'photography',
    categoryLabel: 'Photography',
    description: 'প্রাকৃতিক আলো ও সুনির্দিষ্ট ফোকাসের সমন্বয়ে সংবেদনশীল মুহূর্ত ফ্রেমবন্দি করার নিরীক্ষা।',
    role: 'Photographer & Colorist',
    tools: ['Prime Lens', 'Natural Sunlight'],
    year: '2024',
    isDemonstration: true,
  },
  {
    id: 'project-2',
    title: 'Short Cinematic Narrative',
    category: 'video',
    categoryLabel: 'Video',
    description: 'সংক্ষিপ্ত দৃশ্যপট ও সিনেমাটিক ট্রানজিশনে নির্মিত ভিজ্যুয়াল স্টোরি ক্লিপ।',
    role: 'Director & Editor',
    tools: ['Camera Stabilization', 'Sound Timing'],
    year: '2024',
    isDemonstration: true,
  },
  {
    id: 'project-3',
    title: 'Geometric Brand Poster Series',
    category: 'design',
    categoryLabel: 'Design',
    description: 'আধুনিক ডার্ক থিম ও ভাইব্র্যান্ট রঙের ভারসাম্যে তৈরি প্রচারমূলক ডিজিটাল পোস্টার।',
    role: 'Graphic Designer',
    tools: ['Vector Layout', 'Color Palette'],
    year: '2024',
    isDemonstration: true,
  },
  {
    id: 'project-4',
    title: 'Responsive Portfolio Architecture',
    category: 'web',
    categoryLabel: 'Web',
    description: 'দ্রুতগতির রেসপন্সিভ পার্সোনাল ওয়েবসাইট ইন্টারফেস, ডায়নামিক ভিউ ও অ্যাক্সেসিবল নেভিগেশন।',
    role: 'Frontend Developer',
    tools: ['React', 'Tailwind CSS', 'Three.js'],
    year: '2025',
    isDemonstration: true,
  },
  {
    id: 'project-5',
    title: 'Stylized 3D Cartoon Character Study',
    category: '3d-ai',
    categoryLabel: '3D / AI',
    description: 'কার্টুন চরিত্রের অভিব্যক্তি ও মৌলিক হাঁটাচলার 3D ক্যারেক্টার মডেলিং ও রিগিং পরীক্ষা।',
    role: '3D Animator',
    tools: ['3D Modeling Space', 'Keyframe Timing'],
    year: '2025',
    isDemonstration: true,
  },
];

export const privacyContent = {
  effectiveDate: '১১ সেপ্টেম্বর, ২০২৬',
  contactEmail: 'srikrishnabar2000@gmail.com',
  sections: [
    {
      heading: 'পরিচিতি ও মূলনীতি',
      body: 'এই ওয়েবসাইটে আমার পরিচয়, দক্ষতা ও কাজের তথ্য তুলে ধরা হয়েছে। ওয়েবসাইটের সমস্ত তথ্য ভিজিটরদের কাছে স্বচ্ছ ও নির্ভরযোগ্যভাবে উপস্থাপনের উদ্দেশ্যে সাজানো।',
    },
    {
      heading: 'যোগাযোগ ফর্ম ও ডেটা হ্যান্ডলিং',
      body: 'যোগাযোগ ফর্মে লেখা তথ্য আপনার ডিভাইসের ইমেল অ্যাপে একটি খসড়া (draft) বার্তা তৈরির জন্য ব্যবহার হয়। ওয়েবসাইটের কোনো নিজস্ব ফর্ম-ডেটাবেস বা সার্ভারে তা জমা রাখা হয় না। আপনি ইমেল পাঠালে সেই তথ্য আপনার অনুরোধের উত্তর দিতে ব্যবহার করা হবে।',
    },
    {
      heading: 'বাহ্যিক সোশ্যাল মিডিয়া লিংক',
      body: 'Facebook, Instagram ও YouTube-এর লিংকে গেলে সংশ্লিষ্ট প্ল্যাটফর্মের নিজস্ব গোপনীয়তা নীতি ও শর্তাবলী প্রযোজ্য হবে। এই ওয়েবসাইট থেকে কোনো ব্যক্তিগত তথ্য বাইরে বিক্রি বা শেয়ার করা হয় না।',
    },
    {
      heading: 'কুকিজ ও ট্র্যাকার সংক্রান্ত তথ্য',
      body: 'এই ওয়েবসাইটে কোনো বাণিজ্যিক ট্র্যাকার, বিজ্ঞাপন কুকি বা অননুমোদিত অ্যানালিটিক্স কোড চালানো হয় না। এটি একটি বিশুদ্ধ ব্যক্তিগত পোর্টফোলিও সাইট।',
    },
  ],
};
