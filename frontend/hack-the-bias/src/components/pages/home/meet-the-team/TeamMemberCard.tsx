'use client';

import { Box, Typography, Paper, Avatar, Link } from '@mui/material';
import { type TeamMember } from './teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  // Helper function to render avatar (with or without LinkedIn link)
  const renderAvatar = () => {
    const hasLinkedIn = member.linkedin && member.linkedin.trim() !== '';

    const avatarComponent = (
      <Avatar
        src={member.avatar}
        alt={hasLinkedIn ? `${member.name} - Connect on LinkedIn` : member.name}
        sx={{
          width: { xs: 70, sm: 80 },
          height: { xs: 70, sm: 80 },
          mx: 'auto',
          mb: { xs: 1.5, sm: 2 },
          border: '3px solid #B7C4FC',
          boxShadow: '0 4px 12px rgba(183, 196, 252, 0.3)',
          cursor: hasLinkedIn ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          ...(hasLinkedIn && {
            '&:hover': {
              borderColor: '#153166',
              boxShadow: '0 6px 16px rgba(21, 49, 102, 0.4)',
            },
          }),
        }}
      />
    );

    if (hasLinkedIn) {
      return (
        <Link
          href={member.linkedin!} // Use non-null assertion since we already checked hasLinkedIn
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-block',
            textDecoration: 'none',
            borderRadius: '50%',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {avatarComponent}
        </Link>
      );
    }

    return avatarComponent;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: { xs: '280px', sm: '300px' },
        height: { xs: '340px', sm: '320px' },
        p: { xs: 2.5, sm: 3 },
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
        {/* Conditional Avatar with/without LinkedIn Link */}
        {renderAvatar()}

        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            mb: 1,
            color: '#153166',
            fontSize: { xs: '1rem', sm: '1.25rem' },
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
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {member.program}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1,
            fontSize: { xs: '0.75rem', sm: '0.85rem' },
          }}
        >
          {member.year}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: { xs: 1.5, sm: 2 },
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
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
          px: { xs: 1.5, sm: 2 },
          py: 1,
          borderRadius: '20px',
          minHeight: { xs: '45px', sm: '50px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 'auto',
        }}
      >
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          {member.position}
        </Typography>
      </Box>
    </Paper>
  );
}
