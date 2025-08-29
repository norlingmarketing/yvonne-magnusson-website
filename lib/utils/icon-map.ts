import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  MessageSquare,
  Users,
  Briefcase,
  TrendingUp,
  Presentation,
  Globe,
  Target,
  CheckCircle,
  Building,
  Zap,
  Award,
  BarChart3,
  ArrowRight,
  Download,
  GraduationCap,
  Linkedin,
  LucideIcon
} from "lucide-react";

export type IconName = 
  | "Mail"
  | "Phone"
  | "MapPin"
  | "Calendar"
  | "Clock"
  | "MessageSquare"
  | "Users"
  | "Briefcase"
  | "TrendingUp"
  | "Presentation"
  | "Globe"
  | "Target"
  | "CheckCircle"
  | "Building"
  | "Zap"
  | "Award"
  | "BarChart3"
  | "ArrowRight"
  | "Download"
  | "GraduationCap"
  | "Linkedin";

export const iconMap: Record<IconName, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Users,
  Briefcase,
  TrendingUp,
  Presentation,
  Globe,
  Target,
  CheckCircle,
  Building,
  Zap,
  Award,
  BarChart3,
  ArrowRight,
  Download,
  GraduationCap,
  Linkedin,
};

export function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName];
}