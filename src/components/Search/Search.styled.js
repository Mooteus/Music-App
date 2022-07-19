import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  margin-left: 20px;
  width: 500px;
  font-size: 20px;
  border: none;
  outline: none;
  color: gray;
`;

export const SearchIcon = styled(BsSearch)`
  width: 25px;
  height: 25px;
`;
