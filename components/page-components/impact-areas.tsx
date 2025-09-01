import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { Dictionary } from "@/lib/types/dictionary";

interface ImpactAreaData {
  title: string;
  description: string;
  metrics: string[];
  iconName: string;
}

interface ImpactAreasProps {
  impactAreas: ImpactAreaData[];
  dict: Dictionary;
  title?: string;
  description?: string;
}

export function ImpactAreas({ 
  impactAreas, 
  dict,
  title,
  description
}: ImpactAreasProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title || dict.cases.impactAreas.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description || dict.cases.impactAreas.description}
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => {
            const iconMap = {
              TrendingUp,
              Users,
              Target,
              Zap
            };
            const IconComponent = iconMap[area.iconName as keyof typeof iconMap];
            
            return (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary mx-auto" />}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {area.description}
                    </p>
                    {area.metrics && (
                      <div className="text-xs text-primary font-semibold">
                        {area.metrics.join(', ')}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}