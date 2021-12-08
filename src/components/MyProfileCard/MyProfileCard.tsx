import React, { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import { IUserValues } from "../../types";
import { usePokemonsAttributes } from "../../utils";
import { PokemonAttributes } from "../PokemonAttributes";
import styles from "./Styles.module.scss";
import { UserDetailsContext } from "../UserDetailsProvider";

const MyProfileCard: React.FC = () => {
  useState<IUserValues>();
  const { data, status } = usePokemonsAttributes();
  const { email, favoritePokemon } = useContext(UserDetailsContext);

  return (
    <div>
      <h1 className={styles.welcomeText}>
        Hello {email}, your favorite pokemon currently is {favoritePokemon}.
      </h1>
      {status === "loading" ? (
        <Loader type="Circles" />
      ) : status === "error" ? (
        <h1>Unable to process this request at the moment</h1>
      ) : data ? (
        <PokemonAttributes data={data} />
      ) : null}
    </div>
  );
};

export default MyProfileCard;
