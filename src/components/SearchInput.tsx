import React, { useState } from 'react';
import { InputBase, Button, InputLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchInput: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState<string>('prompts');

  return (
    <div className='search-input'>
      <div style={{flex: '1', display: 'flex'}}>
        <InputLabel htmlFor="search"><SearchIcon /></InputLabel>
        <InputBase id="search"
          placeholder="Search prompts"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ flex: '1' }}
        />
      </div>
      <div className='categories'>
        <Button 
          variant={searchCategory === 'prompts' ? 'contained' : 'text'} 
          onClick={e => setSearchCategory('prompts')}
          className={searchCategory === 'prompts' ? 'selected' : ''}
          size='small'
        >Prompts</Button>
        <Button 
          variant={searchCategory === 'collections' ? 'contained' : 'text'} 
          onClick={e => setSearchCategory('collections')}
          className={searchCategory === 'collections' ? 'selected' : ''}
          size='small'
        >Collections</Button>
      </div>
    </div>
  );
};

export default SearchInput;
