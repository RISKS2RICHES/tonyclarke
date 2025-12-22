import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  stat: string;
  description: string;
}