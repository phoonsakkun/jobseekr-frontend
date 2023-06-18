import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import AuthContextProvider from "./contexts/Authcontext.jsx";
import LoadingContextProvider from "./contexts/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <LoadingContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </LoadingContextProvider>
  // </React.StrictMode>,
);
