import React from "react";
import { IPokemonAttributes } from "../../types";
import styles from "./Styles.module.scss";

interface PokemonAttributesProps {
  data: IPokemonAttributes;
}

const PokemonAttributes: React.FC<PokemonAttributesProps> = ({ data }) => {
  return (
    <div>
      <h1>Some of your favorite pokemons traits:</h1>
      <h1>Height: {data.height},</h1>
      <h1>Weight: {data.weight},</h1>
      <h1>Id in database: {data.id},</h1>
      <h1>Base experience: {data.base_experience}.</h1>
    </div>
  );
};

export default PokemonAttributes;
