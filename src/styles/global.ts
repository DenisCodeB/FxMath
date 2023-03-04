import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --main-background-color: red;
        --prymary-btn-background-color: blue;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: greenyellow;
    }
`