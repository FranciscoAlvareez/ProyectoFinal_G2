import React from "react";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";
import { Button } from "../Buttons";
import meGustaIcon from '../../assets/icons/likeIcon.svg';
import shareIcon from '../../assets/icons/shareIcon.svg';
import commentsIcon from '../../assets/icons/commentsIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';
import videoIcon from '../../assets/icons/videoIcon.svg';
import juegoImagenIcon from '../../assets/icons/juegoImagenIcon.svg';
import juegoImagen2Icon from '../../assets/icons/juegoImagen2Icon.svg';


function CompleteInfoCard({ gameId }) {
  const { data: infoCard, loading, error } = useFetch(`https://api.rawg.io/api/games/${gameId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading game information. {gameId}</p>;

  const supportedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"];
  const platforms = infoCard.parent_platforms
    .filter((platform) => supportedPlatforms.includes(platform.platform.name))
    .map((platform) => platform.platform.name);

  const genres = infoCard.genres;

  // Estilo para el linear gradient
  const gradientStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(255, 248, 248, 0.00)10%, #F0F0F0 63.23%), url(${infoCard.background_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    width: "1076px",
    height: "645px",
    flexShrink: "0"
  };

  return (
    <div className={classes.completeContainer}>
      <div className={classes.backgroundImage} style={gradientStyle}>
        <div className={classes.overlay}>
          <div className={classes.icons}>
            {platforms.map(platform => (
              <img
                key={platform}
                src={`src/Imgs/${platform}.png`}
                alt={platform}
              />
            ))}
            
          </div>
          <div className={classes.div_titleCard}>
            <h3 className={classes.title_card}>{infoCard.name}</h3>
            
          </div>
          <div className={classes.div_titleCard}>                
            <p>Game’s description goes over here: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
          </div>
          <div className={classes.buttonContainer}>
              <Button text="Add to wishList" className="wishlist-button" />
              <Button text="Purchase" className="purchase-button" icon={<img src={heartIcon} alt="heart" />} />
          </div>
          
        </div>
        <div className={classes.footer}>
          <div className={classes.div_texts}>
            <div className={classes.textLeft}>
              <p>Platforms: {platforms.map((platform, index) => (
                <React.Fragment key={index}>
                  {platform}
                  {index < platform.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}

              </p>
              <p>Release date: {infoCard.released}</p>
              <p>Publisher: no-data</p>
              <p>Website: https://{infoCard.slug}.com</p>
              
            </div>
            <div className={classes.textLeft}>
              <p>Genres: {genres.map((genre, index) => (
                <React.Fragment key={index}>
                  {genre.name}
                  {index < genres.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
              </p>
              <p>Developer: no-data</p>
              <p>Age rating: no-data</p>
              
              <div className={classes.buttonContainer}>
                <img src={commentsIcon} alt="comment"/>
                <img src={meGustaIcon} alt="meGusta"/>
                <img src={shareIcon} alt="share"/>
              </div>
              

              
            </div>
          </div>
        </div>
        <div className={classes.rightImageContainer}>
          <img src={videoIcon} alt="juegos"/>
          <img src={juegoImagenIcon} alt="juegos"/>
          <img src={juegoImagen2Icon} alt="juegos"/>
          <img src={juegoImagen2Icon} alt="juegos"/>
          <img src={juegoImagenIcon} alt="juegos"/>
        </div>
      </div>
    </div>
  );
}

export default CompleteInfoCard;
