export type ProjectType =
  | 'Professional Case Study'
  | 'Cybersecurity System Design'
  | 'Personal Technical Project'
  | 'Currently Building';

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  tags: string[];
  link?: string;
  isBuilding?: boolean;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Internal CRM & Database Optimization',
    type: 'Professional Case Study',
    description:
      'Built and optimized internal tools for a Tokyo-based company working across metal manufacturing and architectural construction solutions, focusing on CRM workflows, MySQL performance and corporate website delivery.',
    tags: ['MySQL', 'JavaScript', 'CRM', 'Performance'],
  },
  {
    title: 'University Session Security System',
    type: 'Cybersecurity System Design',
    description:
      'Designed a security proposal to reduce risks from open sessions in shared university computer labs through inactivity controls, cleanup flows and privacy awareness.',
    tags: ['Cybersecurity', 'Privacy', 'Access Control', 'System Design'],
  },
  {
    title: 'Portfolio System',
    type: 'Personal Technical Project',
    description:
      'A portfolio built with Astro, Tailwind and TypeScript, focused on clean component structure, performance and a minimalist dark interface.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Static Site'],
    inProgress: true,
  },
  {
    title: 'Payment Checkout Platform',
    type: 'Currently Building',
    description:
      'Building a payment checkout platform focused on API integration, error handling and backend reliability.',
    tags: ['Payment API', 'REST API', 'Clean Architecture'],
    isBuilding: true,
  },
];
