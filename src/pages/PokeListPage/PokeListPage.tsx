import React from "react";
import Loader from "react-loader-spinner";
import { PageContainer, PokemonList } from "../../components";
import classes from "./Styles.module.scss";
import { IPokemon } from "../../types";
import { usePokemons } from "../../utils";

const PokeListPage: React.FC = () => {
  const { status, data } = usePokemons();
  return (
    <PageContainer>
      {status === "loading" ? (
        <Loader type="Puff" />
      ) : status === "error" ? (
        <h4>Unable to process this request at the moment</h4>
      ) : status === "success" && data ? (
        <div>
          <h1>Here is the list of our Pokemons!</h1>
          <ol className={classes.orderedListOfPokemons}>
            {data.map((pokemon) => (
              <PokemonList dataPokemon={pokemon} key={pokemon.url} />
            ))}
          </ol>
        </div>
      ) : null}
    </PageContainer>
  );
};

export default PokeListPage;
