import React from 'react';

import HomeContainer from './Home.styled';
import SideBar from '../../components/SideBar';
import Discover from '../../components/Discover';
import Friends from '../../components/Friends';

function Home() {
  return (
    <HomeContainer>
      <SideBar />
      <Discover />
      <Friends />
    </HomeContainer>
  );
}

export default Home;
