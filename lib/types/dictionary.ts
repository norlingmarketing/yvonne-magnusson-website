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
      seniorAdvisor: {
        title: string;
        subtitle: string;
        backToServices: string;
        yearsStat: string;
        turnaroundsStat: string;
        ceoYearsStat: string;
        expertiseTitle: string;
        expertiseSubtitle: string;
        expertiseAreas: Array<{
          title: string;
          description: string;
        }>;
        valueTitle: string;
        valueSubtitle: string;
        valueProp: Array<{
          title: string;
          description: string;
        }>;
        engagementTitle: string;
        engagementSubtitle: string;
        engagementTypes: Array<{
          title: string;
          description: string;
          duration: string;
          format: string;
        }>;
        processTitle: string;
        processSubtitle: string;
        processSteps: Array<{
          step: string;
          title: string;
          description: string;
        }>;
        ctaTitle: string;
        ctaSubtitle: string;
        ctaButton: string;
        ctaSecondary: string;
        durationLabel: string;
        formatLabel: string;
      };
      interimExecutive: {
        backToServices: string;
        title: string;
        subtitle: string;
        turnaroundsStat: string;
        ceoYearsStat: string;
        startupDaysStat: string;
        situationsTitle: string;
        situationsSubtitle: string;
        capabilitiesTitle: string;
        capabilitiesSubtitle: string;
        deliverablesTitle: string;
        deliverablesSubtitle: string;
        industryTitle: string;
        industrySubtitle: string;
        mobilizationTitle: string;
        mobilizationSubtitle: string;
        availabilityTitle: string;
        availabilitySubtitle: string;
        ctaTitle: string;
        ctaSubtitle: string;
        ctaButton: string;
        ctaSecondary: string;
        situations: Array<{
          title: string;
          description: string;
          urgency: string;
        }>;
        capabilities: Array<{
          title: string;
          description: string;
        }>;
        deliverables: Array<{
          phase: string;
          items: string[];
        }>;
        industries: string[];
        mobilizationSteps: Array<{
          day: string;
          task: string;
        }>;
      };
      workshops: {
        backToServices: string;
        title: string;
        subtitle: string;
        trainedLeadersStat: string;
        averageRatingStat: string;
        recommendationStat: string;
        typesTitle: string;
        typesSubtitle: string;
        formatsTitle: string;
        formatsSubtitle: string;
        methodologyTitle: string;
        methodologySubtitle: string;
        outcomesTitle: string;
        outcomesSubtitle: string;
        testimonialsTitle: string;
        investmentTitle: string;
        investmentSubtitle: string;
        ctaTitle: string;
        ctaSubtitle: string;
        ctaButton: string;
        ctaSecondary: string;
        workshopTypes: Array<{
          title: string;
          description: string;
          duration: string;
          participants: string;
          focus: string;
        }>;
        formats: Array<{
          title: string;
          description: string;
          benefits: string[];
        }>;
        methodology: Array<{
          phase: string;
          description: string;
          details: string[];
        }>;
        learningOutcomes: string[];
        testimonials: Array<{
          quote: string;
          author: string;
          role: string;
          company: string;
        }>;
        guarantees: Array<{
          title: string;
          description: string;
        }>;
      };
    };
  };
  speaking: {
    title: string;
    subtitle: string;
    badge: string;
    languages: string;
    duration: string;
    format: string;
    ctaButton: string;
    speakerKit: string;
    videoTitle: string;
    videoSubtitle: string;
    videoPlaceholder: string;
    topicsTitle: string;
    topicsSubtitle: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCtaButton: string;
    finalCtaSecondary: string;
    topics: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      duration: string;
      keyPoints: string[];
      audience: string[];
      format: string[];
      testimonial: {
        quote: string;
        author: string;
        company: string;
      };
    }>;
  };
  cases: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    caseStudiesTitle: string;
    caseStudiesSubtitle: string;
    industryTitle: string;
    industrySubtitle: string;
    casesLabel: string;
    finalCtaTitle: string;
    finalCtaTitleHighlight: string;
    finalCtaSubtitle: string;
    finalCtaButton: string;
    finalCtaSecondary: string;
    caseStudyLabels: {
      challenge: string;
      solution: string;
      results: string;
    };
    impactAreas: {
      title: string;
      description: string;
    };
  };
  insights: {
    badge: string;
    title: string;
    subtitle: string;
    articlesTitle: string;
    articlesSubtitle: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterButton: string;
    topicsTitle: string;
    topicsSubtitle: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    articleLabels: {
      featured: string;
      readArticle: string;
      showMore: string;
      articlesRemaining: string;
      imagePlaceholder: string;
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
  media: {
    badge: string;
    title: string;
    subtitle: string;
    badges: {
      expertComments: string;
      languages: string;
      liveTv: string;
    };
    pressReleasesTitle: string;
    pressReleasesSubtitle: string;
    mediaKitTitle: string;
    mediaKitSubtitle: string;
    appearancesTitle: string;
    appearancesSubtitle: string;
    credentialsTitle: string;
    credentialsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    stats: {
      mediaAppearances: string;
      keynotePresentations: string;
      industryAwards: string;
    };
  };
  cta: {
    subtitle: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}