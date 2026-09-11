export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    radiology: string;
    creative: string;
    portfolio: string;
    marketLearning: string;
    contact: string;
    contactCta: string;
  };
  hero: {
    eyebrow: string;
    roleBadge: string;
    heading: string;
    subHeading: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
    connect: string;
    verified: string;
    scannerCaption: string;
    scannerPause: string;
    scannerPlay: string;
    portraitId: string;
    cvSource: string;
  };
  homeCards: {
    badge: string;
    heading: string;
    description: string;
    viewDetails: string;
    cards: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      destination: string;
    }[];
  };
  about: {
    badge: string;
    heading: string;
    subtitle: string;
    tabs: {
      bio: string;
      experience: string;
      education: string;
    };
    bioTitle: string;
    bioP1: string;
    bioP2: string;
    bioSections?: {
      title: string;
      paragraphs: string[];
    }[];
    langTitle: string;
    langValue: string;
    langDesc: string;
    originTitle: string;
    originValue: string;
    originDesc: string;
    statusLabel: string;
    statusActive: string;
    disclosureBtn: string;
    fatherLabel: string;
    addressLabel: string;
    sourceNote: string;
    timeline: {
      id: string;
      title: string;
      organization: string;
      period: string;
      location: string;
      description: string;
      statusNote?: string;
    }[];
    education: {
      id: string;
      degree: string;
      institution: string;
      period: string;
      location: string;
      status?: string;
      details: string[];
    }[];
  };
  radiology: {
    badge: string;
    heading: string;
    subtitle: string;
    workflowBadge: string;
    descTitle: string;
    scientificPrinciple: string;
    checklistTitle: string;
    alaraTitle: string;
    alaraDesc: string;
    timeLabel: string;
    timeDesc: string;
    distLabel: string;
    distDesc: string;
    shieldLabel: string;
    shieldDesc: string;
    modalities: {
      id: string;
      title: string;
      subTitle: string;
      description: string;
      principles: string;
      keyWorkflows: string[];
    }[];
  };
  creative: {
    badge: string;
    heading: string;
    subtitle: string;
    spotlight: string;
    viewPortfolio: string;
    approachTitle: string;
    toolsTitle: string;
    focusTitle: string;
    categories: {
      id: string;
      name: string;
      title: string;
      summary: string;
      detailedDescription: string;
      tools: string[];
      areasOfFocus: string[];
    }[];
  };
  portfolio: {
    badge: string;
    heading: string;
    subtitle: string;
    noticeTitle: string;
    noticeDesc: string;
    filterLabel: string;
    filters: { id: string; label: string }[];
    demoBadge: string;
    yearLabel: string;
    roleLabel: string;
    statusLabel: string;
    statusValue: string;
    viewPreview: string;
    closeModal: string;
    projects: {
      id: string;
      title: string;
      category: 'photography' | 'video' | 'design' | 'web' | '3d-ai';
      categoryLabel: string;
      description: string;
      role: string;
      tools: string[];
      year: string;
      isDemonstration: boolean;
    }[];
  };
  market: {
    badge: string;
    heading: string;
    subtitle: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    chartTitle: string;
    chartBadge: string;
    support: string;
    discipline: string;
    resistance: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    directTitle: string;
    callLabel: string;
    emailLabel: string;
    socialLabel: string;
    addressTitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    note: string;
    draftSuccess: string;
    errors: {
      name: string;
      contact: string;
      subject: string;
      message: string;
    };
  };
  privacy: {
    backBtn: string;
    badge: string;
    heading: string;
    effectiveDate: string;
    contactEmail: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
  footer: {
    tagline: string;
    quickNav: string;
    addressTitle: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<'bn' | 'en', TranslationSchema> = {
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমার সম্পর্কে',
      radiology: 'রেডিওলজি',
      creative: 'ক্রিয়েটিভ কাজ',
      portfolio: 'পোর্টফোলিও',
      marketLearning: 'বাজার সম্পর্কে শেখা',
      contact: 'যোগাযোগ',
      contactCta: 'যোগাযোগ করুন',
    },
    hero: {
      eyebrow: 'SRIKRISHNA BAR',
      roleBadge: 'Radiology Technologist • Creative Professional',
      heading: 'মেডিক্যাল ইমেজিংয়ে মনোযোগ, মানুষের প্রতি যত্ন।',
      subHeading: 'Precision in Imaging. Creativity in Every Frame.',
      description:
        'আমি SRIKRISHNA BAR, একজন রেডিওলজি টেকনিশিয়ান। ২০২০ সালে শুরু হওয়া পেশাগত পথচলায় MRI, CT Scan ও Digital X-ray নিয়ে কাজের অভিজ্ঞতা অর্জন করেছি। রোগীর স্বাচ্ছন্দ্য, নিরাপত্তা এবং মানসম্মত ইমেজ সংগ্রহকে গুরুত্ব দিয়ে দায়িত্বশীলভাবে কাজ করাই আমার লক্ষ্য।',
      primaryBtn: 'আমার কাজ দেখুন',
      secondaryBtn: 'আমার সম্পর্কে',
      connect: 'CONNECT:',
      verified: 'VERIFIED PROFESSIONAL',
      scannerCaption: 'মেডিক্যাল ইমেজিংয়ের শিল্পিত উপস্থাপনা',
      scannerPause: 'থামান',
      scannerPlay: 'চালু',
      portraitId: 'PORTRAIT IDENTIFIER',
      cvSource: 'CV SOURCE MATERIAL',
    },
    homeCards: {
      badge: 'EXPLORE DISCIPLINES',
      heading: 'আমার কাজের জগৎ',
      description:
        'মেডিক্যাল ইমেজিং থেকে ভিজ্যুয়াল স্টোরিটেলিং—প্রযুক্তি, শেখা এবং সৃজনশীল কাজের মাধ্যমে নিজেকে এগিয়ে নিয়ে যেতে ভালোবাসি। নিচের যেকোনো বিভাগ বেছে নিয়ে বিস্তারিত দেখুন।',
      viewDetails: 'বিস্তারিত দেখুন',
      cards: [
        {
          id: 'about',
          title: 'আমার পরিচয়',
          subtitle: 'পথচলা ও শিক্ষা',
          description: 'আমার পথচলা, শিক্ষা ও কাজের অভিজ্ঞতা।',
          destination: 'about',
        },
        {
          id: 'radiology',
          title: 'রেডিওলজি',
          subtitle: 'মেডিক্যাল ইমেজিং',
          description: 'MRI, CT, Digital X-ray ও ইমেজিং কর্মপ্রবাহ।',
          destination: 'radiology',
        },
        {
          id: 'creative',
          title: 'ক্রিয়েটিভ কাজ',
          subtitle: 'ভিজ্যুয়াল আর্ট ও মিডিয়া',
          description: 'ছবি, ভিডিও, ডিজাইন, ওয়েব ও অ্যানিমেশন।',
          destination: 'creative',
        },
        {
          id: 'portfolio',
          title: 'পোর্টফোলিও',
          subtitle: 'কাজের গ্যালারি',
          description: 'নির্বাচিত কাজ ও প্রজেক্টের বিস্তারিত।',
          destination: 'portfolio',
        },
        {
          id: 'market-learning',
          title: 'বাজার সম্পর্কে শেখা',
          subtitle: 'অ্যানালিসিস ও জ্ঞান',
          description: 'শেয়ারবাজারের ধারণা ও শেখার নোট।',
          destination: 'market-learning',
        },
        {
          id: 'contact',
          title: 'যোগাযোগ',
          subtitle: 'কথোপকথন ও কোলাবোরেশন',
          description: 'পেশাগত যোগাযোগ ও কাজের আলোচনা।',
          destination: 'contact',
        },
      ],
    },
    about: {
      badge: 'BIOGRAPHY & BACKGROUND',
      heading: 'আমার সম্পর্কে',
      subtitle:
        'চিকিৎসা বিজ্ঞানের নির্ভুল প্রতিচ্ছবি থেকে সৃজনশীল ফ্রেমের গল্প—আমার শিক্ষাগত পটভূমি, ডায়াগনস্টিক কাজের অভিজ্ঞতা ও জীবনদর্শন।',
      tabs: {
        bio: 'পরিচয় ও দর্শন',
        experience: 'কাজের অভিজ্ঞতা',
        education: 'শিক্ষা ও প্রশিক্ষণ',
      },
      bioTitle: 'সঠিক পজিশনিং, মানসম্মত ইমেজ ও দায়িত্বশীল সেবা',
      bioP1:
        'আমি **SRIKRISHNA BAR**। ২০২০ সালে রেডিওলজি ও মেডিক্যাল ইমেজিংয়ের ক্ষেত্রে আমার পেশাগত পথচলা শুরু। একজন রেডিওলজি টেকনোলজিস্ট হিসেবে আমার কাজে সঠিক অ্যানাটমিক্যাল পজিশনিং, পরীক্ষার উপযোগী ইমেজ সংগ্রহ এবং রোগীর স্বাচ্ছন্দ্য বিশেষ গুরুত্ব পায়।',
      bioP2:
        'ডিজিটাল এক্স-রে, সিটি স্ক্যান কিংবা এমআরআই—প্রতিটি পরীক্ষায় নির্ধারিত প্রটোকল অনুসরণ করে শরীরের প্রয়োজনীয় অংশ স্পষ্টভাবে তুলে ধরতে মনোযোগ দিই। কারণ মানসম্মত ইমেজ চিকিৎসক ও রেডিওলজিস্টদের মূল্যায়ন এবং চিকিৎসা পরিকল্পনায় গুরুত্বপূর্ণ সহায়তা করে।',
      bioSections: [
        {
          title: 'সঠিক পজিশনিং, মানসম্মত ইমেজ ও দায়িত্বশীল সেবা',
          paragraphs: [
            'আমি **SRIKRISHNA BAR**। ২০২০ সালে রেডিওলজি ও মেডিক্যাল ইমেজিংয়ের ক্ষেত্রে আমার পেশাগত পথচলা শুরু। একজন রেডিওলজি টেকনোলজিস্ট হিসেবে আমার কাজে সঠিক অ্যানাটমিক্যাল পজিশনিং, পরীক্ষার উপযোগী ইমেজ সংগ্রহ এবং রোগীর স্বাচ্ছন্দ্য বিশেষ গুরুত্ব পায়।',
            'ডিজিটাল এক্স-রে, সিটি স্ক্যান কিংবা এমআরআই—প্রতিটি পরীক্ষায় নির্ধারিত প্রটোকল অনুসরণ করে শরীরের প্রয়োজনীয় অংশ স্পষ্টভাবে তুলে ধরতে মনোযোগ দিই। কারণ মানসম্মত ইমেজ চিকিৎসক ও রেডিওলজিস্টদের মূল্যায়ন এবং চিকিৎসা পরিকল্পনায় গুরুত্বপূর্ণ সহায়তা করে।',
            'প্রযুক্তিগত দক্ষতার পাশাপাশি রোগীকে পরীক্ষার প্রক্রিয়া বুঝিয়ে বলা, তাঁর উদ্বেগের প্রতি সহমর্মী থাকা এবং সংশ্লিষ্ট নিরাপত্তাবিধি মেনে চলাকে আমি পেশাগত দায়িত্বের অবিচ্ছেদ্য অংশ মনে করি।',
          ],
        },
        {
          title: 'সূক্ষ্ম পর্যবেক্ষণ থেকে যত্নশীল কাজের অভ্যাস',
          paragraphs: [
            'রেডিওলজি পেশা আমাকে ছোট ছোট বিষয়ের গুরুত্ব বুঝতে শিখিয়েছে। রোগীর অবস্থান, শরীরের নির্দিষ্ট অংশের দৃশ্যমানতা কিংবা ইমেজের গুণমান—প্রতিটি বিষয়ই মনোযোগ দিয়ে পর্যবেক্ষণ করতে হয়। এই অভ্যাস আমার মধ্যে ধৈর্য, শৃঙ্খলা এবং দায়িত্ব নিয়ে কাজ করার মানসিকতা গড়ে তুলেছে।',
            'আমার কাছে প্রতিটি পরীক্ষার সঙ্গে যুক্ত আছেন একজন মানুষ—তাঁর স্বাচ্ছন্দ্য, উদ্বেগ ও চিকিৎসার প্রয়োজন। তাই প্রযুক্তির ব্যবহার এবং মানুষের প্রতি যত্নকে একসঙ্গে গুরুত্ব দিই। রোগীকে আশ্বস্ত করা, প্রয়োজনীয় সহযোগিতা দেওয়া এবং চিকিৎসক দলের সঙ্গে সমন্বয় রেখে কাজ করাই আমার পেশাগত দৃষ্টিভঙ্গি।',
            'নিয়মিত শেখা, নিজের কাজ পর্যালোচনা করা এবং অভিজ্ঞতা থেকে উন্নতি করার মধ্য দিয়ে এই দৃষ্টিভঙ্গিকে আরও সমৃদ্ধ করতে চাই।',
          ],
        },
      ],
      langTitle: 'LANGUAGES SPOKEN',
      langValue: 'বাংলা • Hindi • English • Nepali',
      langDesc: 'বহুভাষিক যোগাযোগের মাধ্যমে রোগী ও দলগত কাজে সহজ সমন্বয়।',
      originTitle: 'ORIGIN & REGION',
      originValue: 'Palpur, Gosaba, West Bengal',
      originDesc: 'সুন্দরবন উপকূলবর্তী অঞ্চলের শান্ত পরিবেশ ও কর্মতৎপর প্রেরণা।',
      statusLabel: 'STATUS:',
      statusActive: 'Active Professional',
      disclosureBtn: 'ব্যক্তিগত পরিচয় (Personal Disclosure)',
      fatherLabel: "FATHER'S NAME:",
      addressLabel: 'POSTAL ADDRESS:',
      sourceNote: 'SOURCE NOTE:',
      timeline: [
        {
          id: 'kalimpong',
          title: 'Radiology Technologist',
          organization: 'District Hospital Kalimpong / Eskag Sanjeevani',
          period: 'August 2020 – Till Now',
          location: 'Kalimpong, West Bengal',
          description:
            'ডিজিটাল এক্স-রে ও ডায়াগনস্টিক ইমেজিং বিভাগে দায়িত্ব পালন। রোগীর পজিশনিং, রেডিয়েশন সুরক্ষা ও স্পষ্ট মেডিক্যাল স্ক্যান নিশ্চিতকরণ।',
          statusNote:
            'বর্তমান কর্মসংস্থান সংক্রান্ত তথ্য উৎস CV অনুযায়ী সংরক্ষিত; নিয়মিত হালনাগাদের যোগ্য।',
        },
        {
          id: 'greenview',
          title: 'Radiology Technologist',
          organization: 'Green View Clinic',
          period: 'March 2020 – June 2020',
          location: 'West Bengal',
          description:
            'ডায়াগনস্টিক এক্স-রে সেবা প্রদান এবং রোগীর প্রয়োজনীয় সুরক্ষা প্রটোকল বজায় রেখে কাজ করা।',
        },
        {
          id: 'barasat',
          title: 'Intern Radiology Technologist',
          organization: 'Barasat District Hospital',
          period: 'September 2019 – February 2020',
          location: 'Barasat, West Bengal',
          description:
            'রেডিওলজি বিভাগে ব্যবহারিক ইন্টার্নশিপ—বিভিন্ন এক্স-রে প্রসিডিউর, ইমেজিং টেকনিক ও পেশাদার হসপিটাল ওয়ার্কফ্লোর প্রত্যক্ষ অভিজ্ঞতা।',
        },
      ],
      education: [
        {
          id: 'vivo',
          degree: 'Radiology & Imaging Technology',
          institution: 'VIVO Healthcare, Jodhpur Park',
          period: '2019',
          location: 'Kolkata, West Bengal',
          details: [
            'Digital X-Ray, CT Scan ও MRI ইমেজিংয়ের ফান্ডামেন্টাল ট্রেনিং',
            'রেডিয়েশন প্রটেকশন প্রোটোকল ও ALARA প্রিন্সিপল',
            'অ্যানাটমিক্যাল পজিশনিং ও মেডিক্যাল ডার্ক রুম টেকনিক',
          ],
        },
        {
          id: 'diploma',
          degree: 'Diploma / Technical Education',
          institution: 'Recognized Technical Board',
          period: 'উৎস অনুযায়ী নথিভুক্ত',
          location: 'West Bengal',
          status: 'In Progress (CV অনুযায়ী নথিভুক্ত)',
          details: [
            'উৎস নথিতে এই কোর্সের চলমান স্ট্যাটাস উল্লেখ রয়েছে',
            'প্রযুক্তি ও টেকনিক্যাল বিষয়ে ধারাবাহিক জ্ঞানার্জন',
          ],
        },
        {
          id: 'school',
          degree: 'Secondary & Higher Secondary Education',
          institution: 'West Bengal State Board',
          period: 'সমাপ্ত',
          location: 'West Bengal',
          details: [
            'বিজ্ঞান ও সাধারণ শিক্ষায় ভিত্তি',
            'ভাষাগত দক্ষতা: বাংলা, হিন্দি, ইংরেজি ও নেপালি',
          ],
        },
      ],
    },
    radiology: {
      badge: 'MEDICAL IMAGING & TECHNOLOGY',
      heading: 'প্রযুক্তির নির্ভুলতায়, মানুষের পাশে।',
      subtitle:
        'ডায়াগনস্টিক ইমেজিংয়ে রোগীর নিরাপত্তা ও নিখুঁত স্ক্যান নিশ্চিত করতে প্রতিটি মোডালিটির বৈজ্ঞানিক নিয়ম ও স্ট্যান্ডার্ড কর্মপ্রবাহ অনুসরণ করি।',
      workflowBadge: 'TECHNOLOGIST WORKFLOW',
      descTitle: 'মোডালিটি বিবরণ ও কাজের ক্ষেত্র',
      scientificPrinciple: 'SCIENTIFIC PRINCIPLE:',
      checklistTitle: 'KEY PROTOCOL & CHECKLIST',
      alaraTitle: 'রেডিয়েশন সুরক্ষা ও রোগীর নিরাপত্তা (ALARA Standard)',
      alaraDesc:
        'রেডিওলজি টেকনোলজির সর্বোচ্চ নীতি হলো ALARA (As Low As Reasonably Achievable)। রোগীর জন্য অপ্রয়োজনীয় এক্সপোজার রোধ করতে ফিল্ড অব ভিউ (FOV) ও কলিমেশনের সুনির্দিষ্ট পরিমাপ ব্যবহার করা হয়। গর্ভবতী নারী ও শিশুদের ক্ষেত্রে বিশেষ সতর্কতা, লিড অ্যাপ্রন এবং থাইরয়েড শিল্ডের সার্বক্ষণিক প্রয়োগ রোগীর বিশ্বাস ও সুরক্ষা দৃঢ় করে।',
      timeLabel: 'TIME REDUCTION',
      timeDesc: 'সর্বনিম্ন এক্সপোজার টাইমে সর্বোচ্চ ইমেজ রেজোলিউশন।',
      distLabel: 'DISTANCE SAFETY',
      distDesc: 'ইনভার্স স্কয়ার ল অনুযায়ী নিরাপদ দূরত্ব বজায় রাখা।',
      shieldLabel: 'LEAD SHIELDING',
      shieldDesc: 'সংবেদনশীল অঙ্গের সুরক্ষায় স্ট্যান্ডার্ড লেড বেরিয়ার।',
      modalities: [
        {
          id: 'mri',
          title: 'MRI (Magnetic Resonance Imaging)',
          subTitle: 'ম্যাগনেটিক রেজোন্যান্স ইমেজিং',
          description:
            'শক্তিশালী চুম্বক ক্ষেত্র এবং রেডিও তরঙ্গের সাহায্যে মানবদেহের নরম টিস্যু ও অভ্যন্তরীণ অঙ্গপ্রত্যঙ্গের অত্যন্ত বিশদ ও স্পষ্ট ক্রস-সেকশনাল চিত্র তৈরি করা হয়।',
          principles:
            'নন-আয়োনাইজিং রেডিওফ্রিকোয়েন্সি ও ম্যাগনেটিক ফিল্ডের সাহায্যে নিখুঁত নরম টিস্যু রেজোলিউশন।',
          keyWorkflows: [
            'রোগীর ধাতব বস্তু ও সেফটি স্ক্রিনিং পরীক্ষা',
            'সঠিক কয়েল নির্বাচন ও সঠিক পজিশনিং',
            'নয়েজ প্রটেকশন ও রোগী কমফোর্ট মনিটরিং',
            'হাই-রেজোলিউশন ইমেজ সিকোয়েন্স ক্যাপচার',
          ],
        },
        {
          id: 'ct',
          title: 'CT Scan (Computed Tomography)',
          subTitle: 'কম্পিউটেড টমোগ্রাফি',
          description:
            'ঘূর্ণায়মান এক্স-রে টিউব ও ডিজিটাল ডিটেক্টরের মাধ্যমে শরীরের পাতলা স্লাইস ইমেজ ধারণ করা হয়, যা জটিল ফ্র্যাকচার ও অভ্যন্তরীণ ট্রমা দ্রুত নির্ণয়ে অপরিহার্য।',
          principles: 'ক্রস-সেকশনাল এক্স-রে অ্যাটেনুয়েশন ডেটার কম্পিউটার প্রসেসিং।',
          keyWorkflows: [
            'সঠিক স্লাইস থিকনেস ও ফিল্ড অব ভিউ (FOV) নির্ধারণ',
            'কনট্রাস্ট বা নন-কনট্রাস্ট প্রটোকল প্রস্তুতি',
            'রোগীর শ্বাস-প্রশ্বাস নির্দেশনার সঠিক সমন্বয়',
            '3D মাল্টিপ্ল্যানার রিকনস্ট্রাকশন (MPR)',
          ],
        },
        {
          id: 'xray',
          title: 'Digital X-Ray (DR & CR)',
          subTitle: 'ডিজিটাল এক্স-রে',
          description:
            'অত্যাধুনিক ডিজিটাল ডিটেক্টর ব্যবহার করে ন্যূনতম রেডিয়েশনে হাড়ের ফ্র্যাকচার, বুকের সংক্রমণ ও অর্থোপেডিক সমস্যা নিখুঁতভাবে ধারণ করা।',
          principles: 'আয়নাইজিং রেডিয়েশন এবং অপ্টিমাইজড এক্সপোজার টাইম।',
          keyWorkflows: [
            'অঙ্গভেদে সঠিক কেভি (kVp) ও এমএএস (mAs) এক্সপোজার নির্ধারণ',
            'রোগীর আরামদায়ক ও স্ট্যান্ডার্ড অ্যানাটমিক্যাল পজিশনিং',
            'লিড অ্যাপ্রন ও থাইরয়েড শিল্ডের মাধ্যমে রেডিয়েশন সুরক্ষা',
            'ডিজিটাল ইমেজ প্রসেসিং ও কনট্রাস্ট অপ্টিমাইজেশন',
          ],
        },
        {
          id: 'pacs',
          title: 'PACS & Digital Workflow',
          subTitle: 'প্যাকস ও ডিজিটাল কর্মপ্রবাহ',
          description:
            'পিকচার আর্কাইভিং অ্যান্ড কমিউনিকেশন সিস্টেম (PACS) ও DICOM ফরম্যাটের মাধ্যমে ইমেজ দ্রুত সংরক্ষণ, স্থানান্তর এবং রেডিওলজিস্টদের পর্যালোচনার জন্য প্রস্তুত করা।',
          principles: 'ডিজিটাল হেলথকেয়ার ইন্টারঅপারেবিলিটি ও স্ট্যান্ডার্ডাইজড ওয়ার্কফ্লো।',
          keyWorkflows: [
            'DICOM মেটাডেটা সঠিক যাচাই ও স্টোরিং',
            'রেডিওলজিস্ট কনসোল ও ক্লিনিশিয়ান ভিউয়ারে দ্রুত ট্রান্সফার',
            'মেডিক্যাল ইমেজ ডেটা ব্যাকআপ ও গোপনীয়তা নিশ্চিতকরণ',
          ],
        },
        {
          id: 'safety',
          title: 'Radiation Safety & ALARA Principle',
          subTitle: 'রেডিয়েশন সুরক্ষা ও রোগী সচেতনতা',
          description:
            'ALARA (As Low As Reasonably Achievable) নীতি অনুযায়ী রোগীর জন্য ন্যূনতম কার্যকর রেডিয়েশন প্রয়োগ এবং কর্মীদের সর্বোচ্চ সুরক্ষা প্রদান।',
          principles: 'সর্বনিম্ন রেডিয়েশন এক্সপোজারে সর্বোচ্চ ডায়াগনস্টিক মান বজায় রাখা।',
          keyWorkflows: [
            'লিড অ্যাপ্রন, গোনাড শিল্ড ও থাইরয়েড গার্ড ব্যবহার',
            'কলিমেশন (Collimation) নিয়ন্ত্রণ করে অপ্রয়োজনীয় এক্সপোজার কমানো',
            'ভয় বা উদ্বেগ কমাতে রোগীর সাথে ইতিবাচক ও স্পষ্ট যোগাযোগ',
            'রেডিয়েশন ব্যাজ (TLD) মনিটরিং ও সেফটি স্ট্যান্ডার্ড রক্ষা',
          ],
        },
      ],
    },
    creative: {
      badge: 'CREATIVE DISCIPLINES',
      heading: 'ভাবনা থেকে দৃশ্য, দৃশ্য থেকে অভিজ্ঞতা।',
      subtitle:
        'ফটোগ্রাফি, ভিডিও, ডিজিটাল আর্ট, আধুনিক ওয়েব ইন্টারফেস এবং 3D অ্যানিমেশনের মাধ্যমে সৃজনশীল ভাবনার বাস্তবরূপ দেওয়ার প্রচেষ্টা।',
      spotlight: 'DISCIPLINE SPOTLIGHT',
      viewPortfolio: 'VIEW IN PORTFOLIO',
      approachTitle: 'কাজের পদ্ধতি ও দৃষ্টিভঙ্গি',
      toolsTitle: 'TOOLS & TECHNICAL CAPABILITIES',
      focusTitle: 'CORE FOCUS AREAS',
      categories: [
        {
          id: 'photography',
          name: 'Photography',
          title: 'ফটোগ্রাফি',
          summary: 'আলো, ফ্রেম ও মুহূর্তকে ছবির মাধ্যমে তুলে ধরি।',
          detailedDescription:
            'ক্যামেরার লেন্সে আলোর সঠিক ব্যবহার, কম্পোজিশন ও সাবজেক্টের অনুভূতির সংযোগ ঘটিয়ে ফ্রেমবন্দি করি প্রকৃতির রূপ, পোর্ট্রেট ও নান্দনিক মুহূর্ত। মেডিক্যাল ইমেজিংয়ের নিখুঁত চোখ আমাকে ক্যামেরার ফ্রেমিংয়ে বাড়তি সতর্কতা দেয়।',
          tools: ['Manual Camera Controls', 'Lighting Balancing', 'Color Calibration'],
          areasOfFocus: ['Landscape & Nature', 'Portrait & Street', 'Macro & Product Framing'],
        },
        {
          id: 'videography',
          name: 'Videography',
          title: 'ভিডিওগ্রাফি',
          summary: 'দৃশ্য, গতি ও গল্প মিলিয়ে ভিডিও তৈরি করি।',
          detailedDescription:
            'চলমান ছবির ভেতর দিয়ে অনুভূতির গল্প তৈরি। সিনেমাটিক ফ্রেম রেট, ক্যামেরা মুভমেন্ট ও সঠিক দৃশ্য পরিকল্পনার মাধ্যমে আকর্ষণীয় ভিডিও কনটেন্ট তৈরি করা।',
          tools: ['Video Camera Angles', 'Dynamic Gimbal Work', 'Cinematic Color Grading'],
          areasOfFocus: ['Short Storytelling', 'Cinematic Clips', 'Reels & Event Highlights'],
        },
        {
          id: 'graphic-design',
          name: 'Graphic Design',
          title: 'গ্রাফিক ডিজাইন',
          summary: 'পোস্টার, ব্যানার ও ডিজিটাল ভিজ্যুয়ালের ডিজাইন নিয়ে কাজ করি।',
          detailedDescription:
            'রং, টাইপোগ্রাফি এবং শেপের সমন্বয়ে প্রভাবশালী ভিজ্যুয়াল তৈরি। ব্র্যান্ডের পরিচয় ও বার্তা সহজে দর্শকের কাছে পৌঁছে দেওয়ার জন্য পরিষ্কার ও আধুনিক আর্টওয়ার্ক তৈরি করা।',
          tools: ['Vector Layouts', 'Digital Poster Compositions', 'Color Harmony Systems'],
          areasOfFocus: ['Social Media Creatives', 'Posters & Banners', 'Brand Identity Elements'],
        },
        {
          id: 'web-development',
          name: 'Website Development',
          title: 'ওয়েবসাইট ডেভেলপমেন্ট',
          summary: 'পরিচয় ও কাজ তুলে ধরার জন্য সুন্দর, ব্যবহারযোগ্য ওয়েবসাইট তৈরি করি।',
          detailedDescription:
            'আধুনিক ওয়েব প্রযুক্তি ব্যবহার করে রেসপন্সিভ, দৃষ্টিনন্দন ও ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি। যেকোনো ডিভাইসে মসৃণ অভিজ্ঞতা নিশ্চিত করাই মূল লক্ষ্য।',
          tools: ['HTML5 / CSS3', 'React & Tailwind CSS', 'Modern Responsive UI'],
          areasOfFocus: ['Personal Portfolios', 'Fast Single-Page Apps', 'Clean Component Architecture'],
        },
        {
          id: 'ai-tools',
          name: 'AI Tools & Content',
          title: 'AI টুলস ও কনটেন্ট',
          summary: 'AI টুল ব্যবহার করে ভাবনা, কনটেন্ট ও ভিজ্যুয়াল তৈরির কাজ করি।',
          detailedDescription:
            'আধুনিক কৃত্রিম বুদ্ধিমত্তা টুলস ব্যবহার করে সৃজনশীল আইডিয়া এক্সপ্লোর করা, কনটেন্ট স্ক্রিপ্টিং, ভিজ্যুয়াল জেনারেশন প্রম্পটিং এবং কাজের গতি বৃদ্ধি করা।',
          tools: ['Generative Visual Tools', 'Prompt Engineering', 'Creative Workflow Acceleration'],
          areasOfFocus: ['Concept Art Ideation', 'Creative Script Assistance', 'Rapid Asset Prototyping'],
        },
        {
          id: 'animation-3d',
          name: '3D Cartoon Animation',
          title: '3D কার্টুন অ্যানিমেশন',
          summary: 'চরিত্র, দৃশ্য ও চলনের সমন্বয়ে কার্টুন অ্যানিমেশন তৈরি করি।',
          detailedDescription:
            '3D স্পেসে চরিত্র ও পরিবেশ তৈরি করে তাদের জীবন্ত চলন দেওয়া। কার্টুন গল্প, ছোট দৃশ্য ও আকর্ষণীয় চরিত্র রূপায়ণে 3D অ্যানিমেশনের নানা দিক নিয়ে কাজ করছি।',
          tools: ['3D Character Rigging', 'Keyframe Animation', 'Scene Lighting & Rendering'],
          areasOfFocus: ['Cartoon Characters', 'Short Expressive Clips', 'Stylized 3D Environments'],
        },
        {
          id: 'market-learning',
          name: 'Market Learning',
          title: 'বাজার সম্পর্কে শেখা',
          summary: 'শেয়ারবাজারের সাধারণ ধারণা ও বাজার বিশ্লেষণ সম্পর্কে শেখার আগ্রহ রয়েছে।',
          detailedDescription:
            'শেয়ার এবং স্টক মার্কেটের মৌলিক বিষয়, টেকনিক্যাল চার্ট বিশ্লেষণ, ঝুঁকি ব্যবস্থাপনা এবং দীর্ঘমেয়াদি আর্থিক শৃঙ্খলা সম্পর্কে ব্যক্তিগত কৌতূহল ও শেখার প্রচেষ্টা। এটি সম্পূর্ণ শিক্ষণীয় স্বার্থে নিবেদিত।',
          tools: ['Candlestick Charts', 'Technical Indicators', 'Risk Management Principles'],
          areasOfFocus: ['Price Action & Trend Analysis', 'Support & Resistance', 'Disciplined Learning Habit'],
        },
      ],
    },
    portfolio: {
      badge: 'PORTFOLIO ARCHIVE',
      heading: 'পোর্টফোলিও ও কাজের গ্যালারি',
      subtitle: 'বিভিন্ন মাধ্যমে কাজের অভিজ্ঞতা ও সৃজনশীল প্রজেক্টের নমুনা ফ্রেমওয়ার্ক।',
      noticeTitle: 'এখানে নির্বাচিত কাজের নমুনা যুক্ত করা হবে।',
      noticeDesc:
        'ফটোগ্রাফি, ভিডিওগ্রাফি, গ্রাফিক ডিজাইন, ওয়েবসাইট ও 3D অ্যানিমেশনের বাছাই করা কাজগুলো এখানে খুব শীঘ্রই সম্পূর্ণভাবে যুক্ত করা হবে। নিচের কার্ডগুলো প্রতিটি মাধ্যমের কাঠামোগত নমুনা প্রদর্শন করছে।',
      filterLabel: 'FILTER:',
      filters: [
        { id: 'all', label: 'সব কাজ' },
        { id: 'photography', label: 'Photography' },
        { id: 'video', label: 'Video' },
        { id: 'design', label: 'Design' },
        { id: 'web', label: 'Web' },
        { id: '3d-ai', label: '3D / AI' },
      ],
      demoBadge: 'নমুনা ফ্রেমওয়ার্ক',
      yearLabel: 'YEAR:',
      roleLabel: 'ROLE:',
      statusLabel: 'STATUS:',
      statusValue: 'নমুনা ফ্রেমওয়ার্ক / আসন্ন প্রকাশনা',
      viewPreview: 'বিস্তারিত প্রিভিউ দেখুন',
      closeModal: 'বন্ধ করুন',
      projects: [
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
      ],
    },
    market: {
      badge: 'EDUCATIONAL DISCIPLINE',
      heading: 'বাজার সম্পর্কে শেখা (Market Learning)',
      subtitle: 'শেয়ারবাজারের সাধারণ ধারণা, প্রাইস অ্যাকশন ও চার্ট বিশ্লেষণের তাত্ত্বিক শিক্ষা ও শৃঙ্খলাবোধ।',
      disclaimerTitle: 'শিক্ষণীয় দৃষ্টিভঙ্গি ও সীমাবদ্ধতা:',
      disclaimerBody:
        'এটি কোনো আর্থিক পরামর্শ, টিপস বা বাণিজ্যিক ট্রেডিং দাবি নয়। কেবল ব্যক্তিগত কৌতূহল থেকে বাজার বিশ্লেষণের মৌলিক সূত্র ও ঝুঁকি ব্যবস্থাপনার নিয়মগুলো জানার একটি ধারাবাহিক শিক্ষণীয় প্রয়াস।',
      chartTitle: 'প্রাইস অ্যাকশন ও চার্ট কাঠামোর প্রাথমিক পাঠ',
      chartBadge: 'CANDLESTICK DYNAMICS',
      support: 'SUPPORT: 18,200 LEVEL',
      discipline: 'DISCIPLINE: RISK-REWARD 1:2',
      resistance: 'RESISTANCE: 18,950 LEVEL',
      pillars: [
        {
          title: 'টেকনিক্যাল অ্যানালিসিস',
          desc: 'ক্যান্ডেলস্টিক প্যাটার্ন, ট্রেন্ডলাইন, সাপোর্ট এবং রেজিস্ট্যান্স লেভেলের যৌক্তিক অনুধাবন।',
        },
        {
          title: 'ঝুঁকি ব্যবস্থাপনা (Risk Management)',
          desc: 'মূলধনের সুরক্ষা নিশ্চিত করা এবং আবেগহীনভাবে স্টপ-লস ও পজিশন সাইজিং মেনে চলার গুরুত্ব।',
        },
        {
          title: 'ধারাবাহিক পড়াশোনা ও মানসিকতা',
          desc: 'দৈনন্দিন খবরের প্রভাব এবং অর্থনীতি ও বিশ্ববাজারের গতিপ্রকৃতি বিশ্লেষণ করার অভ্যাস।',
        },
      ],
    },
    contact: {
      badge: 'DIRECT CHANNELS & DIALOGUE',
      heading: 'আপনার ভাবনা নিয়ে কথা হোক।',
      subtitle:
        'পেশাগত আলোচনা, রেডিওলজি বিষয় কিংবা সৃজনশীল কাজের সহযোগিতায় কথা বলতে পারেন। নিচের যেকোনো মাধ্যমে সরাসরি যোগাযোগ করুন।',
      directTitle: 'সরাসরি যোগাযোগ',
      callLabel: 'CALL OR WHATSAPP',
      emailLabel: 'EMAIL INBOX',
      socialLabel: 'SOCIAL PLATFORMS',
      addressTitle: 'POSTAL & REGIONAL ADDRESS',
      formTitle: 'বার্তা পাঠান',
      formSubtitle: 'ফর্মটি পূরণ করলে আপনার ডিভাইসের ইমেল অ্যাপে একটি খসড়া তৈরি হবে।',
      nameLabel: 'আপনার নাম (Full Name) *',
      namePlaceholder: 'যেমন: অনির্বাণ চক্রবর্তী',
      contactLabel: 'ইমেল বা ফোন নম্বর *',
      contactPlaceholder: 'your.email@example.com অথবা +91...',
      subjectLabel: 'বার্তার বিষয় (Subject) *',
      subjectPlaceholder: 'যেমন: রেডিওলজি কাজ বা নতুন প্রজেক্টের আলোচনা',
      messageLabel: 'বার্তা (Message) *',
      messagePlaceholder: 'আপনার বার্তা বিস্তারিত লিখুন...',
      submitBtn: 'ইমেল অ্যাপে খুলুন (Open in Email App)',
      note: '* এই ফর্মটি আপনার ডিভাইসের ইমেল অ্যাপে একটি খসড়া বার্তা তৈরি করবে। কোনো ব্যাকএন্ড সার্ভারে তথ্য জমা রাখা হয় না।',
      draftSuccess: 'আপনার ইমেল অ্যাপ খোলা হয়েছে। সেখান থেকে সরাসরি বার্তাটি পাঠাতে পারেন।',
      errors: {
        name: 'অনুগ্রহ করে আপনার নাম লিখুন।',
        contact: 'অনুগ্রহ করে আপনার ইমেল বা ফোন নম্বর লিখুন।',
        subject: 'বার্তার বিষয় লিখুন।',
        message: 'কমপক্ষে ১০টি অক্ষরে আপনার বার্তা লিখুন।',
      },
    },
    privacy: {
      backBtn: 'হোমে ফিরে যান',
      badge: 'PRIVACY & TRANSPARENCY',
      heading: 'গোপনীয়তা নীতি (Privacy Policy)',
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
    },
    footer: {
      tagline: 'মেডিক্যাল ইমেজিংয়ের নির্ভুলতা এবং ক্রিয়েটিভ মিডিয়ার নান্দনিকতার সমন্বয়ে একটি অনন্য ব্যক্তিগত পোর্টফোলিও।',
      quickNav: 'QUICK NAVIGATION',
      addressTitle: 'REGIONAL ADDRESS',
      copyright: 'All rights reserved.',
      backToTop: 'BACK TO TOP',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      radiology: 'Radiology',
      creative: 'Creative Works',
      portfolio: 'Portfolio',
      marketLearning: 'Market Learning',
      contact: 'Contact',
      contactCta: 'Contact Me',
    },
    hero: {
      eyebrow: 'SRIKRISHNA BAR',
      roleBadge: 'Radiology Technologist • Creative Professional',
      heading: 'Precision in Medical Imaging, Devotion to Patient Care.',
      subHeading: 'Precision in Imaging. Creativity in Every Frame.',
      description:
        'I am SRIKRISHNA BAR, a Radiology Technician. In my professional journey begun in 2020, I have gained extensive hands-on experience in MRI, CT Scan, and Digital X-ray. My primary mission is to work responsibly with highest priority on patient comfort, radiation safety, and delivering high-quality diagnostic imaging.',
      primaryBtn: 'View My Work',
      secondaryBtn: 'About Me',
      connect: 'CONNECT:',
      verified: 'VERIFIED PROFESSIONAL',
      scannerCaption: 'Artistic Presentation of Medical Imaging',
      scannerPause: 'Pause',
      scannerPlay: 'Play',
      portraitId: 'PORTRAIT IDENTIFIER',
      cvSource: 'CV SOURCE MATERIAL',
    },
    homeCards: {
      badge: 'EXPLORE DISCIPLINES',
      heading: 'My Professional & Creative Domains',
      description:
        'From diagnostic medical imaging to visual storytelling—driven by technology, continuous learning, and creative discipline. Select any domain below to explore in detail.',
      viewDetails: 'View Details',
      cards: [
        {
          id: 'about',
          title: 'About Me',
          subtitle: 'Journey & Education',
          description: 'My background, clinical education, and professional experience.',
          destination: 'about',
        },
        {
          id: 'radiology',
          title: 'Radiology',
          subtitle: 'Medical Imaging',
          description: 'MRI, CT, Digital X-ray, and clinical technologist workflows.',
          destination: 'radiology',
        },
        {
          id: 'creative',
          title: 'Creative Works',
          subtitle: 'Visual Art & Media',
          description: 'Photography, videography, graphic design, web, and animation.',
          destination: 'creative',
        },
        {
          id: 'portfolio',
          title: 'Portfolio',
          subtitle: 'Work Showcase',
          description: 'Curated projects, creative explorations, and media case studies.',
          destination: 'portfolio',
        },
        {
          id: 'market-learning',
          title: 'Market Learning',
          subtitle: 'Analysis & Knowledge',
          description: 'Financial market fundamentals, price action, and discipline.',
          destination: 'market-learning',
        },
        {
          id: 'contact',
          title: 'Contact',
          subtitle: 'Dialogue & Collaboration',
          description: 'Direct inquiries, professional discussions, and collaborations.',
          destination: 'contact',
        },
      ],
    },
    about: {
      badge: 'BIOGRAPHY & BACKGROUND',
      heading: 'About Me',
      subtitle:
        'From the clinical precision of medical imaging to the evocative art of visual storytelling—my background, qualifications, and philosophy.',
      tabs: {
        bio: 'Bio & Philosophy',
        experience: 'Experience',
        education: 'Education & Training',
      },
      bioTitle: 'Precise Positioning, High-Quality Imaging & Responsible Care',
      bioP1:
        'I am **SRIKRISHNA BAR**. In 2020, I commenced my professional path in radiology and medical imaging. As a radiology technologist, my clinical practice places utmost importance on accurate anatomical positioning, diagnostic-grade image acquisition, and patient comfort.',
      bioP2:
        'Whether conducting Digital X-Ray, CT Scan, or MRI—I adhere strictly to clinical protocols to delineate the required anatomical regions with clarity. High-quality imaging provides essential support for physicians and radiologists in diagnostic evaluation and treatment planning.',
      bioSections: [
        {
          title: 'Precise Positioning, High-Quality Imaging & Responsible Care',
          paragraphs: [
            'I am **SRIKRISHNA BAR**. In 2020, I commenced my professional path in radiology and medical imaging. As a radiology technologist, my clinical practice places utmost importance on accurate anatomical positioning, diagnostic-grade image acquisition, and patient comfort.',
            'Whether conducting Digital X-Ray, CT Scan, or MRI—I adhere strictly to clinical protocols to delineate the required anatomical regions with clarity. High-quality imaging provides essential support for physicians and radiologists in diagnostic evaluation and treatment planning.',
            'Alongside technical proficiency, explaining the examination process clearly to patients, remaining empathetic to their anxiety, and adhering stringently to radiation safety protocols are an integral part of my professional commitment.',
          ],
        },
        {
          title: 'Meticulous Observation & Compassionate Practice',
          paragraphs: [
            'The field of radiology has taught me to appreciate the profound significance of subtle details. Patient orientation, anatomical visibility, and imaging fidelity—every factor demands disciplined scrutiny. This discipline has shaped my patience, focus, and dedication to excellence.',
            'Behind every radiological examination is a human being—with their comfort, vulnerability, and therapeutic requirements. I believe in harmonizing advanced technical precision with compassionate care. Reassuring patients, offering supportive guidance, and collaborating seamlessly with the clinical team define my practice.',
            'I am committed to continually enriching this clinical mindset through ongoing learning, rigorous reflection, and real-world diagnostic experience.',
          ],
        },
      ],
      langTitle: 'LANGUAGES SPOKEN',
      langValue: 'Bengali • Hindi • English • Nepali',
      langDesc: 'Multilingual proficiency facilitating clear patient communication and teamwork.',
      originTitle: 'ORIGIN & REGION',
      originValue: 'Palpur, Gosaba, West Bengal',
      originDesc: 'Peaceful coastal environment of the Sundarbans, fostering resilience and dedication.',
      statusLabel: 'STATUS:',
      statusActive: 'Active Professional',
      disclosureBtn: 'Personal Information (Father & Postal Address)',
      fatherLabel: "FATHER'S NAME:",
      addressLabel: 'POSTAL ADDRESS:',
      sourceNote: 'SOURCE NOTE:',
      timeline: [
        {
          id: 'kalimpong',
          title: 'Radiology Technologist',
          organization: 'District Hospital Kalimpong / Eskag Sanjeevani',
          period: 'August 2020 – Present',
          location: 'Kalimpong, West Bengal',
          description:
            'Managing Digital X-ray and diagnostic imaging services. Responsible for patient positioning, strict radiation protection protocols, and optimal scan quality.',
          statusNote:
            'Employment details preserved accurately according to source CV documentation.',
        },
        {
          id: 'greenview',
          title: 'Radiology Technologist',
          organization: 'Green View Clinic',
          period: 'March 2020 – June 2020',
          location: 'West Bengal',
          description:
            'Administered routine and specialized diagnostic X-ray procedures adhering to comprehensive patient safety standards.',
        },
        {
          id: 'barasat',
          title: 'Intern Radiology Technologist',
          organization: 'Barasat District Hospital',
          period: 'September 2019 – February 2020',
          location: 'Barasat, West Bengal',
          description:
            'Practical hospital internship covering diverse radiography protocols, imaging equipment handling, and patient care workflows.',
        },
      ],
      education: [
        {
          id: 'vivo',
          degree: 'Radiology & Imaging Technology',
          institution: 'VIVO Healthcare, Jodhpur Park',
          period: '2019',
          location: 'Kolkata, West Bengal',
          details: [
            'Fundamental clinical training in Digital X-ray, CT Scan, and MRI physics',
            'Radiation protection regulations and ALARA principle mastery',
            'Human anatomical positioning and medical imaging techniques',
          ],
        },
        {
          id: 'diploma',
          degree: 'Diploma / Technical Education',
          institution: 'Recognized Technical Board',
          period: 'Documented in Records',
          location: 'West Bengal',
          status: 'In Progress (as per CV)',
          details: [
            'Documented ongoing academic/technical qualification in CV records',
            'Continuous enhancement of technical and engineering knowledge',
          ],
        },
        {
          id: 'school',
          degree: 'Secondary & Higher Secondary Education',
          institution: 'West Bengal State Board',
          period: 'Completed',
          location: 'West Bengal',
          details: [
            'Strong foundation in science and general academics',
            'Language fluency: Bengali, Hindi, English, and Nepali',
          ],
        },
      ],
    },
    radiology: {
      badge: 'MEDICAL IMAGING & TECHNOLOGY',
      heading: 'Precision in Technology, Dedicated to Patient Care.',
      subtitle:
        'Committed to scientific rigor, patient comfort, and radiation safety across diagnostic modalities.',
      workflowBadge: 'TECHNOLOGIST WORKFLOW',
      descTitle: 'Modality Scope & Clinical Practice',
      scientificPrinciple: 'SCIENTIFIC PRINCIPLE:',
      checklistTitle: 'KEY PROTOCOL & CHECKLIST',
      alaraTitle: 'Radiation Safety & Patient Well-being (ALARA Standard)',
      alaraDesc:
        'The paramount guideline of radiology technology is ALARA (As Low As Reasonably Achievable). Through exact collimation, optimized exposure parameters, and protective lead shielding, patient radiation dose is minimized without compromising diagnostic image fidelity.',
      timeLabel: 'TIME REDUCTION',
      timeDesc: 'Minimum exposure time for maximum diagnostic resolution.',
      distLabel: 'DISTANCE SAFETY',
      distDesc: 'Strict adherence to the inverse-square law for staff safety.',
      shieldLabel: 'LEAD SHIELDING',
      shieldDesc: 'Standard lead aprons and thyroid guards for sensitive tissue.',
      modalities: [
        {
          id: 'mri',
          title: 'MRI (Magnetic Resonance Imaging)',
          subTitle: 'Magnetic Resonance Imaging',
          description:
            'Utilizing powerful static magnetic fields and radiofrequency pulses to generate exquisite cross-sectional visualizations of soft tissue, brain, and joints.',
          principles:
            'Non-ionizing radiofrequency excitation and proton relaxation in strong magnetic fields.',
          keyWorkflows: [
            'Rigorous ferromagnetic object and implant safety screening',
            'Appropriate RF coil selection and patient alignment',
            'Acoustic noise protection and real-time patient comfort monitoring',
            'High-resolution multi-parametric image acquisition',
          ],
        },
        {
          id: 'ct',
          title: 'CT Scan (Computed Tomography)',
          subTitle: 'Computed Tomography',
          description:
            'High-speed rotating X-ray tubes paired with digital detector arrays to produce thin axial slices vital for trauma, fractures, and acute evaluations.',
          principles: 'Computerized processing of cross-sectional X-ray attenuation coefficients.',
          keyWorkflows: [
            'Optimal slice thickness and Field of View (FOV) calibration',
            'IV contrast timing and scan preparation protocols',
            'Breathing instruction coordination for motion artifact elimination',
            '3D Multi-Planar Reconstruction (MPR)',
          ],
        },
        {
          id: 'xray',
          title: 'Digital X-Ray (DR & CR)',
          subTitle: 'Digital Radiography',
          description:
            'State-of-the-art flat-panel detectors capturing orthopedic, thoracic, and skeletal anatomy with minimal radiation exposure.',
          principles: 'Ionizing radiation with digital photo-stimulable detection.',
          keyWorkflows: [
            'Exact kVp and mAs exposure parameter calculation',
            'Standardized anatomical positioning for reproducible diagnosis',
            'Lead apron and thyroid shielding for radiation minimization',
            'Digital contrast optimization and PACS transfer',
          ],
        },
        {
          id: 'pacs',
          title: 'PACS & Digital Workflow',
          subTitle: 'Picture Archiving & Communication',
          description:
            'Digital storage, archiving, and transmission of medical imaging data utilizing DICOM standards for seamless radiologist interpretation.',
          principles: 'Healthcare interoperability, DICOM standard conformance, and secure storage.',
          keyWorkflows: [
            'DICOM metadata verification and modality worklist syncing',
            'High-speed transfer to radiologist reading workstations',
            'Image data integrity, archiving, and confidentiality preservation',
          ],
        },
        {
          id: 'safety',
          title: 'Radiation Safety & ALARA Principle',
          subTitle: 'Radiation Protection Protocol',
          description:
            'Applying the ALARA philosophy to guarantee minimal radiation exposure while maintaining pristine diagnostic clarity.',
          principles: 'Optimal diagnostic benefit with minimum radiation burden.',
          keyWorkflows: [
            'Application of lead aprons, gonad shields, and thyroid collars',
            'Beam collimation to irradiated region of interest only',
            'Empathetic patient reassurance to mitigate anxiety and motion',
            'TLD dosimeter badge monitoring and compliance checks',
          ],
        },
      ],
    },
    creative: {
      badge: 'CREATIVE DISCIPLINES',
      heading: 'From Thought to Visual, from Visual to Experience.',
      subtitle:
        'Transforming creative concepts into reality through photography, videography, graphic design, web interfaces, and 3D animation.',
      spotlight: 'DISCIPLINE SPOTLIGHT',
      viewPortfolio: 'VIEW IN PORTFOLIO',
      approachTitle: 'Methodology & Vision',
      toolsTitle: 'TOOLS & TECHNICAL CAPABILITIES',
      focusTitle: 'CORE FOCUS AREAS',
      categories: [
        {
          id: 'photography',
          name: 'Photography',
          title: 'Photography',
          summary: 'Capturing light, framing, and decisive moments.',
          detailedDescription:
            'Harnessing natural lighting, careful composition, and emotional resonance to capture landscapes, portraits, and expressive scenes. The precision of medical imaging enriches my photographic eye.',
          tools: ['Manual Camera Controls', 'Lighting Balancing', 'Color Calibration'],
          areasOfFocus: ['Landscape & Nature', 'Portrait & Street', 'Macro & Product Framing'],
        },
        {
          id: 'videography',
          name: 'Videography',
          title: 'Videography',
          summary: 'Crafting stories through motion, visuals, and rhythm.',
          detailedDescription:
            'Directing visual narratives through deliberate frame rates, cinematic camera movement, and coherent scene pacing to deliver engaging video content.',
          tools: ['Video Camera Angles', 'Dynamic Gimbal Work', 'Cinematic Color Grading'],
          areasOfFocus: ['Short Storytelling', 'Cinematic Clips', 'Reels & Event Highlights'],
        },
        {
          id: 'graphic-design',
          name: 'Graphic Design',
          title: 'Graphic Design',
          summary: 'Designing impactful posters, banners, and digital creatives.',
          detailedDescription:
            'Harmonizing color palettes, typography, and clean geometry to create distinctive branding elements that communicate with clarity.',
          tools: ['Vector Layouts', 'Digital Poster Compositions', 'Color Harmony Systems'],
          areasOfFocus: ['Social Media Creatives', 'Posters & Banners', 'Brand Identity Elements'],
        },
        {
          id: 'web-development',
          name: 'Website Development',
          title: 'Website Development',
          summary: 'Building responsive, accessible, and modern web applications.',
          detailedDescription:
            'Engineering responsive, user-friendly digital interfaces using modern web standards. Prioritizing performance, responsive layout, and seamless interactivity across all screen sizes.',
          tools: ['HTML5 / CSS3', 'React & Tailwind CSS', 'Modern Responsive UI'],
          areasOfFocus: ['Personal Portfolios', 'Fast Single-Page Apps', 'Clean Component Architecture'],
        },
        {
          id: 'ai-tools',
          name: 'AI Tools & Content',
          title: 'AI Tools & Content',
          summary: 'Utilizing modern AI tools to accelerate visual ideation.',
          detailedDescription:
            'Leveraging state-of-the-art AI systems for concept generation, content scripting assistance, prompt engineering, and creative workflow acceleration.',
          tools: ['Generative Visual Tools', 'Prompt Engineering', 'Creative Workflow Acceleration'],
          areasOfFocus: ['Concept Art Ideation', 'Creative Script Assistance', 'Rapid Asset Prototyping'],
        },
        {
          id: 'animation-3d',
          name: '3D Cartoon Animation',
          title: '3D Cartoon Animation',
          summary: 'Bringing animated characters and stylized scenes to life.',
          detailedDescription:
            'Exploring 3D modeling, rigging, and keyframe animation to create charismatic cartoon characters, expressive gestures, and stylized virtual environments.',
          tools: ['3D Character Rigging', 'Keyframe Animation', 'Scene Lighting & Rendering'],
          areasOfFocus: ['Cartoon Characters', 'Short Expressive Clips', 'Stylized 3D Environments'],
        },
        {
          id: 'market-learning',
          name: 'Market Learning',
          title: 'Market Learning',
          summary: 'Fostering knowledge of financial markets and technical analysis.',
          detailedDescription:
            'Studying financial market mechanics, technical price action, risk management principles, and long-term discipline as a passionate educational pursuit.',
          tools: ['Candlestick Charts', 'Technical Indicators', 'Risk Management Principles'],
          areasOfFocus: ['Price Action & Trend Analysis', 'Support & Resistance', 'Disciplined Learning Habit'],
        },
      ],
    },
    portfolio: {
      badge: 'PORTFOLIO ARCHIVE',
      heading: 'Portfolio & Project Showcase',
      subtitle: 'Demonstrating technical frameworks and creative case studies across media.',
      noticeTitle: 'Curated Works Will Be Added Here Soon.',
      noticeDesc:
        'Selected works in photography, videography, graphic design, web interfaces, and 3D animation are currently being prepared for presentation. The cards below exhibit the structural framework of each medium.',
      filterLabel: 'FILTER:',
      filters: [
        { id: 'all', label: 'All Works' },
        { id: 'photography', label: 'Photography' },
        { id: 'video', label: 'Video' },
        { id: 'design', label: 'Design' },
        { id: 'web', label: 'Web' },
        { id: '3d-ai', label: '3D / AI' },
      ],
      demoBadge: 'Sample Framework',
      yearLabel: 'YEAR:',
      roleLabel: 'ROLE:',
      statusLabel: 'STATUS:',
      statusValue: 'Framework Demonstration / Upcoming Release',
      viewPreview: 'View Detailed Preview',
      closeModal: 'Close',
      projects: [
        {
          id: 'project-1',
          title: 'Visual Storytelling Frame',
          category: 'photography',
          categoryLabel: 'Photography',
          description: 'Exploration of natural light balancing, high dynamic range, and selective focal points.',
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
          description: 'Cinematic visual sequence exploring temporal transitions and mood pacing.',
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
          description: 'Contemporary dark-canvas vector poster integrating vibrant accent palettes.',
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
          description: 'High-performance personal web portfolio featuring 3D Three.js integration and responsive navigation.',
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
          description: 'Character rigging, walk-cycle timing, and facial expression modeling in 3D space.',
          role: '3D Animator',
          tools: ['3D Modeling Space', 'Keyframe Timing'],
          year: '2025',
          isDemonstration: true,
        },
      ],
    },
    market: {
      badge: 'EDUCATIONAL DISCIPLINE',
      heading: 'Market Learning & Financial Discipline',
      subtitle: 'Understanding price action dynamics, market cycles, and risk management.',
      disclaimerTitle: 'Educational Purpose & Scope:',
      disclaimerBody:
        'This section represents personal academic interest in financial charts and risk principles. It does NOT constitute financial advice, trading signals, or investment recommendations.',
      chartTitle: 'Fundamentals of Price Action & Chart Structure',
      chartBadge: 'CANDLESTICK DYNAMICS',
      support: 'SUPPORT: 18,200 LEVEL',
      discipline: 'DISCIPLINE: RISK-REWARD 1:2',
      resistance: 'RESISTANCE: 18,950 LEVEL',
      pillars: [
        {
          title: 'Technical Analysis',
          desc: 'Study of candlestick patterns, market trendlines, support, and resistance structures.',
        },
        {
          title: 'Risk Management',
          desc: 'Capital preservation priority, strict stop-loss discipline, and position sizing rules.',
        },
        {
          title: 'Continuous Education',
          desc: 'Regular review of macroeconomic factors, global indices, and psychological discipline.',
        },
      ],
    },
    contact: {
      badge: 'DIRECT CHANNELS & DIALOGUE',
      heading: 'Let’s Discuss Your Ideas & Projects.',
      subtitle:
        'Reach out for clinical radiography discussions, creative collaborations, or design inquiries.',
      directTitle: 'Direct Contact',
      callLabel: 'CALL OR WHATSAPP',
      emailLabel: 'EMAIL INBOX',
      socialLabel: 'SOCIAL PLATFORMS',
      addressTitle: 'POSTAL & REGIONAL ADDRESS',
      formTitle: 'Send a Message',
      formSubtitle: 'Submitting this form prepares an email draft in your device’s default mail app.',
      nameLabel: 'Your Name (Full Name) *',
      namePlaceholder: 'e.g. Anirban Chakraborty',
      contactLabel: 'Email or Phone Number *',
      contactPlaceholder: 'your.email@example.com or +91...',
      subjectLabel: 'Subject *',
      subjectPlaceholder: 'e.g. Radiology inquiry or creative collaboration',
      messageLabel: 'Message *',
      messagePlaceholder: 'Write your message details here...',
      submitBtn: 'Open in Email App',
      note: '* This form creates an email draft in your local email client. No data is stored on backend servers.',
      draftSuccess: 'Your email application has been opened. You can send the message directly from there.',
      errors: {
        name: 'Please enter your name.',
        contact: 'Please enter your email or phone number.',
        subject: 'Please enter a message subject.',
        message: 'Please write a message with at least 10 characters.',
      },
    },
    privacy: {
      backBtn: 'Back to Home',
      badge: 'PRIVACY & TRANSPARENCY',
      heading: 'Privacy Policy',
      effectiveDate: 'September 11, 2026',
      contactEmail: 'srikrishnabar2000@gmail.com',
      sections: [
        {
          heading: 'Introduction & Mission',
          body: 'This website is a personal portfolio showcasing professional background, qualifications, and creative works with utmost transparency.',
        },
        {
          heading: 'Contact Form & Data Handling',
          body: 'Information entered into the contact form is used solely to generate a draft email on your local device via the mailto protocol. No personal data is stored on any server or external database.',
        },
        {
          heading: 'External Links & Social Platforms',
          body: 'Outbound links to Facebook, Instagram, and YouTube redirect to their respective platforms and are governed by their independent privacy policies and terms of service.',
        },
        {
          heading: 'Cookies & Tracking Technology',
          body: 'This website does not employ commercial advertising cookies, tracking pixels, or intrusive analytics services.',
        },
      ],
    },
    footer: {
      tagline: 'A unique personal portfolio merging the precision of medical imaging with creative media.',
      quickNav: 'QUICK NAVIGATION',
      addressTitle: 'REGIONAL ADDRESS',
      copyright: 'All rights reserved.',
      backToTop: 'BACK TO TOP',
    },
  },
};
