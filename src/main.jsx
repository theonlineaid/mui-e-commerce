import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.js";

console.log(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);