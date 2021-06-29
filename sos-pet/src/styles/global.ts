import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f2f0f5;
        --yellow: #ffc107;
        --black: #191818;
        --darkorange: darkorange;
        --lightOrange: #d06526;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75% //15px;
        }
        @media (max-width: 720px){
            font-size: 87.5% //14px;
        }
    }

    body {
        background: var(---background);
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`