import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  html {
    background-color: #F6F6F6;

    font-size: 62.5%;
  }

  *, button, input {
    border: 0;
    background: none;

    outline: transparent;

    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --primary: #737373;
    --secondary: #CECECE;
    --text-color: #000000;
    --text-color-light: #fff;
    --background: #F6F6F6;

    /* report colors */
    --zeroToTen: #c70404;
    --tenToTwenty: #c71b04;
    --twentyToThirty: #c73f04;
    --thirtyToForty: #c79004;
    --fortyToFifty: #c3c704;
    --fiftyToSixty: #7dc704;
    --sixtyToSeventy: #04c745;
    --seventyToEighty: #04c798;
    --eightyToNinety: #04bbc7;
    --ninetyToHundred: #0481c7;
  }
`