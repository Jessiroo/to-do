import { useState } from "react";
import ColorContext from "./color-context";

// Default color settings
const defaultColors = {
  backgroundGradientTop: '#00aaff', // #00aaff
  backgroundGradientBottom: '#ffffff',
  fontNav: '#ffffff',
  fontGeneral: '#000000',
  fontLow: '#000000',
  fontMedium: '#000000',
  fontHigh: '#000000',
  cardGeneral: '#ffffff', // #ffffffcc
  cardLow: '#ffffff',
  cardMedium: '#ffffff',
  cardHigh: '#ffffff',
  cardModal: '#ffffff',
  button: '#ffffff',
  buttonFont: '#000000',
  buttonHover: '#00aaff', // #00aaff40
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