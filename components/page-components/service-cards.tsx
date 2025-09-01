import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LocalizedLink } from "@/components/localized-link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Service } from "@/lib/types";
import { getIcon } from "@/lib/utils/icon-map";
import { Dictionary } from "@/lib/types/dictionary";
import { type Locale } from "@/lib/routes";

interface ServiceCardsProps {
  services: Service[];
  dict: Dictionary;
  locale: string;
}

export function ServiceCards({ services, dict, locale }: ServiceCardsProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {services.map((service, index) => {
        const Icon = getIcon(service.icon);
        return (
          <BlurFade key={service.id} delay={0.3 + index * 0.1}>
            <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-card border-border">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{dict.services.serviceCard.whatIncluded}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{dict.services.serviceCard.suitableFor}</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((target, targetIndex) => (
                        <Badge key={targetIndex} variant="secondary" className="text-sm">
                          {target}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{dict.services.serviceCard.approach}</h4>
                    <p className="text-muted-foreground text-sm">{service.approach}</p>
                  </div>

                  {/* Investment */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{dict.services.serviceCard.investment}</h4>
                    <p className="text-muted-foreground text-sm">{service.investment}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t">
                  <Button asChild className="w-full" size="lg">
                    <LocalizedLink route={service.route} locale={locale as Locale} className="flex items-center justify-center gap-2">
                      {dict.services.serviceCard.readMore}
                      <ArrowRight className="h-5 w-5" />
                    </LocalizedLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        );
      })}
    </div>
  );
}