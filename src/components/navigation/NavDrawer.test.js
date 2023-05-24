import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { NavDrawer } from "./NavDrawer";

it("Open/Close drawer", async () => {
  render(<NavDrawer />);
  expect(screen.getByLabelText("open drawer")).toBeVisible();
  userEvent.click(screen.getByLabelText("open drawer"));
  const drawer = screen.getByRole("presentation", { name: "" });
  expect(within(drawer).getByRole("link", { name: "Home" })).toBeVisible();
  expect(within(drawer).getByRole("link", { name: "User" })).toBeVisible();
  expect(within(drawer).getByRole("link", { name: "Table" })).toBeVisible();
  // eslint-disable-next-line testing-library/no-node-access
  userEvent.click(drawer.firstChild); //MUI Drawer backdrop doesn't have a proper role or id
  await waitFor(() => {
    expect(drawer).not.toBeVisible();
  });
});
