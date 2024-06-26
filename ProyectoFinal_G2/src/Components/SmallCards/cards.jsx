import React, { useState } from "react";
import classes from "./index.module.css";
import ModalGenres from "../ModalGenres";

function IndividualCards({ infoCard/*, onSelect */}) {
  const supportedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"];
  const platforms = infoCard.parent_platforms
    .filter(platform => supportedPlatforms.includes(platform.platform.name))
    .map(platform => platform.platform.name);

  const maxGenresToShow = 2;
  const genres = infoCard.genres.slice(0, maxGenresToShow);
  const showEllipsis = infoCard.genres.length > maxGenresToShow;

  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: '100%', left: '0' });

  const handleMouseOver = (event) => {
    setShowModal(true);

    const modalContainer = event.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    let left = 0;
    if (modalContainer.left + 300 > windowWidth) {
      left = windowWidth - (modalContainer.left + 300);
    }

    setModalPosition({ top: '100%', left: `${left}px` });
  };

  const handleMouseOut = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    onSelect(infoCard);
  };

  return (
    <div className={classes.divContainerCardInfo} /*onClick={handleClick}*/>
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
            <p>Release date:</p>
            <p>Genres:</p>
          </div>
          <div className={classes.textCenter}>
            <label className={classes.firstLabel}>{infoCard.released}</label>
            <label
              className={classes.secondLabel}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {genres.map((genre, index) => (
                <React.Fragment key={index}>
                  {genre.name}
                  {index < genres.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
              {showEllipsis && "..."}
            </label>
            {showModal && (
              <div
                className={classes.modalContainer}
                style={modalPosition}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <ModalGenres genres={infoCard.genres} />
              </div>
            )}
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
  );
}

export default IndividualCards;
