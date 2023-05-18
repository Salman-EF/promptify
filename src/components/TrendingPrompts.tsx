import PromptCard from "./PromptCard";
import promptImg from '../assets/img/prompt.png';
import { Stack, Typography } from "@mui/material";


function TrendingPrompts() {
   const prompts = [
     { title: 'Personal Development', imageSrc: promptImg },
     { title: 'Health and Wellness', imageSrc: promptImg },
     { title: 'Financial Planning', imageSrc: promptImg },
   ];

  return (
   <div className="prompts-section">
      <Typography variant="h6">Trending Prompts</Typography>
      <Stack
         direction={'row'} justifyContent={'center'} spacing={2} flexWrap={"wrap"}
         className="prompts"
      >
         {prompts.map((prompt, i) => (
            <PromptCard key={i} prompt={prompt} />
         ))}
      </Stack>
   </div>
  );
}

export default TrendingPrompts;
