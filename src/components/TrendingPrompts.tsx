import PromptCard from "./PromptCard";
import promptImg from '../assets/img/prompt.png';
import { Stack, Typography } from "@mui/material";


function TrendingPrompts() {
   const prompts = [
     { title: 'UX/UI Designer v2.1 - Rachel Johnson', imageSrc: promptImg },
     { title: 'UX/UI Designer v2.1 - Rachel Johnson', imageSrc: promptImg },
     { title: 'UX/UI Designer v2.1 - Rachel Johnson', imageSrc: promptImg },
   ];

  return (
   <div className="prompts-section">
      <Typography variant="h6" className="title">Trending Prompts</Typography>
      <Stack
         direction={'row'} justifyContent={'flex-start'} spacing={2} flexWrap={"wrap"}
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
