import { createGlobalStyle } from 'styled-components';
import {font} from "@/app/styles/Common";
import theme from "@/app/styles/theme";


const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    ul li {
        position: relative;
        padding-left: 1.5em;
        margin-bottom: 0.5em;

    ${font({weight: 500,lineHeight:1.3, Fmin: 16, Fmax:40,color: theme.colors.colorTextPrimary})}
    }
    

    ul li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.25em;
        width: 1em;
        height: 1em;
        background: url('/assets/imgs/bullet.svg') no-repeat center center;
        background-size: contain;
    }

    body {
        line-height: 1.5;
    }
    
    section {
        margin: 0 20px 20px 20px;
        padding: 7px;
    }
    
`

export default GlobalStyle