import { Button, Box, Grid, Modal, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./SettingsPage.module.css";
import close from "./../../assets/close.png";
import bin from "./../../assets/bin.png";
import ClothesItem from "../ClotheItem/ClotheItem";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoe.png";

function Wardrobe() {
  // Defining stateful variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryItemsToShow, setCategoryItemsToShow] = useState([]);

  // Defining an array of objects for the clothes items and their images
  const clothesItems = [
    { src: top, name: "top" },
    { src: bottom, name: "bottom" },
    { src: onepiece, name: "onepiece" },
    { src: shoes, name: "shoes" },
  ];

  // Get clothes data from database once set up
  const [clothes, setClothes] = useState([
    {
      id: 1,
      categoryName: "top",
      category: top,
      color: "green",
      sleeves: "short sleeve",
      pattern: "plain"
    },
    {
      id: 5,
      categoryName: "top",
      category: top,
      color: "pink",
      sleeves: "long sleeve",
      pattern: "houndstooth"
    },
    {
      id: 2,
      categoryName: "bottom",
      category: bottom,
      color: "beige",
      pattern: "plain"
    },
    {
      id: 3,
      categoryName: "onepiece",
      category: onepiece,
      sleeves: "sleeveless",
      color: "red",
      pattern: "striped"
    },
    {
      id: 4,
      categoryName: "shoes",
      category: shoes,
      color: "brown",
      pattern: "plain"
    },
  ]);


  // Handling the open modal event and setting the selected item to show
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    const itemsToShow = clothes.filter((clothe) => clothe.categoryName === item.name);
    setCategoryItemsToShow(itemsToShow);
    setOpenModal(true);
  };

  // Handling the close modal event
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handling the delete item event in CategoryItem
  function handleDeleteItem(item) {
    const remainingItemsToShow = categoryItemsToShow.filter((catItem) => catItem.id !== item.id);
    setCategoryItemsToShow(remainingItemsToShow);

    const remainingClothes = clothes.filter((clothe) => clothe.id !== item.id);
    setClothes(remainingClothes);

    alert(`${item.color} ${item.pattern} ${item.sleeves} sleeve ${item.categoryName} deleted.`);

  }


  // Card for each clothes item in the list
  const CategoryItem = ({ items }) => { // items param: items in a particular category

    return (
      <>
        {items.map((item, index) => (

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

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

                      {item.color} {item.pattern} {item.sleeves} {item.categoryName}
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
