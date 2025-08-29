import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  idealFor: string[];
  approach: string;
  investment: string;
  color: string;
  iconColor: string;
  href: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface CurrentRole {
  icon: LucideIcon;
  title: string;
  companies: string[];
}

export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description: string;
}

export interface ServiceType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ResponsePromise {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  company: string;
  industry: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string[];
  results: CaseStudyResult[];
  testimonial: string;
  author: string;
}

export interface ImpactArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics?: string[];
}

export interface SpeakingTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  audience: string[];
  duration: string;
  format: string[];
  videoThumbnail: string;
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}