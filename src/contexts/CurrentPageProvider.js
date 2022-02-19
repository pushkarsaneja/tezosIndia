import React, { useState, useContext, createContext } from "react";

const currentPageContext = createContext();
const setCurrentPageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <currentPageContext.Provider value={currentPage}>
      <setCurrentPageContext.Provider value={setCurrentPage}>
        {children}
      </setCurrentPageContext.Provider>
    </currentPageContext.Provider>
  );
};

export default CurrentPageProvider;

export const useCurrentPage = () => useContext(currentPageContext);
export const useSetCurrentPage = () => useContext(setCurrentPageContext);
