import React from "react";
import { render, screen } from "@testing-library/react";
import ClothesSelection from "../components/ClothesSelection/ClothesSelection";

describe("ClothesSelection", () => {
  it("displays the loading state while data is not yet fetched", () => {
    render(<ClothesSelection />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
