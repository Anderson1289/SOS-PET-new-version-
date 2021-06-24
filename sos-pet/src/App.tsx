import styled from 'styled-components';
import { Login } from './components/Login'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global';
const Title = styled.h1 `
  font-size: 64px;
  color: yellow
`

export function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
    </>
  );
}
