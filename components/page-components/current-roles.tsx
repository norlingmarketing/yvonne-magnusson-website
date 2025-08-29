import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { CurrentRole } from "@/lib/types";

interface CurrentRolesProps {
  currentRoles: CurrentRole[];
  title?: string;
  description?: string;
}

export function CurrentRoles({ 
  currentRoles, 
  title = "Nuvarande roller",
  description = "Aktiv inom styrelser och rådgivning för att driva strategisk utveckling"
}: CurrentRolesProps) {
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

        <div className="grid md:grid-cols-3 gap-8">
          {currentRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <BlurFade key={index} delay={0.4 + index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{role.title}</h3>
                    <ul className="space-y-2">
                      {role.companies.map((company, companyIndex) => (
                        <li key={companyIndex} className="text-muted-foreground">
                          {company}
                        </li>
                      ))}
                    </ul>
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