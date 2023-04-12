import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Table } from "./pages/table";
import { User } from "./pages/user";

const router = createBrowserRouter([
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
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
