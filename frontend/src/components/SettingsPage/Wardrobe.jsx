import shirt from "../../assets/shirt.png";
import { Button, Box, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./SettingsPage.module.css";
import close from "./../../assets/close.png";

function Wardrobe() {
  // Get clothes data from database once set up
  const [clothes, setClothes] = useState([
    {
      id: 1,
      render: shirt,
      desc: "item1",
    },
    {
      id: 2,
      render: shirt,
      desc: "item2",
    },
    {
      id: 3,
      render: shirt,
      desc: "item3",
    },
    {
      id: 4,
      render: shirt,
      desc: "item4",
    },
    {
      id: 5,
      render: shirt,
      desc: "item5",
    },
    {
      id: 6,
      render: shirt,
      desc: "item6",
    },
  ]);

  // Defining stateful variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handling the open modal event and setting the selected item to show
  const handleOpenModal = (outfit) => {
    setSelectedItem(outfit);
    setOpenModal(true);
  };

  // Handling the close modal event
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handling delete item: clothe array to retain only items whose id does not match the id of the deleted item
  function handleDeleteButton(outfitId) {
    const remainingClothes = clothes.filter((clothe) => clothe.id !== outfitId);
    setClothes(remainingClothes);

    alert(`Outfit ${outfitId} deleted.`);

    // To remove from database once it's set up.
  }

  // Might delete this and iimport OutfitTile once merged with main
  const OutfitTile = ({ outfit, onClick }) => {
    return (
      <div>
        <img src={outfit.render} style={{ width: "200px" }} alt={outfit.desc}
          onClick={() => onClick(outfit)} />
        <p>{outfit.desc}</p>
      </div>
    );
  };

  return (
    <>
      {/* The clothes panel */}
      <Box sx={{ margin: 3 }}>
        <Grid
          container
          columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
          sx={{
            justifyContent: "center",
            columnGap: "3vw",
            rowGap: "3vh",
            margin: 0
          }}
        >
          {/* Iterate over the clothes array and map each of the item to create an OutfitTile component */}
          {clothes.map((outfitObj) => (
            <Grid xs={3} key={outfitObj.id} className={styles.card} sx={{ margin: 0 }}>
              <OutfitTile outfit={outfitObj} onClick={handleOpenModal} />
              <Button
                color="secondary"
                onClick={() => handleDeleteButton(outfitObj.id)}
                sx={{
                  textTransform: "lowercase",
                }}
              >
                Delete
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* The modal which is opened when the OutfitTile's image is clicked */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        disableAutoFocus={true}
        sx={{ overflowX: "scroll" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            height: "fit-content",
            margin: "auto",
            padding: "40px",
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
          >
            <img src={close} alt="close button" width="20px" />
          </Button>

          {/* Display item description as the heading of the modal */}
          {selectedItem && (
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginBottom: "5%" }}
            >
              {selectedItem.desc}
            </Typography>
          )}

          {/* Display a bigger image of the selected item/ outfit */}
          {selectedItem && (<img src={selectedItem.render} style={{ width: "400px" }} alt={selectedItem.desc}></img>)}

        </Box>
      </Modal>

    </>
  );
}

export default Wardrobe;
