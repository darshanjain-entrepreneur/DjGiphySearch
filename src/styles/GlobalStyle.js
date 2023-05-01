import {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    box-sizing: border-box;
    list-style: none;
    padding: 0;
}
body{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: red;
    min-height: 100vh;
    font-size: 1.2rem;
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(#9933ff , #00e6cc);
        border-radius: 1rem;
    }
}
`