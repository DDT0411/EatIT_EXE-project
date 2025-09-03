import React from "react";
import { StoreContext } from "./StoreContext";
import { food_list } from "../assets/assets";

const StoreContextProvider = ({ children }) => {
  const ContextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
