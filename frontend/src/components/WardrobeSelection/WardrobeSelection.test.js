import { render, screen } from "@testing-library/react";
import WardrobeSelection from "./WardrobeSelection";

test("Favourites title exists", async () => {
  render(<WardrobeSelection />);

  const heading = screen.getByText("Wardrobe Selection");
  expect(heading).toBeInTheDocument();
});

test("Subheading exists", async () => {
  render(<WardrobeSelection />);

  const subHeading = screen.getByText("Select some staples");
  expect(subHeading).toBeInTheDocument();
});
