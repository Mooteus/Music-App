import styled, { keyframes } from 'styled-components';
import { orange } from '../../utils/colors';

export const LoginMain = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, ${orange} 1%,#cce7ff 100%);
`;

export const LoginContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
`;

const wind = keyframes`
  0% {
    background-position: 0 200px, 0 300px, 100px 250px;
  }
  100% {
    background-position: 1000px 200px, 1200px 300px, 1100px 250px;
  }
`;

export const CloudContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png);
  background: url(https://static.radulescu.me/examples/clouds/clouds1000.png) 0 200px,
              url(https://static.radulescu.me/examples/clouds/clouds1200_1.png) 0 300px,
              url(https://static.radulescu.me/examples/clouds/clouds1000_blur3.png) 100px 250px;
animation: ${wind} 20s linear infinite;
`;

export const LoginLabel = styled.label`
   width: 50%;
`;

export const LoginLabelTitle = styled.h2`
  font-weight: bold;
`;

export const LoginEmail = styled.input`
  width: 100%;
  font-size: 20px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${orange};
`;

export const LoginPassword = styled.input`
  width: 100%;
  font-size: 20px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${orange};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: ${orange};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: white;
  color: gray;
  border: 1px solid gray;
  border-radius: 20px;
  cursor: pointer;
`;
