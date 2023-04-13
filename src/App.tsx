import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Grid } from "@mui/material";

import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Table } from "./pages/table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        sx={{ backgroundColor: "#333" }}
      >
        <RouterProvider router={router} />
      </Grid>
    </React.StrictMode>
  );
};

export default App;
