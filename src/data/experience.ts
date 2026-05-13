export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'J Create',
    period: 'Jan 2024 – Jan 2025',
    location: 'Remote · Tokyo, Japan',
    bullets: [
      'Refactored MySQL database architecture and optimized query performance, reducing load times across the corporate platform.',
      'Built a custom CRM that streamlined internal sales and support workflows and improved user retention tracking.',
      'Contributed end-to-end to a corporate website relaunch, handling backend integration and frontend delivery.',
    ],
    tags: ['MySQL', 'JavaScript', 'HTML5', 'CSS3', 'CRM', 'Performance Optimization'],
  },
  {
    role: 'Full Stack Developer',
    company: 'UColtis',
    period: 'Aug 2022 – Jul 2023',
    location: 'Remote · Colombia',
    bullets: [
      'Built backend services for scalable EdTech applications using Java 11, Spring Boot, Python, Django and Flask.',
      'Integrated Angular and React frontend modules with backend REST APIs, improving response times and reducing integration errors.',
      'Worked across MySQL and MongoDB databases, maintaining code quality through unit and integration testing.',
    ],
    tags: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'REST APIs', 'MySQL', 'MongoDB', 'Angular', 'React'],
  },
];
