export interface TeamMember {
  name: string;
  program: string;
  year: string;
  school: string;
  position: string;
  avatar: string;
  linkedin: string | null;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Zaid Ahmed',
    program: 'Software Engineering',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'VP Special Events Coordinator / Lead Organizer',
    avatar: '/team/zaid.jpg',
    linkedin: 'https://www.linkedin.com/in/zaid-ahmed-swe/',
  },
  {
    name: 'Vivian Tat',
    program: 'Electrical & Biomedical Engineering',
    year: '3rd Year',
    school: 'University of Calgary',
    position: 'Special Events Coordinator / Marketing',
    avatar: '/team/vivian.jpg',
    linkedin: 'https://www.linkedin.com/in/viviantat',
  },
  {
    name: 'Orin Zaman',
    program: 'Environmental Science & Psychology',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'President / Coordinator',
    avatar: '/team/orin.jpg',
    linkedin: 'https://linkedin.com/in/orin-zaman-49409a2b3',
  },
  {
    name: 'Nicola Savino',
    program: 'Software & Aerospace Engineering',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'Special Events Coordinator / Developer',
    avatar: '/team/nick.jpg',
    linkedin: 'https://linkedin.com/in/nicola-savino',
  },
  {
    name: 'Abiya Raheel',
    program: 'Software Engineering',
    year: '2nd Year',
    school: 'University of Calgary',
    position: 'Marketing + Design',
    avatar: '/team/abiya.jpg',
    linkedin: null,
  },
  {
    name: 'Joy Wang',
    program: 'Computer Science',
    year: '3rd Year',
    school: 'University of Calgary',
    position: 'Logistics Coordinator',
    avatar: '/team/joy.jpg',
    linkedin: null,
  },
];

export default teamMembers;
