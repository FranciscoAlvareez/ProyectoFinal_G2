import React from "react";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";

function CompleteInfoCard({ infoCard }) {
  /*const supportedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"];
  const platforms = infoCard.parent_platforms
    .filter((platform) => supportedPlatforms.includes(platform.platform.name))
    .map((platform) => platform.platform.name);*/

  const maxGenresToShow = 1;
  const genres = infoCard.genres.slice(0, maxGenresToShow);
  return (
    <>
      <div className={classes.globalContainer}>
        <header className={classes.header}>
          <div className={classes.icons}>
            {platforms.map((platform) => (
              <img
                key={platform}
                src={`src/Imgs/${platform}.png`}
                alt={platform}
              />
            ))}
          </div>
          <h1>{infoCard.name}</h1>
          <div>
            <p>{infoCard.released}</p>
            <p>#{infoCard.id}</p>
            <p>#{infoCard.id} {genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  {genre.name}
                  {index < genres.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}</p>
          </div>
        </header>
        <section>
          <main></main>
          <main></main>
        </section>
        <aside></aside>
        <article></article>
      </div>
    </>
  );
}

export default CompleteInfoCard;