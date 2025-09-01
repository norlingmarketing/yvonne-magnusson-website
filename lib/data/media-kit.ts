export interface PressRelease {
  title: string;
  date: string;
  summary: string;
  category: string;
  downloadUrl: string;
}

export interface MediaKitItem {
  type: string;
  iconName: string;
  description: string;
  items: Array<{
    name: string;
    size: string;
  }>;
  downloadUrl: string;
}

export interface MediaAppearance {
  outlet: string;
  type: string;
  topic: string;
  date: string;
  link: string;
  image: string;
}

// Swedish data
export const pressReleasesSv: PressRelease[] = [
  {
    title: "Yvonne Magnusson Utsedd till Årets Transformationsledare 2024",
    date: "2024-01-20",
    summary: "Erkännande för framgångsrik turnaround av nordisk retailkedja med 47% omsättningstillväxt.",
    category: "Utmärkelse",
    downloadUrl: "/media/press-release-2024-01.pdf"
  },
  {
    title: "Ny Studie: Digital Transformation inom Retail - Kritiska Framgångsfaktorer",
    date: "2023-12-15", 
    summary: "Omfattande undersökning av 50+ transformationsprojekt avslöjar nyckelfaktorer för framgång.",
    category: "Forskningsrapport",
    downloadUrl: "/media/digital-transformation-study-2023.pdf"
  },
  {
    title: "Yvonne Magnusson Blir Styrelseordförande för RetailTech Innovation Hub",
    date: "2023-11-08",
    summary: "Strategisk satsning på att accelerera innovation och digital transformation inom retail.",
    category: "Utnämning", 
    downloadUrl: "/media/press-release-2023-11.pdf"
  }
];

export const pressReleasesEn: PressRelease[] = [
  {
    title: "Yvonne Magnusson Named Transformation Leader of the Year 2024",
    date: "2024-01-20",
    summary: "Recognition for successful turnaround of Nordic retail chain with 47% revenue growth.",
    category: "Award",
    downloadUrl: "/media/press-release-2024-01.pdf"
  },
  {
    title: "New Study: Digital Transformation in Retail - Critical Success Factors",
    date: "2023-12-15", 
    summary: "Comprehensive survey of 50+ transformation projects reveals key factors for success.",
    category: "Research Report",
    downloadUrl: "/media/digital-transformation-study-2023.pdf"
  },
  {
    title: "Yvonne Magnusson Becomes Chairman of RetailTech Innovation Hub",
    date: "2023-11-08",
    summary: "Strategic initiative to accelerate innovation and digital transformation in retail.",
    category: "Appointment", 
    downloadUrl: "/media/press-release-2023-11.pdf"
  }
];

export const mediaKitSv: MediaKitItem[] = [
  {
    type: "Högupplösta Bilder",
    iconName: "ImageIcon",
    description: "Professionella profilbilder och presentationsfoton",
    items: [
      { name: "Yvonne_Magnusson_Portrait_HighRes.jpg", size: "3.2 MB" },
      { name: "Yvonne_Magnusson_Speaking_Event.jpg", size: "2.8 MB" },
      { name: "Yvonne_Magnusson_Boardroom.jpg", size: "2.1 MB" }
    ],
    downloadUrl: "/media/images-package.zip"
  },
  {
    type: "Biografi & CV",
    iconName: "FileText",
    description: "Detaljerad bakgrund och karriärhistorik",
    items: [
      { name: "Yvonne_Magnusson_Biografi_SV.pdf", size: "245 KB" },
      { name: "Yvonne_Magnusson_Biography_EN.pdf", size: "231 KB" },
      { name: "Executive_Summary_CV.pdf", size: "156 KB" }
    ],
    downloadUrl: "/media/biography-package.zip"
  },
  {
    type: "Videomaterial",
    iconName: "Video",
    description: "Keynote-klipp och intervjumaterial",
    items: [
      { name: "Keynote_Transformation_Leadership.mp4", size: "125 MB" },
      { name: "Interview_Retail_Future.mp4", size: "89 MB" },
      { name: "Quick_Intro_Video.mp4", size: "45 MB" }
    ],
    downloadUrl: "/media/video-package.zip"
  }
];

