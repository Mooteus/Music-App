import React from 'react';
import Search from '../Search';
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
    </DiscoverContainer>
  );
}

export default Discover;
