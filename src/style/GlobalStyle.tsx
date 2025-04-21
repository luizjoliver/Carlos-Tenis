import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Quicksand", sans-serif;
      list-style: none;
   }


   html, body {
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

  
   button {
      all: unset;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
   }

 
   a {
      all: unset;
      cursor: pointer;
   }

  
`

