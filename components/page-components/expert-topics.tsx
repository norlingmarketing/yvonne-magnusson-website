import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LocalizedLink } from "@/components/localized-link";
import { MessageSquare } from "lucide-react";
import { type Locale } from "@/lib/routes";

interface ExpertTopicsProps {
  topics: string[];
  locale: string;
  dict: {
    media: {
      components: {
        expertTopics: {
          title: string;
          subtitle: string;
          contactButton: string;
        };
      };
    };
  };
}

export function ExpertTopics({ topics, locale, dict }: ExpertTopicsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {dict.media.components.expertTopics.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {dict.media.components.expertTopics.subtitle}
        </p>
      </div>

      <BlurFade delay={0.2}>
        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((topic, index) => (
            <BlurFade key={topic} delay={0.3 + index * 0.05}>
              <Badge 
                variant="secondary" 
                className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {topic}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.6}>
        <div className="text-center">
          <Button asChild size="lg">
            <LocalizedLink route="contact" locale={locale as Locale}>
              <MessageSquare className="h-5 w-5 mr-2" />
              {dict.media.components.expertTopics.contactButton}
            </LocalizedLink>
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}