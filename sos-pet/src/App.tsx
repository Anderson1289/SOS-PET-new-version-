import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const Title = styled.h1 `
  font-size: 64px;
  color: yellow
`

export function App() {
  return (
    <div className="App">
      <Title>SOS PET</Title>
      <GlobalStyle/>
    </div>
  );
}
