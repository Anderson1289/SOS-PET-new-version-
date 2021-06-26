import styled from 'styled-components';

export const Body = styled.div `
    /* background: var(--black); */
    /* text-align: center; */
    .menu {
        background: var(--yellow);
    }
    .title-main {
        font-size: 30px;
        text-shadow: 1px 1px 2px black;
        font-family: monospace;
    }
    .title, .title-main {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        
    }
    .title {
        color: var(--yellow)
    }
    .landing {
        display: flex;
        justify-content: center;
        margin-left:0;
        height: 100vh;
        width:100%;
        -webkit-font-smoothing: antialiased;
        background-image: url('/wallpaper.png');
        background-repeat: no-repeat;
        background-size: cover;

        .button-enter {
            background: var(--yellow) !important;
            border-color: var(--black)!important;
            transform: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }
        }

        .sign-up {
            background: var(--lightOrange) !important;
            border-color: var(--black)!important;
            margin-left: 2rem;
            transform: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }
        }
    } 

    .form-login {
        margin-top: 50%;
    }
    
    .login {
        align-items: center;
        justify-content: center;
        height: 100vh;
        width:100%;
        text-align: center;
    }

    .user {
        color: var(--yellow);
    }

    .password {
        color: var(--darkorange)
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

