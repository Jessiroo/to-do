import { useState } from "react";
import ColorContext from "./color-context";

// Default color settings
const defaultColors = {
  backgroundGradientTop: null,
  backgroundGradientBottom: null,
  fontNav: null,
  fontGeneral: null,
  fontLow: null,
  fontMedium: null,
  fontHigh: null,
  cardGeneral: null,
  cardLow: null,
  cardMedium: null,
  cardHigh: null,
  cardModal: null,
  button: null,
  buttonFont: null,
  buttonHover: null,
};

// Colors Reducer Fn
// const updateColors = (state, action) => {
//   // update all colors (initial from saved prefs or saving new prefs in form)
//   // reset colors to default
//   return defaultColors;
// };

// Color Provider
const ColorProvider = (props) => {
  const [colors, setColors] = useState(defaultColors);

  const updateColorsHandler = (newColors) => {
    // function here for updating the colors
  };

  const clearColorsHandler = () => {
    setColors(defaultColors);
  };

  const colorContext = {
    colors,
    updateColors: updateColorsHandler,
    clearColors: clearColorsHandler,
  };

  return (
    <ColorContext.Provider value={colorContext}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;