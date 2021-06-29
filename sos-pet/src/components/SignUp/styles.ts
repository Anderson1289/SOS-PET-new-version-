import styled from 'styled-components';

export const Section = styled.div `
    background: var(--black);

    .card {
        border-radius: 25px;
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