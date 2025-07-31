'use client';

import { Box, Typography } from '@mui/material';
import timelineData, { type TimelineStep } from './timelineData';

interface MobileTimelineProps {
  steps?: TimelineStep[];
}

export default function MobileTimeline({
  steps = timelineData,
}: MobileTimelineProps) {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'relative',
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            mb: index === steps.length - 1 ? 0 : 4,
          }}
        >
          {/* Vertical Line */}
          {index !== steps.length - 1 && (
            <Box
              sx={{
                position: 'absolute',
                left: 39,
                top: 80,
                bottom: -32,
                width: '4px',
                background: `linear-gradient(180deg, ${step.bgColor} 0%, ${steps[index + 1]?.bgColor || step.bgColor} 100%)`,
                borderRadius: '2px',
              }}
            />
          )}

          {/* Step Circle Container */}
          <Box
            sx={{
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {/* Step Circle */}
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
          <Box sx={{ ml: 3, flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mb: 1,
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
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
