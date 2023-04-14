import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { HomePage } from "./pages/home";
import { UserPage } from "./pages/user";
import { TablePage } from "./pages/table";
import { NavDrawer } from "./components/navigation/NavDrawer";

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
          body: { backgroundColor: "#2c387e" },
        }}
      />
      <NavDrawer />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
