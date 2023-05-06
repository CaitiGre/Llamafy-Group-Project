import React from "react";
import styles from "./OutfitOfTheDay.module.css";
import Modal from "react-modal";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function onClickHandler() {
    console.log(`User attempting to save: ${imgLink}`);
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
          <button onClick={closeModal}>Are you joking</button>
        </div>
      </Modal>
    </div>
  );
};

export default OotdTile;
