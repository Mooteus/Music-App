import React from 'react';

import HomeContainer from './Home.styled';
import SideBar from '../../components/SideBar';
import Discover from '../../components/Discover';

function Home() {
  return (
    <HomeContainer>
      <SideBar />
      <Discover />
    </HomeContainer>
  );
}

export default Home;
