'use client';

import { Box, Typography, Stack } from '@mui/material';
import timelineData, { type TimelineStep } from './timelineData';

interface DesktopTimelineProps {
  steps?: TimelineStep[];
}

export default function DesktopTimeline({
  steps = timelineData,
}: DesktopTimelineProps) {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'relative',
        py: 4,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1, // Each step takes equal space
              position: 'relative',
            }}
          >
            {/* Timeline Line - positioned relative to each step */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 40, // Center of the 80px circle
                  left: '50%', // Start from center of current circle
                  width: '100%', // Span the full width to next circle
                  height: '4px',
                  background: `linear-gradient(90deg, ${step.bgColor} 0%, ${steps[index + 1].bgColor} 100%)`,
                  borderRadius: '2px',
                  zIndex: 0,
                  transformOrigin: 'left center',
                  ml: '40px', // Offset by circle radius
                }}
              />
            )}

            {/* Step Container for Circle and Badge */}
            <Box
              sx={{
                position: 'relative',
                mb: 3,
              }}
            >
              {/* Step Number Circle */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: step.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.color,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  border: '4px solid white',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {step.icon}
              </Box>

              {/* Step Number Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: '#153166',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  zIndex: 3,
                }}
              >
                {index + 1}
              </Box>
            </Box>

            {/* Content */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mb: 2,
                color: '#153166',
              }}
            >
              {step.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(0,0,0,0.7)',
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              {step.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
