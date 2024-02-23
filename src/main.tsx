import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrencyListProvider } from "@/contexts/currencyListProvider.tsx";
import { InputTagsProvider } from "@/contexts/inputTagsProvider.tsx";
import { ThemeProvider } from "@/contexts/themeProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CurrencyListProvider>
        <InputTagsProvider>
          <App />
        </InputTagsProvider>
      </CurrencyListProvider>
    </ThemeProvider>
  </StrictMode>,
);
