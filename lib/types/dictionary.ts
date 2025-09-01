export interface Dictionary {
  common: {
    readMore: string;
    contactUs: string;
    getInTouch: string;
    learnMore: string;
    viewAll: string;
    backToTop: string;
  };
  navigation: {
    home: string;
    about: string;
    services: string;
    speaking: string;
    cases: string;
    insights: string;
    media: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    services: string;
    company: string;
    contact: string;
    copyright: string;
    privacyPolicy: string;
  };
  services: {
    boardWork: string;
    seniorAdvisor: string;
    interimExecutive: string;
    workshops: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllServices: string;
    boardWorkDescription: string;
    boardWorkFeatures: string[];
    seniorAdvisorDescription: string;
    seniorAdvisorFeatures: string[];
    interimExecutiveDescription: string;
    interimExecutiveFeatures: string[];
    workshopsDescription: string;
    workshopsFeatures: string[];
  };
  credentials: {
    title: string;
    subtitle: string;
    expertise: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      author: string;
      company: string;
      role: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    experienceYears: string;
    ceoYears: string;
    turnarounds: string;
    discussCollaboration: string;
    downloadCV: string;
    transformationQuote: string;
    expertiseTitle: string;
    educationLanguagesTitle: string;
    educationSubtitle: string;
    languagesSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  cta: {
    subtitle: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}