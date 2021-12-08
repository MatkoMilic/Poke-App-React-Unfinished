import React from "react";
import { RQClientProvider, UserDetailsProvider } from "./components";
import "./global.scss";
import { AllRoutes } from "./routes";

const App = (): JSX.Element => {
  return (
    <RQClientProvider>
      <UserDetailsProvider>
        <AllRoutes />
      </UserDetailsProvider>
    </RQClientProvider>
  );
};

export default App;
