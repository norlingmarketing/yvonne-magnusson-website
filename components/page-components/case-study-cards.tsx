import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseStudy } from "@/lib/types";
import { ArrowRight, Building, Clock, User } from "lucide-react";
import { Dictionary } from "@/lib/types/dictionary";

interface CaseStudyCardsProps {
  caseStudies: CaseStudy[];
  dict: Dictionary;
}

export function CaseStudyCards({ caseStudies, dict }: CaseStudyCardsProps) {
  return (
    <div className="space-y-12">
      {caseStudies.map((caseStudy, index) => (
        <BlurFade key={index} delay={0.3 + index * 0.1}>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                    {caseStudy.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{caseStudy.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{caseStudy.role}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {caseStudy.industry}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenge & Solution */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {dict.cases.caseStudyLabels.challenge}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {dict.cases.caseStudyLabels.solution}
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.solution.map((item, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 rounded-lg p-6">
                    <blockquote className="italic text-foreground mb-3">
                      &ldquo;{caseStudy.testimonial}&rdquo;
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      — {caseStudy.author}
                    </cite>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    {dict.cases.caseStudyLabels.results}
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value.includes('+') || result.value.includes('-') ? (
                            <>
                              {result.value.includes('+') ? '+' : ''}
                              <NumberTicker 
                                value={parseInt(result.value.replace(/[+%-]/g, ''))} 
                                className="inline"
                              />
                              {result.value.includes('%') ? '%' : ''}
                              {result.value.includes('MSEK') ? ' MSEK' : ''}
                              {result.value.includes('/10') ? '/10' : ''}
                            </>
                          ) : (
                            result.value
                          )}
                        </div>
                        <div className="text-sm font-medium text-foreground">
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
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}