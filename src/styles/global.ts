import { createGlobalStyle } from "styled-components"
import LatoTTF from '../assets/fonts/Lato.ttf'
import LatoWOFF from '../assets/fonts/Lato.woff'
import LatoWOFF2 from '../assets/fonts/Lato.woff2'
import MontserratTTF from '../assets/fonts/Montserrat.ttf'
import MontserratWOFF from '../assets/fonts/Montserrat.woff'
import MontserratWOFF2 from '../assets/fonts/Montserrat.woff2'
import Montserrat_B_TTF from '../assets/fonts/Montserrat-Bold.ttf'
import Montserrat_B_WOFF from '../assets/fonts/Montserrat-Bold.woff'
import Montserrat_B_WOFF2 from '../assets/fonts/Montserrat-Bold.woff2'

export default createGlobalStyle`
    :root {
        // background colors
        --transparent: transparent;
        --main-background-color: hsl(0, 0%, 97%);
        --second-background-color: hsl(0, 0%, 98%);
        --secondary-btn-background-1: hsl(240, 100%, 70%);

        // text colors
        --first-text-color: hsl(0, 0%, 15%);
        --second-text-color: hsl(0, 0%, 30%);
        --third-text-color: hsl(0, 0%, 50%);
        --fourth-text-color: hsl(0, 0%, 95%);

        // font families
        --ff-V: Verdana, sans-serif; 
        --ff-L: Lato, sans-serif;
        --ff-M: Montserrat, sans-serif;
        --ff-M-b: Montserrat-Bold, sans-serif;

        // font sizes
        --fs-16: 16px;
        --fs-18: 18px;
        --fs-20: 20px;
        --fs-25: 25px;
        --fs-70: 70px;

        // borders
        --border-dev: 1px solid red;
        --primary-btn-border: 1px solid hsl(0, 0%, 50%);

        // border radiuses
        --radius-10: 0.625rem; 
        --radius-30: 1.875rem;
        --radius-50: 3.125rem;

        // box shadows
        --first-box-shadow: 0 0 5px 0 hsla(300, 100%, 50%, 0.5);
        --second-box-shadow: 0 0 30px hsla(0, 0%, 0%, 0.05);
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
        src: url(${LatoWOFF2}) format('woff2'),
            url(${LatoWOFF}) format('woff'),
            url(${LatoTTF}) format('truetype');
    }
    
    @font-face {
        font-family: Montserrat-Bold;
        font-weight: bold;
        src: url(${Montserrat_B_WOFF2}) format('woff2'),
            url(${Montserrat_B_WOFF}) format('woff'),
            url(${Montserrat_B_TTF}) format('truetype');
    }

    @font-face {
        font-family: Montserrat;
        font-weight: normal;
        src: url(${MontserratWOFF2}) format('woff2'),
            url(${MontserratWOFF}) format('woff'),
            url(${MontserratTTF}) format('truetype');
    }
`