
import React from 'react';

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  longDescription?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactNode; // Allow SVG or other ReactNode icons
  level?: number; // Optional: 0-100 for proficiency
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  // FIX: Changed type from React.ReactElement to React.ReactElement<React.SVGProps<SVGSVGElement>>
  // This ensures that TypeScript knows that the cloned element can accept SVG props like 'className'.
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}
