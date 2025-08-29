import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ExpertiseSectionProps {
  expertise: string[];
  languages: Array<{ lang: string; level: string }>;
  title?: string;
  description?: string;
}

export function ExpertiseSection({ 
  expertise, 
  languages, 
  title = "Expertis & Språk",
  description = "Djup kompetens inom transformation och internationell erfarenhet"
}: ExpertiseSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expertise */}
          <BlurFade delay={0.3}>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Expertområden
                </h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Languages */}
          <BlurFade delay={0.4}>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Språkkunskaper
                </h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="font-medium text-foreground">
                        {language.lang}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {language.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}