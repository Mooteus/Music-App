import styled from 'styled-components';
import { BiAlbum } from 'react-icons/bi';
import { IoIosAlbums } from 'react-icons/io';
import { white, orange } from '../../utils/colors';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  width: 20%;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 100%;
  color: ${orange};
  padding-left: 20px;
  padding-top: 10px;
`;

export const LogoImage = styled(BiAlbum)`
  width:60px;
  height: 60px;
  border-radius: 100px;
`;

export const NavContainer = styled.nav`
  margin-top: 80px;
`;

export const NavOption = styled.div`
  padding-left: 40px;
  color: gray;
  display: flex;
  align-items: center;
`;

export const NavOptionText = styled.span`
  margin-left: 20px;
  font-size: 25px;
`;

export const FavoritesIcon = styled(IoIosAlbums)`
  width: 30px;
  height: 30px;
`;
