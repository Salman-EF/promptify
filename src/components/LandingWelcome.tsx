import React from 'react';
import { Typography } from '@mui/material';

const LandingWelcome: React.FC = () => {
  return (
    <div className='land-welcome'>
      <Typography variant="h3">
        Welcome to Promptify
      </Typography>
      <Typography variant="body1">
         Unleash your creative potential using Promptify, the ultimate ChatGPT and AI-driven content generation and idea inspiration platform. Try it today!
      </Typography>
    </div>
  );
};

export default LandingWelcome;
