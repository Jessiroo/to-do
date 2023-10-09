import { useContext, useState } from 'react';

import classes from './ChangeColors.module.css';
import Button from '../../Layout/Button';
import ColorContext from '../../context/color-context';

const ChangeColors = (props) => {
  const {
    colors,
  } = useContext(ColorContext);
  const [backgroundGradientTop, setBackgroundGradientTop] = useState(colors.backgroundGradientTop);
  const [backgroundGradientBottom, setBackgroundGradientBottom] = useState(colors.backgroundGradientBottom);
  const [fontNav, setFontNav] = useState(colors.fontNav);
  const [fontGeneral, setFontGeneral] = useState(colors.fontGeneral);
  const [fontLow, setFontLow] = useState(colors.fontLow);
  const [fontMedium, setFontMedium] = useState(colors.fontMedium);
  const [fontHigh, setFontHigh] = useState(colors.fontHigh);
  const [cardGeneral, setCardGeneral] = useState(colors.cardGeneral);
  

  // Value Handlers
  const updateBackgroundTopHandler = (event) => {
    setBackgroundGradientTop(event.target.value);
  };

  // Submit/Cancel Handlers
  const updateColorsHandler = (event) => {
    event.preventDefault();
    // Compile color values
    // Update Context
    // Save to Database
  };
  const cancelUpdateColors = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <form>
      <p>Modify your color settings:</p>
      <div className={classes.input}>
        <label htmlFor="backgroundGradientTop">Background Gradient Top:</label>
        <input 
          id="backgroundGradientTop"
          onChange={updateBackgroundTopHandler}
          value={backgroundGradientTop}
          type="color"
        />
      </div>
      <div className={classes.button}>
        <Button onClick={cancelUpdateColors}>Cancel</Button>
        <Button onClick={updateColorsHandler}>Update Colors</Button>
      </div>
    </form>
  );
};

export default ChangeColors;