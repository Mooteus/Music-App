import React from 'react';

import {
  SideBarContainer,
  LogoContainer,
  LogoImage,
  NavContainer,
  NavOption,
  FavoritesIcon,
  NavOptionText,
} from './SideBar.styled';

function SideBar() {
  return (
    <SideBarContainer>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <NavContainer>
        <NavOption>
          <FavoritesIcon />
          <NavOptionText>Favorites</NavOptionText>
        </NavOption>
      </NavContainer>
    </SideBarContainer>
  );
}

export default SideBar;
