import styled from 'styled-components';

export const Body = styled.div `
    background: var(--black);
    text-align: center;
    overflow-x: hidden; 
    
    .title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .form-login {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .login {
        align-items: center;
        justify-content: center;
        height: 100vh;
        width:100%;
        text-align: center;
    }

    .btn-primary {
        color:#fff;
        background: #813afe !important;
        border-color: #813afe !important;
    }

    .icon-img {
        width: 70px;;
        height: 70px;
        margin-bottom: 2rem;
    }

`

