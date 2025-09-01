import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data/media-kit";
import { Phone, Mail, Clock, MessageCircle, Tv, PenTool, Users } from "lucide-react";
import Link from "next/link";

const availabilityIcons = {
  "interviews": Tv,
  "commentary": MessageCircle,
  "speaking": Users,
  "articles": PenTool,
};

interface MediaContactInfoProps {
  locale: string;
  dict: any;
}

export function MediaContactInfo({ locale, dict }: MediaContactInfoProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <BlurFade delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              {dict.media.components.contact.mediaContact}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">
                {contactInfo.mediaContact.name}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href={`mailto:${contactInfo.mediaContact.email}`}
                    className="text-primary hover:underline"
                  >
                    {contactInfo.mediaContact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href={`tel:${contactInfo.mediaContact.phone}`}
                    className="text-primary hover:underline"
                  >
                    {contactInfo.mediaContact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{contactInfo.mediaContact.response}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full">
                <Link href={`/${locale}/kontakt`}>
                  {dict.media.components.contact.sendMediaRequest}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* Availability */}
      <BlurFade delay={0.3}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              {dict.media.components.contact.availability}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(contactInfo.availability).map(([key, value], index) => {
                const IconComponent = availabilityIcons[key as keyof typeof availabilityIcons] || MessageCircle;
                
                return (
                  <BlurFade key={key} delay={0.4 + index * 0.1}>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="p-1.5 bg-primary/10 rounded">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground font-medium capitalize">
                          {key === "interviews" && dict.media.components.contact.interviews}
                          {key === "commentary" && dict.media.components.contact.commentary}
                          {key === "speaking" && dict.media.components.contact.speaking}
                          {key === "articles" && dict.media.components.contact.articles}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {value}
                        </p>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  );
}