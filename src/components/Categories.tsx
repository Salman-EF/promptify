import React from 'react';
import { Stack, Button } from '@mui/material';
import catgImg from '../assets/img/catg.png';


const Categories: React.FC = () => {
   const catgs = [
      { title: 'All Directions' },
      { title: 'Personal Development' },
      { title: 'Welness' },
      { title: 'Content Marketing' },
      { title: 'Creative Writing' },
      { title: 'Professional Writing' },
      { title: 'Entertainment & Social' },
      { title: 'Art' },
      { title: 'Sustainability' },
      { title: 'Tourism & Leisure' }
   ]

   return (
      <Stack 
         direction={'row'} justifyContent={'space-around'} spacing={1}
         className="land-categories"
      >
         {catgs.map((catg, i) => (
         <Button key={i} href='#'>
            <img src={catgImg} alt="Logo" />
            {catg.title} 
         </Button>
         ))}
      </Stack>
   );
};

export default Categories;
