import ReactDOM from "react-dom/client";
import { router } from "./libs/route";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";


const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(

  <StrictMode> 
      <GlobalStyle/>

    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </StrictMode>
);