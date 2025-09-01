"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Article } from "@/lib/types";
import { Dictionary } from "@/lib/types/dictionary";
import { Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";
import { useState } from "react";

interface ArticleCardsProps {
  articles: Article[];
  categories: string[];
  showFeaturedFirst?: boolean;
  dict: Dictionary;
}

export function ArticleCards({ articles, categories, showFeaturedFirst = true, dict }: ArticleCardsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [showAll, setShowAll] = useState(false);

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "Alla" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Sort articles - featured first if enabled, then by date
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (showFeaturedFirst && a.featured !== b.featured) {
      return b.featured ? 1 : -1;
    }
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });

  // Limit display if showAll is false
  const displayedArticles = showAll ? sortedArticles : sortedArticles.slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="text-xs"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedArticles.map((article, index) => (
          <BlurFade key={article.id} delay={0.2 + index * 0.1}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
              {/* Article Image */}
              <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {article.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground">
                      <Bookmark className="h-3 w-3 mr-1" />
                      {dict.insights.articleLabels.featured}
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{dict.insights.articleLabels.imagePlaceholder}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Read More Button */}
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    {dict.insights.articleLabels.readArticle}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && sortedArticles.length > 6 && (
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(true)}
            className="px-8"
          >
            {dict.insights.articleLabels.showMore} ({sortedArticles.length - 6} {dict.insights.articleLabels.articlesRemaining})
          </Button>
        </div>
      )}
    </div>
  );
}