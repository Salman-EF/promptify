import React from 'react';
import { Button, Typography } from '@mui/material';
import SearchInput from './SearchInput';

const LandingWelcome: React.FC = () => {
  return (
    <div className='land-welcome'>
      <Typography variant="h3">
        Welcome to Promptify
      </Typography>
      <Typography variant="body1">
         Unleash your creative potential using Promptify, the ultimate ChatGPT and AI-driven content generation and idea inspiration platform. Try it today!
      </Typography>
      <SearchInput />
      <div className='topics'>
         <Typography variant="body1">
            Popular topics: <Button>Personal Finance</Button><Button>ChatGPT4</Button><Button>Learning</Button><Button>Books</Button><Button>Scenario</Button>
         </Typography>
      </div>
    </div>
  );
};

export default LandingWelcome;
