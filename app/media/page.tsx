import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "Media & Press - Pressresurser och Expertkommentarer",
  description: "Presskit, mediematerial och expertkommentarer från Yvonne Magnusson. Tillgänglig för intervjuer, keynotes och expertanalys inom transformation och retail.",
  keywords: [
    "media kit",
    "press resources",
    "expert commentary",
    "keynote speaker",
    "media appearances",
    "transformation expert",
    "retail expert",
    "press releases",
    "speaking engagements",
    "media interviews"
  ],
};

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Download, ExternalLink, Calendar, Users, Camera, Mic, FileText, Image as ImageIcon, Video, Award, Star, Mail } from "lucide-react";
import Link from "next/link";

export default function MediaPage() {
  const pressReleases = [
    {
      title: "Yvonne Magnusson Utsedd till Årets Transformationsledare 2024",
      date: "2024-01-20",
      summary: "Erkännande för framgångsrik turnaround av nordisk retailkedja med 47% omsättningstillväxt.",
      category: "Utmärkelse",
      downloadUrl: "/media/press-release-2024-01.pdf"
    },
    {
      title: "Ny Studie: Digital Transformation inom Retail - Kritiska Framgångsfaktorer",
      date: "2023-12-15", 
      summary: "Omfattande undersökning av 50+ transformationsprojekt avslöjar nyckelfaktorer för framgång.",
      category: "Forskningsrapport",
      downloadUrl: "/media/digital-transformation-study-2023.pdf"
    },
    {
      title: "Yvonne Magnusson Blir Styrelseordförande för RetailTech Innovation Hub",
      date: "2023-11-08",
      summary: "Strategisk satsning på att accelerera innovation och digital transformation inom retail.",
      category: "Utnämning", 
      downloadUrl: "/media/press-release-2023-11.pdf"
    }
  ];

  const mediaKit = [
    {
      type: "Högupplösta Bilder",
      icon: <ImageIcon className="h-6 w-6" />,
      description: "Professionella profilbilder och presentationsfoton",
      items: [
        { name: "Yvonne_Magnusson_Portrait_HighRes.jpg", size: "3.2 MB" },
        { name: "Yvonne_Magnusson_Speaking_Event.jpg", size: "2.8 MB" },
        { name: "Yvonne_Magnusson_Boardroom.jpg", size: "2.1 MB" }
      ],
      downloadUrl: "/media/images-package.zip"
    },
    {
      type: "Biografi & CV",
      icon: <FileText className="h-6 w-6" />,
      description: "Detaljerad bakgrund och karriärhistorik",
      items: [
        { name: "Yvonne_Magnusson_Biografi_SV.pdf", size: "245 KB" },
        { name: "Yvonne_Magnusson_Biography_EN.pdf", size: "231 KB" },
        { name: "Executive_Summary_CV.pdf", size: "156 KB" }
      ],
      downloadUrl: "/media/biography-package.zip"
    },
    {
      type: "Videomaterial",
      icon: <Video className="h-6 w-6" />,
      description: "Keynote-klipp och intervjumaterial",
      items: [
        { name: "Keynote_Transformation_Leadership.mp4", size: "125 MB" },
        { name: "Interview_Retail_Future.mp4", size: "89 MB" },
        { name: "Quick_Intro_Video.mp4", size: "45 MB" }
      ],
      downloadUrl: "/media/video-package.zip"
    }
  ];

  const mediaAppearances = [
    {
      outlet: "SVT Aktuellt",
      type: "TV-intervju",
      topic: "Framtidens Retail efter Pandemin",
      date: "2024-01-15",
      link: "https://www.svtplay.se/video/123456",
      image: "/api/placeholder/200/120"
    },
    {
      outlet: "Dagens Industri",
      type: "Expertkommentar", 
      topic: "Digital Transformation - Hur Lyckas Man?",
      date: "2023-12-20",
      link: "https://www.di.se/artikel/digital-transformation",
      image: "/api/placeholder/200/120"
    },
    {
      outlet: "Retail Podcast Network",
      type: "Podcast",
      topic: "Secrets of Successful Retail Turnarounds",
      date: "2023-11-30",
      link: "https://retailpodcast.com/episode/yvonne-magnusson",
      image: "/api/placeholder/200/120"
    },
    {
      outlet: "Nordic Business Review",
      type: "Artikelserie",
      topic: "Leadership in Crisis: A 3-Part Series",
      date: "2023-10-15",
      link: "https://nordicbusiness.com/leadership-crisis-series",
      image: "/api/placeholder/200/120"
    }
  ];

  const speakingTopics = [
    {
      title: "Transformation Leadership",
      description: "Att leda framgångsrika förändringsprocesser i komplexa organisationer",
      duration: "45-60 min",
      audience: "C-suite, Senior Management, Styrelseledamöter"
    },
    {
      title: "Retail Renaissance", 
      description: "Framtidens retail och hur traditionella aktörer kan återta initiativet",
      duration: "30-45 min",
      audience: "Retail executives, Entrepreneurs, Investerare"
    },
    {
      title: "Digital Transformation Beyond Technology",
      description: "Människan i centrum för framgångsrik digitalisering",
      duration: "45-60 min", 
      audience: "IT-ledare, Digital officers, Projektledare"
    },
    {
      title: "Crisis Leadership",
      description: "Ledarskap i kris - från överlevnad till tillväxt",
      duration: "30-45 min",
      audience: "VD:ar, Interimchefer, Turnaround specialists"
    }
  ];

  const credentials = [
    { label: "Media Träning", value: "Professionell medieträning med fokus på TV och podcast" },
    { label: "Språk", value: "Flyt i svenska, engelska och tyska" },
    { label: "Tillgänglighet", value: "Flexibel för både korta kommentarer och djupintervjuer" },
    { label: "Expertområden", value: "Transformation, Retail, Ledarskap, Digital strategi" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Media & <span className="text-[#2C5F7C]">Press</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Pressresurser, mediematerial och expertkommentarer från en av 
                Nordens främsta transformationsledare.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Camera className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Media Expert</h3>
                <p className="text-gray-600 text-sm">Erfaren av TV, radio och podcastintervjuer</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Mic className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Keynote Speaker</h3>
                <p className="text-gray-600 text-sm">Internationell talare på ledande konferenser</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Award className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Branschexpert</h3>
                <p className="text-gray-600 text-sm">Erkänd auktoritet inom transformation</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Users className="h-8 w-8 text-[#2C5F7C] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Tankeledare</h3>
                <p className="text-gray-600 text-sm">Regelbundna analyser och kommentarer</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Senaste Pressmeddelanden
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aktuella nyheter, utmärkelser och viktiga tillkännagivanden.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-[#2C5F7C] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {release.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(release.date).toLocaleDateString('sv-SE')}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{release.summary}</p>
                    </div>
                    <div className="lg:ml-8">
                      <a 
                        href={release.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-[#2C5F7C] text-white rounded-full font-medium hover:bg-[#1a4a5c] transition-colors"
                        download
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Ladda ner PDF
                      </a>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Media Kit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Komplett presspaket med högkvalitativa bilder, biografier och videomaterial 
                för media och eventarrangörer.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaKit.map((kit, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#2C5F7C] text-white rounded-xl mr-4">
                      {kit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{kit.type}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{kit.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {kit.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                        <span className="text-gray-500 text-xs">{item.size}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={kit.downloadUrl}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#2C5F7C] text-white rounded-full font-medium hover:bg-[#1a4a5c] transition-colors"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Ladda ner ({kit.items.length} filer)
                  </a>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Media Appearances */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Senaste Medieframträdanden
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aktuella intervjuer, artiklar och expertkommentarer i ledande medier.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-[#2C5F7C] to-[#1a4a5c] relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4A574] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {appearance.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{appearance.outlet}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(appearance.date).toLocaleDateString('sv-SE')}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                      {appearance.topic}
                    </h4>
                    
                    <a 
                      href={appearance.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#2C5F7C] font-medium hover:text-[#1a4a5c] transition-colors"
                    >
                      Se/Lyssna
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Populära Föreläsningsämnen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Yvonne är en efterfrågad keynote speaker med djup expertis inom 
                transformation, ledarskap och retail strategy.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {speakingTopics.map((topic, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{topic.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 font-medium">Varaktighet:</span>
                      <br />
                      <span className="text-[#2C5F7C] font-semibold">{topic.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Målgrupp:</span>
                      <br />
                      <span className="text-[#2C5F7C] font-semibold">{topic.audience}</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center">
              <Link href="/forelasningar">
                <ShimmerButton className="mr-4">
                  Se Alla Föreläsningsämnen
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Media Credentials */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1a4a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Media Credentials
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Professionell medieexpertis med dokumenterad erfarenhet av 
                intervjuer och kommentarer i nationella och internationella medier.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {credentials.map((credential, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold mb-3">{credential.label}</h3>
                  <p className="text-blue-100 leading-relaxed">{credential.value}</p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Star className="h-12 w-12 text-[#D4A574] mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <p className="text-blue-100">Medieframträdanden</p>
                </div>
                <div>
                  <Mic className="h-12 w-12 text-[#D4A574] mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">25+</div>
                  <p className="text-blue-100">Keynote Presentations</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-[#D4A574] mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">10+</div>
                  <p className="text-blue-100">Branschutmärkelser</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <Mail className="h-16 w-16 text-[#2C5F7C] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Media & Pressförfrågningar
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              För intervjuförfrågningar, expertkommentarer eller talarbokningar, 
              kontakta mig direkt eller genom min assistent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Akuta Medieförfrågningar</h3>
                <p className="text-gray-600 mb-3">För brådskande kommentarer och intervjuer</p>
                <a href="tel:+46701234567" className="text-[#2C5F7C] font-semibold">
                  +46 70 123 45 67
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Allmänna Förfrågningar</h3>
                <p className="text-gray-600 mb-3">För planerade intervjuer och events</p>
                <a href="mailto:media@yvonnemagnusson.com" className="text-[#2C5F7C] font-semibold">
                  media@yvonnemagnusson.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Kontakta för Medieförfrågningar
                </ShimmerButton>
              </Link>
              <Link 
                href="/forelasningar"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2C5F7C] text-[#2C5F7C] font-semibold rounded-full hover:bg-[#2C5F7C] hover:text-white transition-all duration-300"
              >
                Boka som Talare
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}