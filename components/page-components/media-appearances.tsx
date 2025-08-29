import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaAppearance } from "@/lib/data/media-kit";
import { Calendar, ExternalLink, Tv, Radio, Mic, FileText } from "lucide-react";
import Image from "next/image";

interface MediaAppearancesProps {
  appearances: MediaAppearance[];
}

const typeIconMap = {
  "TV-intervju": Tv,
  "Expertkommentar": FileText,
  "Podcast-intervju": Mic,
  "Feature-artikel": FileText,
  "Radio-intervju": Radio,
};

export function MediaAppearances({ appearances }: MediaAppearancesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {appearances.map((appearance, index) => {
        const IconComponent = typeIconMap[appearance.type as keyof typeof typeIconMap] || FileText;
        
        return (
          <BlurFade key={appearance.outlet + appearance.date} delay={0.2 + index * 0.1}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
              {/* Media Image */}
              <div className="relative aspect-video bg-muted overflow-hidden rounded-t-lg">
                <Image
                  src={appearance.image}
                  alt={`${appearance.outlet} - ${appearance.topic}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-background/90 text-foreground border-border">
                    <IconComponent className="h-3 w-3 mr-1" />
                    {appearance.type}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(appearance.date)}</span>
                </div>
                
                <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  {appearance.outlet}
                </CardTitle>
                
                <p className="text-sm text-primary font-medium">
                  {appearance.topic}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center"
                  asChild
                >
                  <a 
                    href={appearance.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visa media
                  </a>
                </Button>
              </CardContent>
            </Card>
          </BlurFade>
        );
      })}
    </div>
  );
}