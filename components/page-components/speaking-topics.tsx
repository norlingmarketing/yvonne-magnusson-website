import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LocalizedLink } from "@/components/localized-link";
import { SpeakingTopic } from "@/lib/types";
import { Play, Users, Clock, CheckCircle } from "lucide-react";
import { type Locale } from "@/lib/routes";

interface SpeakingTopicsProps {
  topics: SpeakingTopic[];
  locale: string;
}

export function SpeakingTopics({ topics, locale }: SpeakingTopicsProps) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {topics.map((topic, index) => (
        <BlurFade key={topic.id} delay={0.3 + index * 0.1}>
          <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {topic.format[0]}
                </Badge>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Videomaterial kommer snart</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </CardTitle>
              <CardDescription className="text-sm text-primary font-medium">
                {topic.subtitle}
              </CardDescription>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                {topic.description}
              </p>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Key Points */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Innehåll:</h4>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Audience */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Målgrupp:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topic.audience.map((aud, audIndex) => (
                    <Badge key={audIndex} variant="secondary" className="text-xs">
                      {aud}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Duration & Format */}
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{topic.duration}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {topic.format.map((format, formatIndex) => (
                      <Badge key={formatIndex} variant="outline" className="text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              {topic.testimonial && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <blockquote className="text-sm text-foreground italic mb-2">
                    &ldquo;{topic.testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="text-xs text-muted-foreground">
                    — {topic.testimonial.author}, {topic.testimonial.company}
                  </cite>
                </div>
              )}
              
              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-border">
                <Button asChild className="w-full" size="sm">
                  <LocalizedLink route="contact" locale={locale as Locale}>
                    Boka föreläsning
                  </LocalizedLink>
                </Button>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}