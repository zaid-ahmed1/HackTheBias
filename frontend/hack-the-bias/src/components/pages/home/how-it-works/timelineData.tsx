import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const timelineData: TimelineStep[] = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
    title: 'Pick a Challenge',
    description:
      'Choose from a list of curated prompts focused on justice, equity, health, and accessibility.',
    color: '#153166',
    bgColor: '#B7C4FC',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: 'Form a Team',
    description:
      'Collaborate with passionate hackers, designers, and changemakers to brainstorm bold solutions.',
    color: '#153166',
    bgColor: '#BCEAF8',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    title: 'Build & Launch',
    description:
      'Turn your idea into reality in 36 hours. Present your project to judges and make your impact.',
    color: '#153166',
    bgColor: '#F7D8F6',
  },
];

export default timelineData;
