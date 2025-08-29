import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { ContactMethod } from "@/lib/types";

interface ContactMethodsProps {
  contactMethods: ContactMethod[];
}

export function ContactMethods({ contactMethods }: ContactMethodsProps) {
  return (
    <div className="space-y-6">
      <BlurFade delay={0.3}>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Kontakta mig direkt
          </h3>
          <p className="text-muted-foreground mb-6">
            Välj det sätt som passar dig bäst. Jag svarar alltid inom 24 timmar.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const isClickable = method.href && method.href.length > 0;
          
          const content = (
            <Card className={`h-full transition-all ${
              isClickable ? "hover:shadow-md cursor-pointer group" : ""
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    isClickable 
                      ? "bg-primary/10 group-hover:bg-primary/20 transition-colors" 
                      : "bg-muted"
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      isClickable ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {method.title}
                    </h4>
                    <p className={`text-sm font-medium ${
                      isClickable 
                        ? "text-primary group-hover:underline" 
                        : "text-foreground"
                    }`}>
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );

          return (
            <BlurFade key={method.title} delay={0.4 + index * 0.1}>
              {isClickable ? (
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}