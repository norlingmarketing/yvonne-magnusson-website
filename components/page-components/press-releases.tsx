import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PressRelease } from "@/lib/data/media-kit";
import { Download, Calendar } from "lucide-react";

interface PressReleasesProps {
  releases: PressRelease[];
}

export function PressReleases({ releases }: PressReleasesProps) {
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
      {releases.map((release, index) => (
        <BlurFade key={release.title} delay={0.2 + index * 0.1}>
          <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {release.category}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(release.date)}
                </div>
              </div>
              <CardTitle className="text-lg font-bold leading-tight">
                {release.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {release.summary}
              </p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-center"
                asChild
              >
                <a href={release.downloadUrl} download>
                  <Download className="h-4 w-4 mr-2" />
                  Ladda ner PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}