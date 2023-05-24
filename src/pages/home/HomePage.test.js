import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "./HomePage";

test("Load HomePage and display buttons", async () => {
  render(<HomePage />);
  expect(
    screen.getByRole("heading", { name: /Code Challenge/i })
  ).toBeVisible();
  expect(screen.getByRole("button", { name: /User/i })).toBeVisible();
  expect(screen.getByRole("button", { name: /Table/i })).toBeVisible();
});
