import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrencyListProvider } from "./contexts/currencyListProvider.tsx";
import { InputTagsProvider } from "./contexts/inputTagsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <CurrencyListProvider>
        <InputTagsProvider>
        <App />
        </InputTagsProvider>
      </CurrencyListProvider>
  </StrictMode>
);
