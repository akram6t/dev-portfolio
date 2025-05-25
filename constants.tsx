
import React from 'react';
import type { NavLink, Project, SkillCategory, SocialLink } from './types';

// Hero Icons (simple SVG versions)
export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'QuantumFlux OS',
    description: 'A conceptual next-gen operating system interface.',
    imageUrl: 'https://picsum.photos/seed/quantum/600/400',
    tags: ['UI/UX', 'Concept', 'Futuristic', 'React'],
    liveUrl: '#',
    repoUrl: '#',
    longDescription: 'QuantumFlux OS is an exploration into future user interfaces, leveraging conceptual quantum computing principles for a dynamic and adaptive user experience. Features include holographic projections and AI-driven task management.'
  },
  {
    id: 'proj2',
    title: 'NeuralNet Visualizer',
    description: 'Interactive tool for visualizing neural network architectures.',
    imageUrl: 'https://picsum.photos/seed/neural/600/400',
    tags: ['Data Viz', 'AI', 'JavaScript', 'D3.js'],
    liveUrl: '#',
    repoUrl: '#',
    longDescription: 'This tool allows users to build and visualize complex neural network architectures in real-time. It supports various layer types and activation functions, providing insights into model structure.'
  },
  {
    id: 'proj3',
    title: 'SynthWave Player',
    description: 'A retro-futuristic music player application.',
    imageUrl: 'https://picsum.photos/seed/synth/600/400',
    tags: ['Web App', 'Audio', 'Vue.js', 'Nostalgia'],
    longDescription: 'Experience the 80s with SynthWave Player, a web-based music application featuring a retro interface, visualizers, and curated synthwave tracks. Built for performance and aesthetic appeal.'
  },
   {
    id: 'proj4',
    title: 'CyberSecure Dashboard',
    description: 'Real-time cybersecurity threat monitoring dashboard.',
    imageUrl: 'https://picsum.photos/seed/cyber/600/400',
    tags: ['Security', 'Dashboard', 'Angular', 'API'],
    longDescription: 'A comprehensive dashboard for monitoring cybersecurity threats, displaying real-time data from various sources. Features include alert systems, geographical threat mapping, and incident reporting.'
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      { id: 'html', name: 'HTML5', level: 95 },
      { id: 'css', name: 'CSS3 & Tailwind', level: 90 },
      { id: 'js', name: 'JavaScript (ES6+)', level: 92 },
      { id: 'ts', name: 'TypeScript', level: 88 },
      { id: 'react', name: 'React & Next.js', level: 93 },
      { id: 'vue', name: 'Vue.js', level: 80 },
      { id: 'angular', name: 'Angular', level: 75 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      { id: 'node', name: 'Node.js & Express', level: 85 },
      { id: 'python', name: 'Python (Django/Flask)', level: 80 },
      { id: 'ruby', name: 'Ruby on Rails', level: 70 },
      { id: 'db', name: 'SQL & NoSQL Databases', level: 82 },
      { id: 'api', name: 'REST & GraphQL APIs', level: 88 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { id: 'git', name: 'Git & GitHub', level: 95 },
      { id: 'docker', name: 'Docker', level: 78 },
      { id: 'aws', name: 'AWS', level: 70 },
      { id: 'figma', name: 'Figma', level: 85 },
      { id: 'linux', name: 'Linux/Unix Shell', level: 90 },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', name: 'GitHub', url: 'https://github.com', icon: <GitHubIcon className="w-6 h-6" /> },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedInIcon className="w-6 h-6" /> },
  { id: 'email', name: 'Email', url: 'mailto:developer@example.com', icon: <EnvelopeIcon className="w-6 h-6" /> },
];
