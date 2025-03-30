import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   /* Reset básico */
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Roboto", sans-serif;
      list-style: none;
   }

   /* Ajustes para melhor usabilidade */
   html, body {
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   /* Reset de botões */
   button {
      all: unset;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
   }

   /* Reset de links */
   a {
      all: unset;
      cursor: pointer;
   }

  
`

