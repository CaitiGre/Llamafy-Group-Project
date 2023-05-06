import React, { useState, useEffect } from "react";
import styles from "./OutfitOfTheDay.module.css";
import Modal from "react-modal";
import getUserEmail from "../../helpers/getUserEmail";
import axios from 'axios';

const customStyles = {
  content: {
    border: "2px solid black",
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
    borderRadius: "25px"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#modal');

const OotdTile = ({ imgLink, description }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState();

  // grab the curr user's email and sync to state for post body
  useEffect(() => {
    const getEmail = async () => {
      const email = await getUserEmail();
      setEmail(email);
    }
    getEmail();
  })

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  // allow the user to choose an outfit/outfits they like and save to static files
  function onClickHandler() {
    // don't allow the user to try and save the loading pictures
    if(imgLink.substring(0,16) != 'https://oaidalle') {
      alert("That's not an outfit, dude");
      closeModal();
      return;
    }
    const postBody = {
      imgUrl : imgLink,
      email : email,
    }
    console.log(postBody);
    try {
      axios.post('http://localhost:3006/ootd/saveFavourite', postBody);
    } catch (err) {
      console.log(err);
      alert("Something went wrong trying to save. Try again later");
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
        <div>You like what you see?</div>
        <img src={imgLink} style={{ width: "min(90vw,512px)", borderRadius: "25px", paddingTop: "1.5vh", paddingBottom: "1.5vh" }}></img>
        <div className={styles.modalButton}>
          <button onClick={onClickHandler}>
            Yeah!
          </button>
          <button onClick={closeModal}>You're joking</button>
        </div>
      </Modal>
    </div>
  );
};

export default OotdTile;
