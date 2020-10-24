import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    color: #fff;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover,
a:focus {
 text-decoration: underline;
}

img {
    vertical-align: middle;
}

.d-none {
    display: none!important;
}

h4 {
    line-height: 1.2;
}

p {
    line-height: 1.4;
}
`

export const Container = styled.div`
    max-width: 970px;
    padding: 0 15px;
    margin: 0 auto;
    height: 100%;
`

export default GlobalStyle