export const mediaKitEn: MediaKitItem[] = [
  {
    type: "High-Resolution Images",
    iconName: "ImageIcon",
    description: "Professional portraits and presentation photos",
    items: [
      { name: "Yvonne_Magnusson_Portrait_HighRes.jpg", size: "3.2 MB" },
      { name: "Yvonne_Magnusson_Speaking_Event.jpg", size: "2.8 MB" },
      { name: "Yvonne_Magnusson_Boardroom.jpg", size: "2.1 MB" }
    ],
    downloadUrl: "/media/images-package.zip"
  },
  {
    type: "Biography & CV",
    iconName: "FileText",
    description: "Detailed background and career history",
    items: [
      { name: "Yvonne_Magnusson_Biografi_SV.pdf", size: "245 KB" },
      { name: "Yvonne_Magnusson_Biography_EN.pdf", size: "231 KB" },
      { name: "Executive_Summary_CV.pdf", size: "156 KB" }
    ],
    downloadUrl: "/media/biography-package.zip"
  },
  {
    type: "Video Materials",
    iconName: "Video",
    description: "Keynote clips and interview materials",
    items: [
      { name: "Keynote_Transformation_Leadership.mp4", size: "125 MB" },
      { name: "Interview_Retail_Future.mp4", size: "89 MB" },
      { name: "Quick_Intro_Video.mp4", size: "45 MB" }
    ],
    downloadUrl: "/media/video-package.zip"
  }
];

export const mediaAppearancesSv: MediaAppearance[] = [
  {
    outlet: "SVT Aktuellt",
    type: "TV-intervju",
    topic: "Framtidens Retail efter Pandemin",
    date: "2024-01-15",
    link: "https://www.svtplay.se/video/123456",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Dagens Industri",
    type: "Expertkommentar", 
    topic: "Digital Transformation - Hur Lyckas Man?",
    date: "2023-12-20",
    link: "https://www.di.se/artikel/digital-transformation",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Retail & Detail Podcast",
    type: "Podcast-intervju",
    topic: "Internationalisering för Svenska Retailer",
    date: "2023-12-10",
    link: "https://retaildetail.se/podcast/internationalisering",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Breakit",
    type: "Feature-artikel",
    topic: "Hon Räddar Svenska Företag från Konkurs",
    date: "2023-11-25",
    link: "https://www.breakit.se/artikel/transformation-expert",
    image: "/api/placeholder/200/120"
  }
];

export const mediaAppearancesEn: MediaAppearance[] = [
  {
    outlet: "SVT Aktuellt",
    type: "TV Interview",
    topic: "The Future of Retail After the Pandemic",
    date: "2024-01-15",
    link: "https://www.svtplay.se/video/123456",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Dagens Industri",
    type: "Expert Commentary", 
    topic: "Digital Transformation - How to Succeed?",
    date: "2023-12-20",
    link: "https://www.di.se/artikel/digital-transformation",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Retail & Detail Podcast",
    type: "Podcast Interview",
    topic: "Internationalization for Swedish Retailers",
    date: "2023-12-10",
    link: "https://retaildetail.se/podcast/internationalisering",
    image: "/api/placeholder/200/120"
  },
  {
    outlet: "Breakit",
    type: "Feature Article",
    topic: "She Saves Swedish Companies from Bankruptcy",
    date: "2023-11-25",
    link: "https://www.breakit.se/artikel/transformation-expert",
    image: "/api/placeholder/200/120"
  }
];

export const expertTopicsSv = [
  "Digital Transformation inom Retail",
  "Internationalisering och Marknadsetablering", 
  "Turnaround Management och Krishantering",
  "Styrelsearbete och Corporate Governance",
  "Organisationskultur och Change Management",
  "E-handel och Omnichannel-strategier",
  "FMCG och Consumer Market Trends",
  "Kvinnligt Ledarskap och Diversity"
];

