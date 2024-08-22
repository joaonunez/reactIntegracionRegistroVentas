import React from "react";
import { MainContainer } from "./components/MainContainer";
import { GlobalProvider } from "../src/components/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <MainContainer />
    </GlobalProvider>
  );
}

export default App;
