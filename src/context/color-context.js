import React from "react";

const ColorContext = React.createContext({
  colors: {},
  showSavedColors: (retrievedColors) => {},
  updateColors: (newColors) => {},
  clearColors: () => {},
});

export default ColorContext;