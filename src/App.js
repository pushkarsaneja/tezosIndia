import React from "react";
import Home from "./pages/home/Home";
import CurrentPageProvider from "./contexts/CurrentPageProvider";

const App = () => {
  return (
    <CurrentPageProvider>
      <Home />
    </CurrentPageProvider>
  );
};

export default App;
