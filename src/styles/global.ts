import { createGlobalStyle } from "styled-components";
import UbuntuRegular from '../assets/fonts/Ubuntu-Regular.ttf'
import UbuntuMedium from '../assets/fonts/Ubuntu-Medium.ttf'
import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu Regular';
        src: url(${UbuntuRegular}) format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Ubuntu Medium';
        src: url(${UbuntuMedium}) format('ttf');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Ubuntu Bold';
        src: url(${UbuntuBold}) format('ttf');
        font-weight: bold;
        font-style: normal;
        font-display: auto;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Ubuntu Regular';
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }

    button {
      border: 0;
      background-color: transparent;
      color: inherit;
      font-family: inherit;
      cursor: pointer;
    }
`