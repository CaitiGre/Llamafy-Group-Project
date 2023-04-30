import { Button, Box, Grid, Modal, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./SettingsPage.module.css";
import close from "./../../assets/close.png";
import bin from "./../../assets/bin.png";
import ClothesItem from "../ClotheItem/ClotheItem";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoes.png";
import useGet from '../../helpers/useGet';
import axios from 'axios';

function Wardrobe() {

  const [clothes, setClothes] = useState({});

  // Get user's email from cookie once cookie's set up
  const userEmail = "ysoo501@aucklanduni.ac.nz";

  // Get user's current profile data from database
  const { data: dataObj, isLoading } = useGet(`http://localhost:3006/wardrobe/getWardrobeItems/${userEmail}`);

  useEffect(() => {
    if (!isLoading && dataObj) {

      // Assign the object containing properties needed to wardrobeItems.
      setClothes(dataObj.wardrobeItems);

      console.log('clothes', clothes); // clothes is an array of objects.
      // Each object includes clothing_id, color, sleeves, pattern and main_category of a wardrobe item.
    }

  }, [isLoading, dataObj]); // Once isLoading and dataObj changed (meaning the fetch is completed), useEffect() will run and setData to fetched data
  // Remember that initially when the data was still being fetched, the values of isLoading and dataObj would be an empty object


  // Defining stateful variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryItemsToShow, setCategoryItemsToShow] = useState([]);

  // Defining an array of objects for the clothes items and their images
  const clothesItems = [
    { src: top, name: "top" },
    { src: bottom, name: "bottom" },
    { src: onepiece, name: "one-piece" },
    { src: shoes, name: "shoes" },
  ];


  // Handling the open modal event and setting the selected item to show
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    // const itemsToShow = clothes.filter((clothe) => clothe.categoryName === item.name);
    const itemsToShow = clothes.filter((clothe) => clothe.main_category === item.name);
    setCategoryItemsToShow(itemsToShow);
    setOpenModal(true);
  };

  // Handling the close modal event
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handling the delete item event in CategoryItem
  async function handleDeleteItem(item) {
    const remainingItemsToShow = categoryItemsToShow.filter((catItem) => catItem.clothing_id !== item.clothing_id);
    setCategoryItemsToShow(remainingItemsToShow);

    const remainingClothes = clothes.filter((clothe) => clothe.clothing_id !== item.clothing_id);
    setClothes(remainingClothes);

    // Send Post request to delete item from the database
    try {
      const response = await axios.post(`http://localhost:3006/wardrobe/deleteWardrobeItem`,
        { itemId: item.clothing_id }
      );

      if (response.data.isItemDeleted) {
        console.log("item has been deleted ", response.data.isItemDeleted);
        alert(`Item id#${item.clothing_id} deleted.`);
      }

    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to delete the item. Please try again later.');
    }
    //
  }


  // Card for each clothes item in the list
  const CategoryItem = ({ items }) => { // items param: items in a particular category

    return (
      <>
        {items.map((item) => (

          <List key={item.clothing_id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            <ListItem alignItems="flex-start">

              <ListItemText
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >

                      <Button
                        onClick={() => handleDeleteItem(item)}
                        sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
                      >
                        <img src={bin} alt="bin button" width="15px" />
                      </Button>

                      id#{item.clothing_id}: {item.color} {item.pattern} {item.sleeves} {item.main_category}
                    </Typography>

                  </>
                }
              />

            </ListItem>
          </List>
        ))}

        <div className={styles.navLinkContainer}>
          <NavLink to="../wardrobe" className={styles.navLink}>Add items</NavLink>
        </div>

      </>
    );
  }

  return (
    <>
      {/* The clothes panel */}
      <section className={styles.wardrobe}>
        <Box sx={{ flexGrow: 1, maxWidth: "90vw", alignItems: "center", display: "flex" }}>
          <Grid
            className={styles.clothespanel}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
            sx={{
              justifyContent: "center",
              backgroundColor: "rgba(235, 73, 227, 0.315)"
            }}
          >
            {/* Map over the clothesItems and create a ClothesItem for each one */}
            {clothesItems.map((item, index) => (
              <Grid key={index} item xs={3}>
                <ClothesItem item={item} onClick={handleOpenModal} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        disableAutoFocus={true}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(248, 201, 244, 1)",
            borderRadius: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            height: "fit-content",
            margin: "auto",
            padding: "40px",
            maxHeight: "80vh",
            overflowY: "scroll",
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
          >
            <img src={close} alt="close button" width="20px" />
          </Button>

          {selectedItem && (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", margin: "10px", color: "#58315c" }}
            >
              {selectedItem.name} items you have
            </Typography>
          )}

          <CategoryItem items={categoryItemsToShow}></CategoryItem>

        </Box>
      </Modal>
    </>
  );
}

export default Wardrobe;
