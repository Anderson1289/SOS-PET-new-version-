import styled from 'styled-components';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { SignUp } from './components/SignUp';

import { GlobalStyle } from './styles/global';

const Title = styled.h1 `
  font-size: 64px;
  color: yellow
`

export function App() {
  return (
    <>
      <SignUp/>
      <GlobalStyle/>
    </>
  );
}
