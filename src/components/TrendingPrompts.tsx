import { Stack, Typography } from "@mui/material";
import PromptCard from "./PromptCard";
import { promptsList } from "../utils/constants";


function TrendingPrompts() {

  return (
   <div className="prompts-section">
      <Typography variant="h6" className="title">Trending Prompts</Typography>
      <Stack
         direction={'row'} justifyContent={'flex-start'} spacing={2} flexWrap={"wrap"}
         className="prompts"
      >
         {promptsList.map((prompt, i) => (
            <PromptCard key={i} prompt={prompt} />
         ))}
      </Stack>
   </div>
  );
}

export default TrendingPrompts;
