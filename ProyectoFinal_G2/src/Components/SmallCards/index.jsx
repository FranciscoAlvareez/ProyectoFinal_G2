import React from "react";
import IndividualCards from "./cards";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";

function Cards() {
  const { data, error, loading: isLoading } = useFetch("https://api.rawg.io/api/games");

  if (isLoading) {
    return <p>Loading Games...</p>;
  }

  return (
    <div className={classes.globalCardContainer}>
      {data?.results?.map((game) => (
        <IndividualCards key={game.id} infoCard={game} />
      ))}
    </div>
  );
}

export default Cards;
