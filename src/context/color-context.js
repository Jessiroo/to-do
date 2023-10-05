import React from "react";

const ColorContext = React.createContext({
  colors: {},
  updateColors: (newColors) => {},
  clearColors: () => {},
});

export default ColorContext;