import React from "react";
import Home from "./pages/home/Home";
import CurrentPageProvider from "./contexts/CurrentPageProvider";
import PageLoadTransition from "./components/pageLoadTransition/PageLoadTransition";
import BodyRefProvider from "./contexts/BodyRefProvider";

const App = () => {
  return (
    <BodyRefProvider>
      <CurrentPageProvider>
        <PageLoadTransition>
          <Home />
        </PageLoadTransition>
      </CurrentPageProvider>
    </BodyRefProvider>
  );
};

export default App;
