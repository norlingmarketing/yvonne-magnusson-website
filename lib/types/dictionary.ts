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
    boardWorkIdealFor: string[];
    boardWorkApproach: string;
    boardWorkInvestment: string;
    seniorAdvisorIdealFor: string[];
    seniorAdvisorApproach: string;
    seniorAdvisorInvestment: string;
    interimExecutiveIdealFor: string[];
    interimExecutiveApproach: string;
    interimExecutiveInvestment: string;
    workshopsIdealFor: string[];
    workshopsApproach: string;
    workshopsInvestment: string;
    serviceCard: {
      whatIncluded: string;
      suitableFor: string;
      approach: string;
      investment: string;
      readMore: string;
    };
    page: {
      title: string;
      description: string;
      ctaText: string;
      badge1: string;
      badge2: string;
      badge3: string;
      processTitle: string;
      processDescription: string;
      finalCtaTitle: string;
      finalCtaDescription: string;
      finalCtaButton: string;
      finalCtaSecondary: string;
    };
    processSteps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  pages: {
    services: {
      boardWork: {
        backToServices: string;
        title: string;
        subtitle: string;
        badge1: string;
        badge2: string;
        badge3: string;
        ctaButton: string;
        currentRolesTitle: string;
        competenciesTitle: string;
        competenciesSubtitle: string;
        idealSituationsTitle: string;
        idealSituationsSubtitle: string;
        exampleFocusAreas: string;
        valueCreationTitle: string;
        valueCreationSubtitle: string;
        finalCtaTitle: string;
        finalCtaSubtitle: string;
        finalCtaButton: string;
        finalCtaSecondary: string;
        boardCompetencies: Array<{
          icon: string;
          title: string;
          description: string;
          details: string[];
        }>;
        boardPositions: Array<{
          role: string;
          companies: Array<{
            name: string;
            description: string;
          }>;
        }>;
        boardIdealSituations: Array<{
          title: string;
          description: string;
          examples: string[];
        }>;
        boardValueCreation: Array<{
          area: string;
          impact: string;
        }>;
      };
    };
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