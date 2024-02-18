import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/themeProvider.tsx";
import { CurrencyListProvider } from "./contexts/currencyListProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CurrencyListProvider>
        <App />
      </CurrencyListProvider>
    </ThemeProvider>
  </StrictMode>,
);
