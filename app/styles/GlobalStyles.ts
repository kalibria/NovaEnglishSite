import { createGlobalStyle } from 'styled-components'

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

    body {
        line-height: 1.5;
    }
    
    section {
        margin: 0 20px 20px 20px;
    }
    
`

export default GlobalStyle