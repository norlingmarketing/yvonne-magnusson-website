import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Calendar,
  Clock,
  MessageSquare,
  Users,
  Briefcase,
  TrendingUp,
  Presentation
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt - Yvonne Magnusson | Boka introduktionssamtal",
  description: "Kontakta Yvonne Magnusson för styrelseuppdrag, interim VD-roller, senior advisory eller föreläsningar. Kostnadsfritt introduktionssamtal.",
  keywords: "kontakt, Yvonne Magnusson, styrelseledamot, interim VD, senior advisor, föreläsningar, retail transformation",
};

const contactMethods = [
  {
    icon: Mail,
    title: "E-post",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Skicka meddelande direkt"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
    description: "Ring för direktkontakt"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: siteConfig.social.linkedin.displayName,
    href: siteConfig.social.linkedin.url,
    description: "Professionellt nätverk"
  },
  {
    icon: MapPin,
    title: "Plats",
    value: siteConfig.contact.location,
    href: "",
    description: "Huvudsakligen nordisk marknad"
  }
];

const serviceTypes = [
  {
    id: "styrelse",
    icon: Users,
    title: "Styrelseuppdrag",
    description: "Diskutera styrelseroll eller ordförandeskap"
  },
  {
    id: "interim",
    icon: TrendingUp, 
    title: "Interim VD/CCO",
    description: "Behov av erfaren interim ledning"
  },
  {
    id: "advisor",
    icon: Briefcase,
    title: "Senior Advisory",
    description: "Löpande strategisk rådgivning"
  },
  {
    id: "speaking",
    icon: Presentation,
    title: "Föreläsningar",
    description: "Keynotes och workshops"
  }
];

const responsePromises = [
  {
    icon: Clock,
    title: "24 timmar",
    description: "Svar på alla förfrågningar"
  },
  {
    icon: Calendar,
    title: "Inom en vecka",
    description: "Introduktionssamtal kan bokas"
  },
  {
    icon: MessageSquare,
    title: "Kostnadsfritt",
    description: "Första samtalet alltid utan kostnad"
  }
];

