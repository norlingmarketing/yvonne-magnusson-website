import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MediaKitItem } from "@/lib/data/media-kit";
import { Download, FileText, Image, Video } from "lucide-react";

interface MediaKitDownloadsProps {
  items: MediaKitItem[];
}

const iconMap = {
  "ImageIcon": Image,
  "FileText": FileText,
  "Video": Video,
};

export function MediaKitDownloads({ items }: MediaKitDownloadsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => {
        const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || FileText;
        
        return (
          <BlurFade key={item.type} delay={0.2 + index * 0.1}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {item.type}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-2 mb-6 flex-1">
                  <h4 className="font-medium text-foreground text-sm">Innehåll:</h4>
                  <ul className="space-y-1">
                    {item.items.map((file, fileIndex) => (
                      <li key={fileIndex} className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground truncate mr-2">
                          {file.name}
                        </span>
                        <span className="text-muted-foreground shrink-0">
                          {file.size}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={item.downloadUrl} download>
                    <Download className="h-4 w-4 mr-2" />
                    Ladda ner paket
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