import React from "react";
import { useQuery } from "react-query";
import { UserDetailsContext } from "../../components";
import { urls } from "../../constants";
import { IPokemonAttributes, RQStatusType } from "../../types";

interface IusePokemonAttributes {
  data?: IPokemonAttributes;
  error: ErrorConstructor | null;
  status: RQStatusType;
}

const usePokemonAttributes = (): IusePokemonAttributes => {
  const abortController = new AbortController();
  const { favoritePokemon } = React.useContext(UserDetailsContext);

  const fetchPokemonAttributes = async (): Promise<IPokemonAttributes> => {
    try {
      const response = await fetch(`${urls.pokemonsUrl + favoritePokemon}`, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json;
    } catch {
      throw new Error("Error occured in fetchPokemonsAttributes function!");
    }
  };
  const { data, status, error } = useQuery<
    IPokemonAttributes,
    ErrorConstructor
  >(["pokemons", favoritePokemon], () => fetchPokemonAttributes());

  return {
    data,
    status,
    error,
  };
};

export default usePokemonAttributes;
