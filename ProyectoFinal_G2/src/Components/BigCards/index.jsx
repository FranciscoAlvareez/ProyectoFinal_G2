import React, { useState } from "react";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";
import BigCard from "./bigCard";

function AllBigCards(){
    const { data, error, loading: isLoading } = useFetch("https://api.rawg.io/api/games");

  if (isLoading) {
    return <p>Loading Games...</p>;
  }

  return (
    <div className={classes.allBigCardsContainer}>
      {data?.results?.map((game) => (
        <BigCard key={game.id} infoCard={game} />
      ))}
    </div>
  );
}

export default AllBigCards;