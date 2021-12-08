import classNames from "classnames";
import React, { useContext } from "react";
import { IPokemon } from "../../types";
import { ThemeContext } from "../ThemeProvider";
import classes from "./Styles.module.scss";

interface PokemonListProps {
  dataPokemon: IPokemon;
}

const PokemonList: React.FC<PokemonListProps> = ({ dataPokemon }) => {
  const { isThemeDark } = useContext(ThemeContext);
  return (
    <div>
      <li
        className={classNames(classes.PokemonListLight, {
          [classes.PokemonListDark]: isThemeDark,
        })}
      >
        {dataPokemon.name}
      </li>
    </div>
  );
};

export default PokemonList;
