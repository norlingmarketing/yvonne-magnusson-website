import { Article } from "@/lib/types";

export const categories = ["Alla", "Transformation", "Ledarskap", "Retail", "Digital", "Kultur"];

export const articles: Article[] = [
  {
    id: 1,
    title: "5 Kritiska Framgångsfaktorer för Retail-transformation",
    excerpt: "Efter 30+ år inom retail har jag identifierat de faktorer som avgör om en transformation lyckas eller misslyckas. Här är mina viktigaste lärdomar.",
    category: "Transformation",
    readTime: "6 min",
    publishDate: "2024-01-15",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: true,
    tags: ["Retail", "Transformation", "Strategi"]
  },
  {
    id: 2,
    title: "Varför 70% av Alla Förändringsinitiativ Misslyckas",
    excerpt: "Statistiken är skrämmande - men det finns tydliga mönster i vad som skiljer framgångsrika transformationer från de som havererar.",
    category: "Ledarskap",
    readTime: "8 min",
    publishDate: "2024-01-08",
    author: "Yvonne Magnusson", 
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Ledarskap", "Förändring", "Organisationskultur"]
  },
  {
    id: 3,
    title: "Digital Transformation i Retail - Bortom Buzzwords",
    excerpt: "Digital transformation handlar inte om teknik - det handlar om människor, processer och en helt ny way of working.",
    category: "Digital",
    readTime: "7 min",
    publishDate: "2024-01-01",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400", 
    featured: true,
    tags: ["Digital", "Retail", "Innovation"]
  },
  {
    id: 4,
    title: "Byggandet av Högpresterande Team i Krislägen",
    excerpt: "När organisationen befinner sig i kris behövs speciella ledarskapstekniker för att snabbt bygga förtroende och leveranskapacitet.",
    category: "Ledarskap",
    readTime: "5 min",
    publishDate: "2023-12-20",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Ledarskap", "Team", "Krishantering"]
  },
  {
    id: 5,
    title: "Framtidens Retail: Trender som Formar Branschen",
    excerpt: "En djupgående analys av de makrotrender som kommer att definiera retail de närmaste 5-10 åren, och vad det betyder för ledare.",
    category: "Retail",
    readTime: "10 min",
    publishDate: "2023-12-15",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Retail", "Trender", "Framtid"]
  },
  {
    id: 6,
    title: "Kulturförändring som Konkurrensförder",
    excerpt: "Organisationskultur är ofta den dolda faktorn som avgör framgång. Här är min metodik för att systematiskt utveckla kulturen.",
    category: "Kultur",
    readTime: "9 min",
    publishDate: "2023-12-10",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Kultur", "Organisationsutveckling", "Ledarskap"]
  },
  {
    id: 7,
    title: "Internationalisering: Att Skala utan att Tappa Identitet",
    excerpt: "Hur expanderar man till nya marknader samtidigt som man behåller vad som gör företaget unikt? Lärdomar från 8+ länder.",
    category: "Transformation",
    readTime: "7 min",
    publishDate: "2023-11-28",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Internationalisering", "Skalning", "Identitet"]
  },
  {
    id: 8,
    title: "Omnichannel som Faktiskt Fungerar",
    excerpt: "De flesta omnichannel-initiativ misslyckas eftersom de fokuserar på teknik istället för kundupplevelse. Så här gör du rätt.",
    category: "Digital",
    readTime: "6 min",
    publishDate: "2023-11-20",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Omnichannel", "Kundupplevelse", "Retail"]
  },
  {
    id: 9,
    title: "Styrelsens Roll i Digital Transformation",
    excerpt: "Styrelsen spelar en avgörande roll i digital transformation, men många förstår inte hur de kan bidra effektivt.",
    category: "Ledarskap",
    readTime: "8 min",
    publishDate: "2023-11-15",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Styrelsearbete", "Digital", "Transformation"]
  },
  {
    id: 10,
    title: "Data-Driven Beslutsfattande i Praktiken",
    excerpt: "Att bli data-driven handlar inte bara om att samla data - det handlar om att bygga en kultur som faktiskt använder insikterna.",
    category: "Digital",
    readTime: "5 min",
    publishDate: "2023-11-08",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Data", "Beslutsfattande", "Analys"]
  },
  {
    id: 11,
    title: "Sustainable Growth i Retail-branschen",
    excerpt: "Hållbar tillväxt är inte bara ett buzzword - det är framtidens konkurrensfördel. Så här bygger du en verkligt hållbar retailverksamhet.",
    category: "Retail",
    readTime: "11 min",
    publishDate: "2023-11-01",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: true,
    tags: ["Hållbarhet", "Tillväxt", "Retail"]
  },
  {
    id: 12,
    title: "Crisis Leadership: Att Leda Genom Osäkerhet",
    excerpt: "Kris kräver en annan typ av ledarskap. Baserat på erfarenheter från fyra turnarounds delar jag nyckelprinciperna för krishantering.",
    category: "Ledarskap",
    readTime: "9 min",
    publishDate: "2023-10-25",
    author: "Yvonne Magnusson",
    image: "/api/placeholder/600/400",
    featured: false,
    tags: ["Krishantering", "Ledarskap", "Turnaround"]
  }
];

export const featuredArticles = articles.filter(article => article.featured);
export const recentArticles = articles.slice(0, 6);