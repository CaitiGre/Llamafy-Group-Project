import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";
import WardrobeItems from "../components/WardrobeItems/WardrobeItems";

jest.mock("axios");

describe("WardrobeItems", () => {
  const clothes = [
    {
      name: "t-shirt",
      color: "#FF0000",
      sleeves: "short",
      pattern: "solid",
      style: "casual",
      sub_category: "tops",
      clothing_id: 1,
    },
    {
      name: "jeans",
      color: "#0000FF",
      sleeves: "",
      pattern: "",
      style: "",
      sub_category: "bottoms",
      clothing_id: 2,
    },
  ];

  it('should call handleOpenModal with the correct item when the "Add items" button is clicked', () => {
    const setClothes = jest.fn();
    const category = "tops";
    const { getByText } = render(
      <WardrobeItems
        clothes={clothes}
        setClothes={setClothes}
        category={category}
      />
    );

    fireEvent.click(getByText("Add items"));

    expect(setClothes).not.toHaveBeenCalled();
  });
  
it("should call the API to delete an item and update the list of clothes on successful deletion", async () => {
    const itemToDelete = clothes[0];
    const setClothes = jest.fn();
    axios.post.mockResolvedValue({
      data: {
        isItemDeleted: true,
      },
    });

    const { getByAltText } = render(
      <WardrobeItems
        clothes={clothes}
        setClothes={setClothes}
        category={category}
      />
    );

    // Click the delete button
    const deleteButton = render(<Button onClick={handleClick} data-testid="my-button">Click me!</Button>);
    fireEvent.click(deleteButton);

    // Wait for the API call to resolve
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Check that the remaining items are displayed
    expect(setClothes).toHaveBeenCalledWith([clothes[1]]);
  });

  it("should show an error message when the API call to delete an item fails", async () => {
    const itemToDelete = clothes[0];

    axios.post.mockRejectedValue(new Error("API Error"));

    const { getByAltText } = render(
      <WardrobeItems
        clothes={clothes}
        setClothes={setClothes}
        category={category}
      />
    );

    // Click the delete button
    const deleteButton = render(<Button onClick={handleClick} data-testid="my-button">Click me!</Button>);
    fireEvent.click(deleteButton);

    // Wait for the API call to reject and the error message to show up
    await waitFor(() =>
      expect(
        getByText(
          "An error occurred while trying to delete the item. Please try again later."
        )
      ).toBeInTheDocument()
    );
  });
});

