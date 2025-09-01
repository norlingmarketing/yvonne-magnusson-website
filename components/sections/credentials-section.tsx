"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Dictionary } from "@/lib/types/dictionary";

interface CredentialsSectionProps {
  locale: string;
  dict: Dictionary;
}

export function CredentialsSection({ dict }: CredentialsSectionProps) {
  const expertise = dict.credentials.expertise;
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="bg-gradient-to-r from-muted/50 to-background rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {dict.credentials.title}
              </h3>
              <p className="text-muted-foreground">
                {dict.credentials.subtitle}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((skill, index) => (
                <BlurFade key={skill} delay={0.4 + index * 0.05}>
                  <Badge 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-background border border-primary/20 text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}