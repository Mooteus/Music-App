import React from 'react';

import Search from '../Search';
import Card from '../Card';
import
{
  DiscoverContainer,
  TitleContainer,
  Title,
  MoreSettings,
} from './Discover.styled';

function Discover() {
  return (
    <DiscoverContainer>
      <Search />
      <TitleContainer>
        <Title>Discover</Title>
        <MoreSettings>...</MoreSettings>
      </TitleContainer>
      <div>
        <Card />
      </div>
    </DiscoverContainer>
  );
}

export default Discover;
