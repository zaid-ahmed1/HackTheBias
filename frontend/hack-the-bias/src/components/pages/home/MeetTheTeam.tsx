'use client';

import GradientText from '@/components/ui/GradientText';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Zaid Ahmed',
    program: 'Software Engineering',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'VP Special Events Coordinator / Lead Organizer',
    avatar: '/team/zaid.jpg',
  },

  {
    name: 'Vivian Tat',
    program: 'Electrical Engineering',
    year: '3rd Year',
    school: 'University of Calgary',
    position: 'Marketing + Finance',
    avatar: '/team/vivian.jpg',
  },
  {
    name: 'Orin Zaman',
    program: 'Sciences',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'President / Coordinator',
    avatar: '/team/orin.jpg',
  },
  {
    name: 'Nicola Savino',
    program: 'Software & Aerospace Engineering',
    year: '4th Year',
    school: 'University of Calgary',
    position: 'Special Events Coordinator / Developer',
    avatar: '/team/nick.jpg',
  },
  {
    name: 'Abiya Raheel',
    program: 'Software Engineering',
    year: '2nd Year',
    school: 'University of Calgary',
    position: 'Marketing + Design',
    avatar: '/team/abiya.jpg',
  },

  {
    name: 'Joy Wang',
    program: 'Computer Science',
    year: '3rd Year',
    school: 'University of Calgary',
    position: 'Logistics Coordinator',
    avatar: '/team/joy.jpg',
  },
];

export default function MeetTheTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 280 : 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box py={6}>
      <GradientText variant="h4" align="center" gutterBottom>
        Meet The Team
      </GradientText>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        mb={4}
        sx={{ maxWidth: '600px', mx: 'auto' }}
      >
        The passionate students behind Hack The Bias, working to create a more
        inclusive tech community.
      </Typography>

      <Box sx={{ position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: { xs: -10, sm: -20 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeft />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: { xs: -10, sm: -20 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            px: { xs: 2, sm: 4 },
            py: 2,
            // Hide scrollbar
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            // Add momentum scrolling on iOS
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {teamMembers.map((member, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                minWidth: { xs: '260px', sm: '300px' },
                height: { xs: '280px', sm: '320px' }, // Fixed height for uniform cards
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                border: '1px solid rgba(183, 196, 252, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  borderColor: 'rgba(183, 196, 252, 0.4)',
                },
              }}
            >
              {/* Top Content */}
              <Box sx={{ flex: 1 }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    border: '3px solid #B7C4FC',
                    boxShadow: '0 4px 12px rgba(183, 196, 252, 0.3)',
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    mb: 1,
                    color: '#153166',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 0.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {member.program}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    fontSize: '0.85rem',
                  }}
                >
                  {member.year}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    fontSize: '0.8rem',
                    fontStyle: 'italic',
                  }}
                >
                  {member.school}
                </Typography>
              </Box>

              {/* Position Badge - Anchored at bottom */}
              <Box
                sx={{
                  backgroundColor: '#153166',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: '20px',
                  minHeight: '50px', // Consistent height for all badges
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 'auto', // Push to bottom
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                >
                  {member.position}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
