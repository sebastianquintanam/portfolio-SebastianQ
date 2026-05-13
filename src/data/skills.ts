const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export interface Skill {
  name: string;
  icon?: string;
  invertIcon?: boolean; // para íconos oscuros que son invisibles en fondo dark
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java',        icon: `${DEVICON}/java/java-original.svg` },
      { name: 'Spring Boot', icon: `${DEVICON}/spring/spring-original.svg` },
      { name: 'Python',      icon: `${DEVICON}/python/python-original.svg` },
      { name: 'Django',      icon: `${DEVICON}/django/django-plain.svg`,    invertIcon: true },
      { name: 'Flask',       icon: `${DEVICON}/flask/flask-original.svg`,   invertIcon: true },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL',   icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: 'Cloud & Security',
    skills: [
      { name: 'AWS',            icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: 'Google Cloud',   icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: 'Cloud Security' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5',       icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3',        icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: 'JavaScript',  icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'Angular',     icon: `${DEVICON}/angular/angular-original.svg` },
      { name: 'React',       icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Astro',       icon: `${DEVICON}/astro/astro-original.svg` },
    ],
  },
  {
    category: 'APIs & Architecture',
    skills: [
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'MVC' },
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      { name: 'Git',                  icon: `${DEVICON}/git/git-original.svg` },
      { name: 'Agile / Scrum' },
      { name: 'Unit Testing' },
      { name: 'Integration Testing' },
      { name: 'CI/CD' },
    ],
  },
];
