import { useQuery } from "react-query";
import { urls } from "../../constants";
import { IPokemon, RQStatusType } from "../../types";

interface IusePokemons {
  error: ErrorConstructor | null;
  status: RQStatusType;
  data: IPokemon[] | undefined;
  isLoading: boolean;
}

const usePokemons = (): IusePokemons => {
  const abortController = new AbortController();

  const fetchingPokemons = async (): Promise<IPokemon[]> => {
    try {
      const response = await fetch(urls.pokemonsUrl, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json.results;
    } catch {
      throw new Error("Something went wrong in the fetchingPokemons function");
    }
  };

  const { data, status, error, isLoading } = useQuery<
    IPokemon[],
    ErrorConstructor
  >("pokemons", fetchingPokemons);
  return { status, data, error, isLoading };
};

export default usePokemons;
