'use client';

import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { type TeamMember } from './teamData';

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 300 : 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
      {/* Navigation Arrows */}
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

      {/* Simple Scrollable Container - No infinite scroll */}
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
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {members.map((member, index) => (
          <TeamMemberCard key={`${member.name}-${index}`} member={member} />
        ))}
      </Box>
    </Box>
  );
}
