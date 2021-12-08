import React from "react";
import { PageContainer } from "../../components";
import classes from "./Styles.module.scss";

const PokeListPage = (): JSX.Element => {
  return (
    <PageContainer>
      <div className={classes.PokeListPage}>
        <h1>List of pokemons is here</h1>
      </div>
    </PageContainer>
  );
};

export default PokeListPage;
