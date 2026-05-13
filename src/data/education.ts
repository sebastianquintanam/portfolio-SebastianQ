export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'Systems Engineering',
    institution: 'Universidad ean',
    location: 'Bogotá, Colombia',
    period: 'July 2023 – Present',
    note: '6th semester',
  },
  {
    degree: 'Software Development & Programming Fundamentals',
    institution: 'MinTIC / Universidad Tecnológica de Pereira',
    period: 'March – December 2022',
  },
  {
    degree: 'English Studies',
    institution: 'Greenwich College & Focus Language School',
    location: 'Melbourne, Australia',
    period: '2018 – 2019',
  },
  {
    degree: 'Occupational Safety and Health Administration',
    institution: 'Universidad Militar Nueva Granada',
    location: 'Bogotá, Colombia',
    period: '2012 – 2016',
  },
];
