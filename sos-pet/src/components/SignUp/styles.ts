import styled from 'styled-components';

export const Section = styled.div `
    background: var(--black);

    .card {
        border-radius: 25px;
    }

    .form-control {
        border-bottom: 1px solid #999;
        width: 100%;
        display: block;
        padding: 6px 30px;
        font-family: Poppins;
        box-sizing: border-box;
    }

    textarea, input, select,
    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    .form-input:focus {
        color: yellow;
    } 
`
export const Body = styled.div `
    .button {
        background-color: var(--yellow);

        transform: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }

`

export const UseTerm = styled.p `
    .useTerm {
        color: var(--yellow);

        transform: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`