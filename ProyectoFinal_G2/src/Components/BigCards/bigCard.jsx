import React, { useState } from "react";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";

const BigCard = ({ infoCard }) => {
  const [liked, setLiked] = useState(false);

  const truncarDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return infoCard.description.substring(0, maxLength) + "...";
  };

  const HeartClick = () => {
    setLiked(!liked);
  };

  const supportedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"];

  const platforms = infoCard.parent_platforms
    .filter(platform => supportedPlatforms.includes(platform.platform.name))
    .map(platform => platform.platform.name);

  const maxGenresToShow = 2;
  const genres = infoCard.genres.slice(0, maxGenresToShow);
  const showEllipsis = infoCard.genres.length > maxGenresToShow;

  return( <>
    <div className={classes.divContainerCardInfo}>
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
            <label className={classes.firstLabel}>{infoCard.released}</label>
          </div>
          <div className={classes.textCenter}>
            <p>Genres:</p>
            <label className={classes.secondLabel}>
              {genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  {genre.name}
                  {index < genres.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
              {showEllipsis && "..."}
            </label>
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
        <div className={classes.description}>
          <p>Game’s description goes over here: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
        </div>
      </div>
    </div>
  </>);
};

export default BigCard;
