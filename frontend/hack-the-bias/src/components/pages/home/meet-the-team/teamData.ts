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
    program: 'Electrical Engineering',
    year: '3rd Year',
    school: 'University of Calgary',
    position: 'Marketing + Finance',
    avatar: '/team/vivian.jpg',
    linkedin: null,
  },
  {
    name: 'Orin Zaman',
    program: 'Sciences',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'President / Coordinator',
    avatar: '/team/orin.jpg',
    linkedin: null,
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
