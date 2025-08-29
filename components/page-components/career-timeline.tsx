import { BlurFade } from "@/components/magicui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import { TimelineItem } from "@/lib/types";

interface CareerTimelineProps {
  timelineData: TimelineItem[];
  title?: string;
  description?: string;
}

export function CareerTimeline({ 
  timelineData, 
  title = "Karriärresa",
  description = "En översikt över nyckelroller och framgångar genom åren"
}: CareerTimelineProps) {
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

        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.4}>
            <Timeline items={timelineData} />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}