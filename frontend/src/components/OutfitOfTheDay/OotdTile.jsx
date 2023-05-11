import React, { useState, useEffect } from "react";
import styles from "./OutfitOfTheDay.module.css";
import Modal from "react-modal";
import getUserEmail from "../../helpers/getUserEmail";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    border: "1px solid black",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "lavender",
    color: "black",
    padding: "7px",
    borderRadius: "25px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#modal');

const OotdTile = ({ imgLink, description, shoes, bottom, top }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState();

  // grab the current user's email and sync to state for post body
  useEffect(() => {
    const getEmail = async () => {
      const email = await getUserEmail();
      setEmail(email);
    };
    getEmail();
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  // allow the user to choose an outfit/outfits they like and save to static files
  function onClickHandler() {
    const outfitItems = shoes.concat(top, bottom);
  
    if (imgLink.substring(0, 16) !== "https://oaidalle") {
      toast.error("That's not an outfit, dude");
      closeModal();
      return;
    }
  
    const postBody = {
      imgUrl: imgLink,
      email: email,
    };
  
    // Get a list of clothing IDs from the outfit items
    const clothesIDs = outfitItems.map(item => item.id).filter(id => !isNaN(id));
  
    // Call the changeClotheWornDate function to update the lastWorn field
    fetch("http://3.27.75.210:3006/api/changeClotheWornDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listOfIds: clothesIDs }),
    }).then((response) => {
      if (response.ok) {
        console.log("Last worn date updated successfully");
      } else {
        console.error("Error updating last worn date");
      }
    }).catch((error) => {
      console.error(error);
    });
  
    // Save the outfit to favorites
    try {
      axios.post("http://3.27.75.210:3006/ootd/saveFavourite", postBody);
      toast.success("Saved to favourites!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong trying to save. Try again later");
    } finally {
      closeModal();
    }
  }

  return (
    <div>
      <img
        src={imgLink}
        className={styles.OotdTile}
        onClick={() => openModal()}
        alt="ootd"
      />
      <div className={styles.tileDesc}>{description}</div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="OOTD"
      >
        <h2>OUTFIT</h2>
        <div style={{
            width: "min(90vw,512px)",
            borderRadius: "2vh",
            paddingTop: "1.5vh",
            paddingBottom: "1.5vh",
          }}>
          <img
          src={imgLink}
          
          alt="ootd"
        />
        </div>
        
        <div className={styles.modalButton}>
          <button onClick={onClickHandler}>Yeah!</button>
          <button onClick={closeModal}>You're joking</button>
        </div>
      </Modal>
    </div>
  );
};

export default OotdTile;
