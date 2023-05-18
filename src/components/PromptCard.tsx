import React from 'react';
import { Typography, Card, CardMedia, CardContent, Box, Link } from '@mui/material';
import { Prompt } from '../utils/constants';
import { Favorite } from '@mui/icons-material';
interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Link href="#">
      <Card className="prompt-card">
         <CardMedia component="img" image={prompt.imageSrc} alt={prompt.title} 
            className="prompt-img" 
         />
         <CardContent>
            <Typography variant="h6" className="prompt-ttl">{prompt.title}</Typography>
            <Typography variant="body2">
               <div className='topics'>
                  {prompt.topics.map((topic, i) => (
                     <span key={i} className="topic">{topic}</span>
                  ))}
               </div>
               <div className="footer">
                  <span className="user"><img src={prompt.user.avatar} alt="Logo" /> {prompt.user.name}</span>
                  <span className="likes"><Favorite/> {prompt.likes}</span>
               </div>
            </Typography>
         </CardContent>
      </Card>
      </Link>
    </Box>
  );
};

export default PromptCard;
