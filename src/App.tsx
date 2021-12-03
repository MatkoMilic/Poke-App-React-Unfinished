import React from "react";
import { PageContainer } from "./components";
import "./global.scss";
import { AllRoutes } from "./routes";

const App = (): JSX.Element => {
  return (
    <PageContainer>
      <AllRoutes />
    </PageContainer>
  );
};

export default App;
