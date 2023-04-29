import shirt from "../../assets/shirt.png";
import { Button, Box, Grid, Modal, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { useState } from "react";
import styles from "./SettingsPage.module.css";
import close from "./../../assets/close.png";
import ClothesItem from "../ClotheItem/ClotheItem";
import top from "./../../assets/tshirt.png";
import bottom from "./../../assets/pants.png";
import onepiece from "./../../assets/jumpsuit.png";
import shoes from "./../../assets/shoe.png";

function Wardrobe() {
  // Defining stateful variables for the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Defining an array of objects for the clothes items and their images
  const clothesItems = [
    { src: top, name: "TOP" },
    { src: bottom, name: "BOTTOM" },
    { src: onepiece, name: "ONEPIECE" },
    { src: shoes, name: "SHOES" },
  ];

  // Get clothes data from database once set up
  const [clothes, setClothes] = useState([
    {
      id: 1,
      category: top,
      color: "green",
      sleeves: "short",
      pattern: "plain"
    },
    {
      id: 1,
      category: top,
      color: "pink",
      sleeves: "long",
      pattern: "houndstooth"
    },
    {
      id: 2,
      category: bottom,
      color: "beige",
      pattern: "plain"
    },
    {
      id: 3,
      category: onepiece,
      sleeves: "sleeveless",
      color: "red",
      pattern: "striped"
    },
    {
      id: 4,
      category: shoes,
      color: "brown",
      pattern: "plain"
    },
  ]);



  // Handling the open modal event and setting the selected item to show
  const handleOpenModal = (item) => {
    // setSelectedItem(outfit);
    setSelectedItem(item);
    // setSubSelectionItemsToShow(subSelectionItemsByClothesItem[item.name]);
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
  // const OutfitTile = ({ outfit, onClick }) => {
  //   return (
  //     <div>
  //       <img src={outfit.render} style={{ width: "200px" }} alt={outfit.desc}
  //         onClick={() => onClick(outfit)} />
  //       <p>{outfit.desc}</p>
  //     </div>
  //   );
  // };

  // Card for each clothes item in the list
  const CategoryItem = ({ categoryItem }) => {
    return (
      <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>

            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />

          </ListItem>
        </List>
      </>
    );
  }

  return (
    // <>
    //   {/* The clothes panel */}
    //   <Box sx={{ margin: 3 }}>
    //     <Grid
    //       container
    //       columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
    //       sx={{
    //         justifyContent: "center",
    //         columnGap: "3vw",
    //         rowGap: "3vh",
    //         margin: 0
    //       }}
    //     >
    //       {/* Iterate over the clothes array and map each of the item to create an OutfitTile component */}
    //       {clothes.map((outfitObj) => (
    //         <Grid xs={3} key={outfitObj.id} className={styles.card} sx={{ margin: 0 }}>
    //           <OutfitTile outfit={outfitObj} onClick={handleOpenModal} />
    //           <Button
    //             color="secondary"
    //             onClick={() => handleDeleteButton(outfitObj.id)}
    //             sx={{
    //               textTransform: "lowercase",
    //             }}
    //           >
    //             Delete
    //           </Button>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Box>

    //   {/* The modal which is opened when the OutfitTile's image is clicked */}
    //   <Modal
    //     open={openModal}
    //     onClose={handleCloseModal}
    //     closeAfterTransition
    //     disableAutoFocus={true}
    //     sx={{ overflowX: "scroll" }}
    //   >
    //     <Box
    //       sx={{
    //         backgroundColor: "rgba(255, 255, 255, 1)",
    //         borderRadius: "16px",
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         outline: "none",
    //         height: "fit-content",
    //         margin: "auto",
    //         padding: "40px",
    //       }}
    //     >
    //       <Button
    //         onClick={handleCloseModal}
    //         sx={{ position: "absolute", top: 8, right: 2, padding: "5px" }}
    //       >
    //         <img src={close} alt="close button" width="20px" />
    //       </Button>

    //       {/* Display item description as the heading of the modal */}
    //       {selectedItem && (
    //         <Typography
    //           variant="h5"
    //           sx={{ textAlign: "center", marginBottom: "5%" }}
    //         >
    //           {selectedItem.desc}
    //         </Typography>
    //       )}

    //       {/* Display a bigger image of the selected item/ outfit */}
    //       {selectedItem && (<img src={selectedItem.render} style={{ width: "400px" }} alt={selectedItem.desc}></img>)}

    //     </Box>
    //   </Modal>

    // </>

    // NEW LAYOUT
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
            {/* Map over the clothes items and create a ClothesItem for each one */}
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
              {selectedItem.name} ITEMS YOU HAVE
            </Typography>
          )}
          {/* The sub-selection modal */}
          {/* <SubSelectionModal itemsToShow={subSelectionItemsToShow} /> */}
          <div><p>List items in category</p></div>
        </Box>
      </Modal>
    </>
  );
}

export default Wardrobe;
