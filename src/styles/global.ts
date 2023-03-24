import { createGlobalStyle } from "styled-components"
import LatoWoff from '../assets/fonts/Lato.woff2'

export default createGlobalStyle`
    :root {
        --transparent: transparent;
        --border-dev: 1px solid red;
        --radius-10: 0.625rem;

        --main-background-color: hsl(0, 0%, 97%);
        --first-text-color: hsl(0, 0%, 15%);
        --secondary-text-color: hsl(0, 0%, 30%);
        --third-text-color: hsl(0, 0%, 50%);
        --fourth-text-color: hsl(0, 0%, 95%);
        --prymary-btn-background-1: hsl(240, 100%, 70%);

        --fs-18: 18px;
        --fs-20: 20px;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--main-background-color);
    }

    @font-face {
        font-family: Lato;
        font-weight: normal;
        src: url(${LatoWoff}) format('woff2');
    }
`