import shirt from "../../assets/shirt.png";
import { Button, Box, Grid } from "@mui/material";
import { useState } from "react";
import styles from "./SettingsPage.module.css";

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

  function handleDeleteButton(outfitId) {
    const remainingClothes = clothes.filter((clothe) => clothe.id !== outfitId);
    setClothes(remainingClothes);

    alert(`Outfit ${outfitId} deleted.`);

    // To remove from database once it's set up.
  }

  // Might delete this and iimport OutfitTile once merged with main
  const OutfitTile = ({ outfit }) => {
    return (
      <div>
        <img src={outfit.render} style={{ width: "200px" }} />
        <p>{outfit.desc}</p>
      </div>
    );
  };

  return (
    <Box
      sx={{
        margin: 3
      }}>
      <Grid
        container
        columns={{ xs: 2, sm: 6, md: 9, lg: 12 }}
        sx={{
          justifyContent: "center",
          columnGap: "1vw",
          rowGap: "2vh"
        }}
      >
        {clothes.map((outfitObj) => (
          <Grid xs={3}
            className={styles.card} key={outfitObj.id}
          >
            <OutfitTile outfit={outfitObj} />

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

  );
}

export default Wardrobe;