export default function ContactPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Låt oss börja samtalet
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Är ni redo att accelerera er transformation? Jag hjälper gärna till att diskutera 
                  era utmaningar och möjligheter för att hitta den bästa vägen framåt.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {responsePromises.map((promise, index) => {
                    const Icon = promise.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-[#2C5F7C]">
                        <Icon className="h-5 w-5" />
                        <span className="font-semibold">{promise.title}</span>
                        <span className="text-gray-600">- {promise.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <BlurFade delay={0.3}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Skicka meddelande</CardTitle>
                    <CardDescription className="text-base">
                      Berätta om era behov så återkommer jag snarast för att boka ett introduktionssamtal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Förnamn *</Label>
                          <Input id="firstName" name="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Efternamn *</Label>
                          <Input id="lastName" name="lastName" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Företag/Organisation</Label>
                        <Input id="company" name="company" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">Din roll/titel</Label>
                        <Input id="position" name="position" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Typ av samarbete (välj gärna flera)</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {serviceTypes.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Label key={service.id} className="flex items-center space-x-2 cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  name="services" 
                                  value={service.id}
                                  className="rounded border-gray-300 text-[#2C5F7C] focus:ring-[#2C5F7C]"
                                />
                                <Icon className="h-4 w-4 text-[#2C5F7C]" />
                                <span className="text-sm">{service.title}</span>
                              </Label>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Meddelande *</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          rows={4} 
                          placeholder="Berätta kort om era utmaningar, mål eller vad ni skulle vilja diskutera..." 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Tidsram för projekt/samarbete</Label>
                        <Input id="timeline" name="timeline" placeholder="T.ex. 'Akut behov', '3-6 månader', 'Långsiktig relation'" />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-[#2C5F7C] hover:bg-[#2C5F7C]/90">
                        Skicka förfrågan
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center">
                        * Obligatoriska fält. Jag behandlar era uppgifter konfidentiellt och återkommer inom 24 timmar.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </BlurFade>

              {/* Contact Info & Services */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <BlurFade delay={0.4}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#2C5F7C]" />
                        Direktkontakt
                      </CardTitle>
                      <CardDescription>
                        Ring eller skriv direkt för snabb kontakt
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#2C5F7C]/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-[#2C5F7C]" />
                            </div>
                            <div>
                              <div className="font-medium">{method.title}</div>
                              {method.href ? (
                                <a 
                                  href={method.href} 
                                  className="text-[#2C5F7C] hover:text-[#2C5F7C]/80 transition-colors"
                                  target={method.href.startsWith('http') ? '_blank' : undefined}
                                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  {method.value}
                                </a>
                              ) : (
                                <span className="text-gray-600">{method.value}</span>
                              )}
                              <div className="text-sm text-gray-500">{method.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </BlurFade>

                {/* Service Types */}
                <BlurFade delay={0.5}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-[#2C5F7C]" />
                        Vad kan vi diskutera?
                      </CardTitle>
                      <CardDescription>
                        Vanliga typer av samarbeten och uppdrag
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {serviceTypes.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-[#2C5F7C]/20 transition-colors">
                            <Icon className="h-5 w-5 text-[#2C5F7C] mt-0.5" />
                            <div>
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-600">{service.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </BlurFade>

                {/* Availability */}
                <BlurFade delay={0.6}>
                  <Card className="bg-gradient-to-br from-[#2C5F7C]/5 to-[#2C5F7C]/10 border-[#2C5F7C]/20">
                    <CardHeader>
                      <CardTitle className="text-[#2C5F7C]">Tillgänglighet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                          Tillgänglig
                        </Badge>
                        <span className="text-sm">för nya uppdrag 2025</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>• Styrelseuppdrag: Selektiv för rätt match</p>
                        <p>• Interim roller: 3-18 månaders uppdrag</p>
                        <p>• Advisory: Begränsat antal kunder</p>
                        <p>• Föreläsningar: Löpande bokningar</p>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Vanliga frågor
                </h2>
                <p className="text-xl text-gray-600">
                  Svar på det som ofta kommer upp i första samtalen
                </p>
              </div>
            </BlurFade>

            <div className="space-y-6">
              <BlurFade delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Hur snabbt kan ni starta ett samarbete?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      För styrelseuppdrag och advisory-roller kan jag normalt starta inom 2-4 veckor. 
                      Interim VD-roller kan påbörjas akut vid behov, ofta inom 1-2 veckor. 
                      Föreläsningar kan bokas med kort varsel.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vilka branscher fokuserar ni på?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Primärt retail och FMCG där jag har djupast expertis. Men min erfarenhet av 
                      transformation, internationalisering och turnarounds är applicerbar på många 
                      B2C-branscher och tillväxtföretag.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.5}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Arbetar ni internationellt?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Ja, främst inom Norden och Europa. Jag har bred erfarenhet av internationell 
                      expansion och kulturell transformation. Föreläsningar kan hållas på svenska, 
                      engelska eller tyska.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.6}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vad kostar en första träff?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Det första introduktionssamtalet är alltid kostnadsfritt, oavsett typ av 
                      samarbete. Vi diskuterar era behov, min bakgrund och om det finns en 
                      naturlig match innan vi pratar om konkreta upplägg.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1e4a5f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Redo att starta er transformation?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Låt oss börja med ett öppet samtal om era utmaningar och möjligheter. 
                  Inga förväntningar, bara en ärlig diskussion om vägen framåt.
                </p>
                <div className="inline-flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5" />
                  <span>Ring direkt:</span>
                  <a href="tel:+46739853260" className="font-semibold hover:underline">
                    +46 73 985 32 60
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
    </>
  );
}