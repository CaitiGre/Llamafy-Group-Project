import React from 'react'
import styles from './OutfitOfTheDay.module.css'
import Modal from 'react-modal';

const customStyles = {
  content: {
    border: '2px solid black',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'lavender',
    color: 'black',
    padding: '5px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#modal');

const OotdTile = ( {imgLink, description} ) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div>
            <img src={imgLink} className={styles.OotdTile} onClick={() => openModal()}/>
            <div className={styles.tileDesc}>
                {description}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="OOTD"
            >
                <h2>Outfit</h2>
                <div>You like what you see?</div>
                <img src={imgLink} style={{width: 'min(90vw,512px)'}}></img>
                <div>
                <button onClick={() => alert("obviously not set up yet, come on")}>Select</button>
                <button onClick={closeModal}>Nah</button>
                </div>
                
            </Modal>

        </div>
    )

}

export default OotdTile;