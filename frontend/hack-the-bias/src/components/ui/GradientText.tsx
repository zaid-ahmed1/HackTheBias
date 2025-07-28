'use client';

import { Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

interface GradientTextProps extends Omit<TypographyProps, 'children'> {
  children: ReactNode;
  colors?: string[];
  animationDuration?: string;
  animationName?: string;
}

export default function GradientText({
  children,
  colors = ['#6179e2', '#7d4c7c', '#7ad2ed', '#7d4c7c', '#6179e2'],
  animationDuration = '4s',
  animationName = 'shimmerLoop',
  sx,
  ...props
}: GradientTextProps) {
  const gradientColors = colors
    .map((color, index) => `${color} ${(index / (colors.length - 1)) * 100}%`)
    .join(', ');

  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 700,
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `${animationName} ${animationDuration} ease-in-out infinite`,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
