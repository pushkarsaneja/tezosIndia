import React from "react";
import Home from "./pages/home/Home";
import CurrentPageProvider from "./contexts/CurrentPageProvider";
import PageLoadTransition from "./components/pageLoadTransition/PageLoadTransition";

const App = () => {
  return (
    <CurrentPageProvider>
      <PageLoadTransition>
        <Home />
      </PageLoadTransition>
    </CurrentPageProvider>
  );
};

export default App;
