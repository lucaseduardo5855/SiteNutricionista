import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main"; // Aqui mudou para um ponto só
import GlobalStyle from "./styles/global"; // Aqui também

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
);
