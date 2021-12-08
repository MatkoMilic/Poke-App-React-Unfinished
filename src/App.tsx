import React from "react";
import { RQClientProvider } from "./components";
import "./global.scss";
import { AllRoutes } from "./routes";

const App = (): JSX.Element => {
  return (
    <RQClientProvider>
      <AllRoutes />
    </RQClientProvider>
  );
};

export default App;