export const expertTopicsEn = [
  "Digital Transformation in Retail",
  "Internationalization and Market Entry", 
  "Turnaround Management and Crisis Management",
  "Board Work and Corporate Governance",
  "Organizational Culture and Change Management",
  "E-commerce and Omnichannel Strategies",
  "FMCG and Consumer Market Trends",
  "Female Leadership and Diversity"
];

export const contactInfoSv = {
  mediaContact: {
    name: "Yvonne Magnusson",
    email: "press@yvonnemagnusson.se",
    phone: "+46 73 985 32 60",
    response: "Svarar inom 2-4 timmar vardagar"
  },
  availability: {
    interviews: "Tillgänglig för TV, radio och podcast-intervjuer",
    commentary: "Expertkommentarer inom 24 timmar",
    speaking: "Keynotes och paneldiskussioner",
    articles: "Gastskribent och thought leadership"
  }
};

export const contactInfoEn = {
  mediaContact: {
    name: "Yvonne Magnusson",
    email: "press@yvonnemagnusson.se",
    phone: "+46 73 985 32 60",
    response: "Responds within 2-4 hours on weekdays"
  },
  availability: {
    interviews: "Available for TV, radio and podcast interviews",
    commentary: "Expert commentary within 24 hours",
    speaking: "Keynotes and panel discussions",
    articles: "Guest writer and thought leadership"
  }
};

export const credentialsSv = [
  {
    icon: "Users",
    label: "Expertområden",
    value: "Transformation, Retail, FMCG, Digital, Styrelsearbete, Internationalisering"
  },
  {
    icon: "Camera",
    label: "Medieerfarenhet",
    value: "50+ TV, radio och podcast-intervjuer i nationella och internationella medier"
  },
  {
    icon: "Star",
    label: "Språk",
    value: "Flyt i svenska, engelska och tyska för internationella medier"
  },
  {
    icon: "Award",
    label: "Trovärdighet",
    value: "30+ års praktisk erfarenhet med dokumenterade resultat inom transformation"
  }
];

export const credentialsEn = [
  {
    icon: "Users",
    label: "Expert Areas",
    value: "Transformation, Retail, FMCG, Digital, Board Work, Internationalization"
  },
  {
    icon: "Camera",
    label: "Media Experience",
    value: "50+ TV, radio and podcast interviews in national and international media"
  },
  {
    icon: "Star",
    label: "Languages",
    value: "Fluent in Swedish, English and German for international media"
  },
  {
    icon: "Award",
    label: "Credibility",
    value: "30+ years of practical experience with documented results in transformation"
  }
];

// Locale-aware export functions
export const getPressReleases = (locale: string): PressRelease[] => {
  return locale === 'sv' ? pressReleasesSv : pressReleasesEn;
};

export const getMediaKit = (locale: string): MediaKitItem[] => {
  return locale === 'sv' ? mediaKitSv : mediaKitEn;
};

export const getMediaAppearances = (locale: string): MediaAppearance[] => {
  return locale === 'sv' ? mediaAppearancesSv : mediaAppearancesEn;
};

export const getExpertTopics = (locale: string): string[] => {
  return locale === 'sv' ? expertTopicsSv : expertTopicsEn;
};

export const getContactInfo = (locale: string) => {
  return locale === 'sv' ? contactInfoSv : contactInfoEn;
};

export const getCredentials = (locale: string) => {
  return locale === 'sv' ? credentialsSv : credentialsEn;
};

// Legacy exports for backward compatibility
export const pressReleases = pressReleasesSv;
export const mediaKit = mediaKitSv;
export const mediaAppearances = mediaAppearancesSv;
export const expertTopics = expertTopicsSv;
export const contactInfo = contactInfoSv;
export const credentials = credentialsSv;