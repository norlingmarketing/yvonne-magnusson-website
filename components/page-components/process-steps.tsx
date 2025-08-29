import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { ProcessStep } from "@/lib/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ProcessSteps({ 
  steps, 
  title = "Så här arbetar vi tillsammans",
  description = "En tydlig och strukturerad process för att säkerställa bästa möjliga resultat"
}: ProcessStepsProps) {
  return (
    <section className="py-20 bg-muted/50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <BlurFade key={step.step} delay={0.4 + index * 0.1}>
              <Card className="relative h-full group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-4">
                        <div className="absolute right-0 top-0 w-2 h-2 bg-border rounded-full transform translate-x-1 -translate-y-0.5"></div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}