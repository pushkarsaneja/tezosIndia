import React from "react";
import Home from "./pages/home/Home";
import PageLoadTransition from "./components/pageLoadTransition/PageLoadTransition";
import BodyRefProvider from "./contexts/BodyRefProvider";
import Consulting from "./pages/consulting/Consulting";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BodyRefProvider>
      <PageLoadTransition>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </PageLoadTransition>
    </BodyRefProvider>
  );
};

export default App;
