import { useState, useEffect } from "react";
import bin from "./../../assets/bin.png";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
} from "@mui/material";
import styles from "./WardrobeItems.module.css";
import axios from "axios";
import { subSelectionItemsByClothesItem } from "../ClothesSelection/data";
import SubSelectionModal from "../SubSelectionModal/SubSelectionModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Card for each clothes item in the list
function WardrobeItems({ clothes, setClothes, category }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [subSelectionItemsToShow, setSubSelectionItemsToShow] = useState([]);
  const [isItemsVisible, setIsItemsVisible] = useState(true); // add state variable to control item visibility

  // Handling the open modal event and setting the selected item and its sub-selection items to show
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setSubSelectionItemsToShow(subSelectionItemsByClothesItem[item.name]);
    setIsItemsVisible(false); // hide items when modal is open
  };

  // Handling the delete item event in CategoryItem
  // Get the category items to show when the component mounts or when the category changes

  useEffect(() => {
    console.log("clothes", clothes);
  }, [clothes]);

  async function handleDeleteItem(item) {
    const remainingItemsToShow = clothes.filter(
      (catItem) => catItem.clothing_id !== item.clothing_id
    );
    console.log("remaining items to show:", remainingItemsToShow);
    setClothes(remainingItemsToShow);

    // Send Post request to delete item from the database
    try {
      const response = await axios.post(
        `http://localhost:3006/wardrobe/deleteWardrobeItem`,
        { itemId: item.clothing_id }
      );

      if (response.data.isItemDeleted) {
        console.log("item has been deleted ", response.data.isItemDeleted);
        toast.success(`Item id#${item.clothing_id} deleted.`);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while trying to delete the item. Please try again later."
      );
    }
  }
  return (
    <>
      {isItemsVisible &&
        clothes.map((item) => (
          console.log("item", item),
          <List
            key={item.clothing_id}
            sx={{
              width: "100%",

              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <ListItem
              alignItems="center"
              sx={{
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
                bgcolor: "background.paper",
                borderRadius: 4,
              }}
            >
              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.color} {item.sleeves} {item.pattern} {item.style}{" "}
                      {item.sub_category}{" "}
                      <Button
                        onClick={() => handleDeleteItem(item)}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 2,
                          padding: "5px",
                        }}
                      >
                        <img src={bin} alt="bin button" width="15px" />
                      </Button>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        ))}
      {isItemsVisible && (
        <Box className={styles.navLinkContainer}>
          <Button
            sx={{ color: "white" }}
            onClick={() => handleOpenModal(category)}
          >
            Add items
          </Button>
        </Box>
      )}
      {!isItemsVisible && subSelectionItemsToShow && (
        <>
          {" "}
          <SubSelectionModal itemsToShow={subSelectionItemsToShow} />
          <Box className={styles.navLinkContainer}>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                setIsItemsVisible(true);
              }}
            >
              Back
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default WardrobeItems;
