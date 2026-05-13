export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'June 2023',
  },
  {
    name: 'Google Cloud Cybersecurity Certificate',
    issuer: 'Google',
    date: 'April 2026',
  },
  {
    name: 'AWS Academy Graduate – AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'September 2025',
  },
  {
    name: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    date: 'September 2025',
  },
  {
    name: 'Python Programming',
    issuer: 'Universidad ean',
    date: 'May 2024',
  },
  {
    name: 'Web Development with Python, Django & Flask',
    issuer: 'UColtis',
    date: 'November 2022',
  },
];
