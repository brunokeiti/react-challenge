import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { routerConfig } from "./App";

it("Routes to a new route when button is clicked", async () => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
  expect(router.state.location.pathname).toEqual("/");

  await userEvent.click(screen.getByRole("link", { name: /User/i }));

  await waitFor(() => {
    expect(router.state.location.pathname).toEqual("/user");
  });
});
