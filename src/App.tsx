import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";

import { HomePage } from "./pages/home";
import { UserPage } from "./pages/user";
import { TablePage } from "./pages/table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/table",
    element: <TablePage />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#333" },
        }}
      />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
