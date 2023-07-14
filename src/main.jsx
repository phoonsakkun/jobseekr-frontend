import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import AuthContextProvider from "./contexts/Authcontext.jsx";
import AdminContextProvider from "./contexts/AdminContext.jsx";
// import LoadingContextProvider from "./contexts/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <AdminContextProvider>
      {/* <LoadingContextProvider> */}
      <App />
      {/* </LoadingContextProvider> */}
    </AdminContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
