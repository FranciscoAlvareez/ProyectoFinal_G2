import React, { useState } from "react";
import classes from "./index.module.css";
import ModalGenres from "../ModalGenres";
import Modal from "../Modal";

import CompleteInfoCard from "../CompleteInfoCard";

function IndividualCards({ infoCard, theme }) {
  const supportedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"];
  const platforms = infoCard.parent_platforms
    .filter(platform => supportedPlatforms.includes(platform.platform.name))
    .map(platform => platform.platform.name);

  const maxGenresToShow = 2;
  const genres = infoCard.genres.slice(0, maxGenresToShow);
  const showEllipsis = infoCard.genres.length > maxGenresToShow;

  const [showModal, setShowModal] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  const handleClick = (id) => {
    setSelectedGameId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGameId(null);
  };  

return (
    <div>
      <div className={`${classes.divContainerCardInfo} ${classes[theme]}`} onClick={() => handleClick(infoCard.id)} >
          <div className={classes.div_img}>
            <img src={infoCard.background_image} alt={infoCard.name} />
          </div>
          <div className={classes.footer}>
            <div className={classes.div_titleCard}>
              <h3 className={classes.title_card}>{infoCard.name}</h3>
              <h4 className={classes.enumeration}>#{infoCard.id}</h4>
            </div>
            <div className={classes.div_texts}>
              <div className={classes.textLeft}>
                <p>Release date: {infoCard.released}</p>
                <p>Genres: {genres.map((genre, index) => (
                  <React.Fragment key={index}>
                    {genre.name}
                    {index < genres.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                {showEllipsis && "..."}</p>
              </div>
              <div className={classes.icons}>
                {platforms.map(platform => (
                  <img
                    key={platform}
                    src={`src/Imgs/${platform}.png`}
                    alt={platform}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <CompleteInfoCard gameId={selectedGameId} />
        </Modal>
    </div>
  );
}

export default IndividualCards;