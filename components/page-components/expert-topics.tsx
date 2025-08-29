import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

interface ExpertTopicsProps {
  topics: string[];
}

export function ExpertTopics({ topics }: ExpertTopicsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Expertområden för Mediekontakt
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Yvonne är tillgänglig som expert inom följande områden för intervjuer, kommentarer och analyser.
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
            <Link href="/kontakt">
              <MessageSquare className="h-5 w-5 mr-2" />
              Kontakta för Medieanfrågan
            </Link>
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}