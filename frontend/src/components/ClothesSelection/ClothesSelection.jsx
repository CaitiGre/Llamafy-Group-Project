import React, { useEffect, useState } from "react";
import styles from "./ClothesSelection.module.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";
import ClothesItem from "../ClotheItem/ClotheItem";
import close from "./../../assets/close.png";
import useGet from "../../helpers/useGet";
import { clothesItems } from "./data";
import WardrobeItems from "../WardrobeItems/WardrobeItems";
import getUserEmail from "../../helpers/getUserEmail";

function ClothesSelection() {
  // Defining state variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryItemsToShow, setCategoryItemsToShow] = useState([]);
  const [clothes, setClothes] = useState([]);

  // Get user's email from cookie once cookie's set up
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    async function fetchUserEmail() {
      const email = await getUserEmail();
      console.log("User email:", email);
      setUserEmail(email);
    }

    fetchUserEmail();
  }, []);

  // Get user's current profile data from database
  const { data: dataObj, isLoading } = useGet(
    `http://localhost:3006/wardrobe/getWardrobeItems/${userEmail}`
  );

  useEffect(() => {
    if (!isLoading && dataObj) {
      setClothes(dataObj.wardrobeItems);
    }
    if (selectedItem && clothes.length > 0) {
      const itemsToShow = clothes.filter(
        (clothe) => clothe.main_category === selectedItem.name
      );
      setCategoryItemsToShow(itemsToShow);
      setOpenModal(true);
    }
  }, [isLoading, dataObj, selectedItem, clothes]);
  // Handling the open modal event and setting the selected item to show
  const openWardrobeModal = (item) => {
    setSelectedItem(item);
    const itemsToShow = clothes.filter(
      (clothe) => clothe.main_category === item.name
    );
    setCategoryItemsToShow(itemsToShow);
    setOpenModal(true);
  };
  // Handling the close modal event
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      {/* The clothes panel */}
      <Box sx={{ flexGrow: 1, maxWidth: "90vw", alignItems: "center" }}>
        <Grid
          className={styles.clothespanel}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
          sx={{
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Map over the clothes items and create a ClothesItem for each one */}
          {clothesItems.map((item, index) => (
            <Grid key={index} item xs={3}>
              <ClothesItem item={item} onClick={openWardrobeModal} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        disableAutoFocus={true}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          sx={{
            background: "rgb(99,93,191)",
            background: "linear-gradient(208deg, rgba(99,93,191,1) 6%, rgba(217,139,223,1) 95%)", 
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
            <img src={close} alt="close button" width="15px" />
          </Button>
          {selectedItem && (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", margin: "10px", color: "white" }}
            >
              YOUR {selectedItem.name}
            </Typography>
          )}
          {selectedItem && (
            <WardrobeItems
              items={categoryItemsToShow}
              itom={selectedItem}
              clothes={clothes}
              setClothes={setClothes}
            ></WardrobeItems>
          )}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ClothesSelection;
