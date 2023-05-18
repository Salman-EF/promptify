import React from 'react';
import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import { Prompt } from '../utils/constants';
interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Card>
         <CardMedia component="img" image={prompt.imageSrc} alt={prompt.title} 
            className="prompt-img" 
         />
         <CardContent>
            <Typography variant="h6">{prompt.title}</Typography>
            <Typography variant="body2">
               <div className='topics'>
                  {prompt.topics.map((topic, i) => (
                     <span key={i}>{topic}</span>
                  ))}
               </div>
            </Typography>
         </CardContent>
      </Card>
    </Box>
  );
};

export default PromptCard;
