import React from "react";
import classes from "./index.module.css";
import { useFetch } from "../Hooks/genHook";

function ModalGenres({ genres }) {
  return (
    <div className={classes.modalGenres}>
      {genres.map((genre, index) => (
        <div key={index} className={classes.genres}>
          <p >{genre.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ModalGenres;
