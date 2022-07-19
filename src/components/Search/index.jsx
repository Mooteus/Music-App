import React from 'react';

import {
  SearchContainer,
  SearchInput,
  SearchIcon,
} from './Search.styled';

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Search for artists, songs & album..." />
    </SearchContainer>
  );
}

export default Search;
