import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "Case & Referenser - Bevisade Transformationsresultat | Yvonne Magnusson",
  description: "Verkliga framgångshistorier från 30+ transformationsprojekt. 40%+ tillväxt, 15 procentenheter EBITDA-förbättring och beprövade resultat inom retail och FMCG.",
  keywords: [
    "case studier",
    "transformation resultat", 
    "retail turnaround",
    "FMCG transformation",
    "digital transformation cases",
    "framgångshistorier",
    "business transformation",
    "turnaround results",
    "interim VD resultat",
    "retail case studies"
  ],
};

import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TrendingUp, Users, Target, ArrowRight, Building, Zap, Award, CheckCircle, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function CaseReferenserPage() {
  const caseStudies = [
    {
      title: "Retailkedjan - Från Kris till Marknadsledare",
      company: "Nordisk Retailkedja",
      industry: "Fashion Retail", 
      duration: "18 månader",
      role: "Interim VD",
      challenge: "Fallande försäljning, föråldrade processer och låg personalengagemang hotade företagets överlevnad.",
      solution: [
        "Genomförde omfattande organisationsanalys och kulturförändringsprogram",
        "Implementerade ny digital strategi och e-handelsplattform", 
        "Rekryterade nyckeltalanger och utvecklade befintlig personal",
        "Optimerade supply chain och kostnadsstruktur"
      ],
      results: [
        { metric: "Omsättning", value: "+47%", description: "Ökning under 18 månader" },
        { metric: "Lönsamhet", value: "12%", description: "EBITDA-marginal från -3%" },
        { metric: "Medarbetarengagemang", value: "+65%", description: "NPS förbättring" },
        { metric: "Marknadsandelar", value: "+8%", description: "I strategiska segment" }
      ],
      testimonial: "Yvonne vänte hela vår organisation på 18 månader. Hennes kombination av strategiskt tänkande och praktisk genomförandekraft var avgörande för vår framgång.",
      author: "Styrelseordförande"
    },
    {
      title: "FMCG-Transformation i Nordeuropa",
      company: "Europeisk FMCG-distributör",
      industry: "Food & Beverage",
      duration: "24 månader", 
      role: "Senior Rådgivare",
      challenge: "Fragmenterad marknadsposition, ineffektiv distribution och utmanande konkurrens från nya aktörer.",
      solution: [
        "Utvecklade ny go-to-market strategi för nyckelkategorier",
        "Konsoliderade distributionsnätverk och optimerade logistik",
        "Implementerade customer-centric organisation och processer",
        "Etablerade strategiska partnerskap med nyckelkunder"
      ],
      results: [
        { metric: "Marknadstillväxt", value: "+23%", description: "I strategiska kategorier" },
        { metric: "Operativ effektivitet", value: "+31%", description: "Kostnadsreduktion" },
        { metric: "Kundnöjdhet", value: "8.7/10", description: "Från 6.2/10" },
        { metric: "ROI", value: "340%", description: "På investeringarna" }
      ],
      testimonial: "Yvonnes djupa förståelse för FMCG-marknaden och förmåga att driva komplexa förändringar hjälpte oss att återta marknadsledarskapet.",
      author: "VD"
    },
    {
      title: "Digital Transformation & Tillväxt",
      company: "Traditionell Återförsäljare",
      industry: "Home & Garden",
      duration: "12 månader",
      role: "Interimchef Digital Transformation", 
      challenge: "Behov av snabb digitalisering för att möta förändrade konsumentbeteenden och e-handelskonkurrens.",
      solution: [
        "Implementerade omnichannel-strategi och unified commerce",
        "Byggde digital kompetens genom rekrytering och utbildning",
        "Lanserade ny e-handelsplattform och mobilapp",
        "Utvecklade data-driven beslutsstöd och personalisering"
      ],
      results: [
        { metric: "Digital omsättning", value: "+156%", description: "Online tillväxt" },
        { metric: "Omnichannel-kunder", value: "+89%", description: "Cross-channel engagement" },
        { metric: "Konvertering", value: "+43%", description: "E-handel optimering" },
        { metric: "NPS", value: "+52", description: "Kundupplevelse förbättring" }
      ],
      testimonial: "Yvonne ledde vår digitala transformation med imponerande resultat. Hon förstod både den tekniska och mänskliga sidan av förändringen.",
      author: "Styrelseledamot"
    }
  ];

  const impactAreas = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Tillväxt & Lönsamhet",
      description: "Genomsnittlig omsättningstillväxt på 40%+ och förbättrad EBITDA-marginal med 8-15 procentenheter",
      cases: "12 framgångsrika cases"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Organisationsförändring",
      description: "Kulturförändringar som resulterat i 50%+ förbättring av medarbetarengagemang och retention",
      cases: "8 transformationer"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Marknadsposition",
      description: "Stärkt marknadsposition med genomsnittlig ökning av marknadsandelar på 15-25%",
      cases: "10 turnarounds"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Digital Transformation",
      description: "Framgångsrik digitalisering med 100%+ tillväxt av digital omsättning inom 12-18 månader",
      cases: "6 digitaliseringar"
    }
  ];

  const industries = [
    { name: "Fashion & Lifestyle", cases: 8, icon: "👔" },
    { name: "Food & Beverage", cases: 6, icon: "🍽️" },
    { name: "Home & Garden", cases: 4, icon: "🏠" },
    { name: "Electronics & Tech", cases: 3, icon: "💻" },
    { name: "Health & Beauty", cases: 5, icon: "💄" },
    { name: "Sports & Outdoor", cases: 4, icon: "⛷️" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Bevisade <span className="text-primary">Resultat</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Verkliga transformationshistorier från 30+ år av framgångsrikt ledarskap 
                inom retail, FMCG och konsumentbranschen.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <NumberTicker value={30} />+
                </div>
                <p className="text-muted-foreground font-medium">Framgångsrika Cases</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <NumberTicker value={40} />%+
                </div>
                <p className="text-muted-foreground font-medium">Genomsnittlig Tillväxt</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <NumberTicker value={15} />
                </div>
                <p className="text-muted-foreground font-medium">Procentenheter EBITDA</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <NumberTicker value={18} />
                </div>
                <p className="text-muted-foreground font-medium">Månaders Medianvaraktighet</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Utvalda Transformationshistorier
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Djupgående case studies som visar konkreta resultat och beprövade metoder 
                för framgångsrik affärstransformation.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                        <span className="text-muted-foreground text-sm">{caseStudy.duration}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <div className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                        <Building className="h-4 w-4 mr-2" />
                        {caseStudy.role}
                      </div>
                      <div className="text-2xl font-bold text-foreground">{caseStudy.company}</div>
                    </div>
                  </div>

                  {/* Solution & Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Solution */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Lösning & Åtgärder</h4>
                      <ul className="space-y-3">
                        {caseStudy.solution.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Nyckelresultat</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-muted/50 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs font-medium text-foreground mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-border pt-8">
                    <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                      &ldquo;{caseStudy.testimonial}&rdquo;
                    </blockquote>
                    <div className="text-primary font-semibold">— {caseStudy.author}</div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bevisad Impact inom Nyckelområden
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Konsekvent leverans av mätbara resultat inom de områden som är 
                kritiska för framgångsrik affärstransformation.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-muted/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>{area.icon}</div>
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {area.cases}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Branschexpertis & Erfarenhet
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Djup förståelse och beprövade resultat inom flera branscher ger 
                unikt perspektiv på transformation och tillväxt.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                  <p className="text-primary-foreground/90 text-sm">
                    {industry.cases} framgångsrika cases
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">100%</div>
                  <p className="text-primary-foreground/90">Av cases uppnådde målsättningar</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">4.9/5</div>
                  <p className="text-primary-foreground/90">Genomsnittligt kundbetyg</p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">95%</div>
                  <p className="text-primary-foreground/90">Skulle anlita igen</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Beprövad Transformationsmetodik
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                En strukturerad approach utvecklad genom 30+ år av framgångsrik 
                ledning av komplexa förändringsprocesser.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: "Analys",
                description: "Djupgående nulägesanalys, gap-identifiering och stakeholder-mapping",
                tools: ["Organisationsdiagnos", "Finansiell analys", "Marknadspositionering", "Kulturkartläggning"]
              },
              {
                phase: "Strategi",
                description: "Utveckling av transformation roadmap med tydliga mål och milstolpar",
                tools: ["Visionssättning", "Prioriteringsramverk", "Change roadmap", "Resource planning"]
              },
              {
                phase: "Verkställighet",
                description: "Systematisk implementation med kontinuerlig uppföljning och justering",
                tools: ["Projektledning", "Team development", "Process optimization", "Performance tracking"]
              },
              {
                phase: "Hållbarhet",
                description: "Säkerställ långsiktig framgång genom organisatorisk mognad",
                tools: ["Capability building", "Knowledge transfer", "Governance design", "Continuous improvement"]
              }
            ].map((phase, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo för Er Nästa Transformation?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Låt oss diskutera hur mina beprövade metoder och erfarenheter kan 
              accelerera er transformation och skapa hållbara resultat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Diskutera Ert Case
                </ShimmerButton>
              </Link>
              <Link 
                href="/tjanster"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                Se Alla Tjänster
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}