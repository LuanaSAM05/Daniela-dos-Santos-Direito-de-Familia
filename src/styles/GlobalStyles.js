import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #FFFFFF;
    color: #1E293B;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: #0B192C;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
