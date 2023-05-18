import React from 'react';
import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

interface Prompt {
  title: string;
  imageSrc: string;
}
interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ margin: '0 10px' }}>
         <CardMedia component="img" height="100" image={prompt.imageSrc} alt={prompt.title} />
         <CardContent>
         <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {prompt.title}
         </Typography>
         </CardContent>
      </Card>
    </Box>
  );
};

export default PromptCard;
