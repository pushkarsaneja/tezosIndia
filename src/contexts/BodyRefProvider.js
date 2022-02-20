import React, { createContext, useContext, useState } from "react";

const bodyRefContext = createContext();
const setBodyRefContext = createContext();

const BodyRefProvider = ({ children }) => {
  const [bodyRef, setBodyRef] = useState(null);
  return (
    <bodyRefContext.Provider value={bodyRef}>
      <setBodyRefContext.Provider value={setBodyRef}>
        {children}
      </setBodyRefContext.Provider>
    </bodyRefContext.Provider>
  );
};

export default BodyRefProvider;

export const useBodyRef = () => useContext(bodyRefContext);
export const useSetBodyRef = () => useContext(setBodyRefContext);
