"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Target, Lightbulb, BookOpen, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InsightsContent() {
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  const categories = ["Alla", "Transformation", "Ledarskap", "Retail", "Digital", "Kultur"];

  const articles = [
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
      publishDate: "2023-12-08",
      author: "Yvonne Magnusson",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Kultur", "Organisationsutveckling", "Förändring"]
    }
  ];

  const filteredArticles = selectedCategory === "Alla" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  const insights = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#2C5F7C]" />,
      title: "Transformation Insights",
      description: "Djupgående analyser av framgångsrika förändringsprocesser",
      count: "12 artiklar"
    },
    {
      icon: <Users className="h-8 w-8 text-[#2C5F7C]" />,
      title: "Ledarskap & Team",
      description: "Praktiska råd för att utveckla ledarskapskraft och teameffektivitet",
      count: "8 artiklar"
    },
    {
      icon: <Target className="h-8 w-8 text-[#2C5F7C]" />,
      title: "Retail Strategy",
      description: "Branschspecifika insikter och strategiska perspektiv",
      count: "15 artiklar"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#2C5F7C]" />,
      title: "Innovation & Digital",
      description: "Navigering av digital transformation och innovationsprocesser",
      count: "6 artiklar"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Insights & <span className="text-[#2C5F7C]">Perspektiv</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Djupgående analyser, praktiska råd och strategiska perspektiv från 
                30+ år av transformation och ledarskap inom retail och FMCG.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              {insights.map((insight, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">{insight.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{insight.description}</p>
                  <span className="text-[#2C5F7C] font-medium text-sm">{insight.count}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Utvalda Artiklar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De mest lästa och diskuterade artiklarna med praktiska insikter 
                för transformation och ledarskap.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <BlurFade key={article.id} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-[#2C5F7C] to-[#1a4a5c] relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4A574] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Utvalda
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#2C5F7C] text-white px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(article.publishDate).toLocaleDateString('sv-SE')}
                      </div>
                      <Link 
                        href={`/insikter/${article.id}`}
                        className="inline-flex items-center text-[#2C5F7C] font-medium hover:text-[#1a4a5c] transition-colors"
                      >
                        Läs mer
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Alla Artiklar
                </h2>
                <p className="text-xl text-gray-600">
                  Utforska vårt kompletta bibliotek av insights och analyser.
                </p>
              </div>
              
              {/* Category Filter */}
              <div className="mt-6 md:mt-0">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Filtrera:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-[#2C5F7C] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <BlurFade key={article.id} delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#2C5F7C] text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(article.publishDate).toLocaleDateString('sv-SE')}
                    </div>
                    <Link 
                      href={`/insikter/${article.id}`}
                      className="inline-flex items-center text-[#2C5F7C] font-medium hover:text-[#1a4a5c] transition-colors"
                    >
                      Läs mer
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F7C] to-[#1a4a5c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <BookOpen className="h-16 w-16 text-[#D4A574] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Få de Senaste Insikterna
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Prenumerera på vårt nyhetsbrev och få tillgång till exklusiva analyser, 
              case studies och praktiska verktyg för transformation och ledarskap.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                />
                <ShimmerButton className="whitespace-nowrap">
                  Prenumerera
                </ShimmerButton>
              </div>
            </div>
            
            <p className="text-blue-200 text-sm">
              Månadsvis • Ingen spam • Avsluta när som helst
            </p>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vill Du Diskutera Dina Utmaningar?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Boka ett kostnadsfritt strategisamtal för att diskutera hur dessa insights 
              kan tillämpas på era specifika utmaningar och möjligheter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <ShimmerButton className="w-full sm:w-auto">
                  Boka Strategisamtal
                </ShimmerButton>
              </Link>
              <Link 
                href="/tjanster"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2C5F7C] text-[#2C5F7C] font-semibold rounded-full hover:bg-[#2C5F7C] hover:text-white transition-all duration-300"
              >
                Se Alla Tjänster
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}