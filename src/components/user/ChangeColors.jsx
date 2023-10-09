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
  const [cardLow, setCardLow] = useState(colors.cardLow);
  const [cardMedium, setCardMedium] = useState(colors.cardMedium);
  const [cardHigh, setCardHigh] = useState(colors.cardHigh);
  const [cardModal, setCardModal] = useState(colors.cardModal);
  const [button, setButton] = useState(colors.button);
  const [buttonFont, setButtonFont] = useState(colors.buttonFont);
  const [buttonHover, setButtonHover] = useState(colors.buttonHover);

  // Value Handlers
  const updateBackgroundTopHandler = (event) => {
    setBackgroundGradientTop(event.target.value);
  };
  const updateBackgroundBottomHandler = (event) => {
    setBackgroundGradientBottom(event.target.value);
  };
  const updateFontNavHandler = (event) => {
    setFontNav(event.target.value);
  };
  const updateFontGeneralHandler = (event) => {
    setFontGeneral(event.target.value);
  };
  const updateFontLowHandler = (event) => {
    setFontLow(event.target.value);
  };
  const updateFontMediumHandler = (event) => {
    setFontMedium(event.target.value);
  };
  const updateFontHighHandler = (event) => {
    setFontHigh(event.target.value);
  };
  const updateCardGeneralHandler = (event) => {
    setCardGeneral(event.target.value);
  };
  const updateCardLowHandler = (event) => {
    setCardLow(event.target.value);
  };
  const updateCardMediumHandler = (event) => {
    setCardMedium(event.target.value);
  };
  const updateCardHighHandler = (event) => {
    setCardHigh(event.target.value);
  };
  const updateCardModalHandler = (event) => {
    setCardModal(event.target.value);
  };
  const updateButtonHandler = (event) => {
    setButton(event.target.value);
  };
  const updateButtonFontHandler = (event) => {
    setButtonFont(event.target.value);
  };
  const updateButtonHoverHandler = (event) => {
    setButtonHover(event.target.value);
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
      <div className={classes.input}>
        <label htmlFor="backgroundGradientBottom">Background Gradient Bottom:</label>
        <input 
          id="backgroundGradientBottom"
          onChange={updateBackgroundBottomHandler}
          value={backgroundGradientBottom}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="fontNav">Nav Links:</label>
        <input 
          id="fontNav"
          onChange={updateFontNavHandler}
          value={fontNav}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="fontGeneral">General Text:</label>
        <input 
          id="fontGeneral"
          onChange={updateFontGeneralHandler}
          value={fontGeneral}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="fontLow">Low Priority Text:</label>
        <input 
          id="fontLow"
          onChange={updateFontLowHandler}
          value={fontLow}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="fontMedium">Medium Priority Text:</label>
        <input 
          id="fontMedium"
          onChange={updateFontMediumHandler}
          value={fontMedium}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="fontHigh">High Priority Text:</label>
        <input 
          id="fontHigh"
          onChange={updateFontHighHandler}
          value={fontHigh}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cardGeneral">General Card:</label>
        <input 
          id="cardGeneral"
          onChange={updateCardGeneralHandler}
          value={cardGeneral}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cardLow">Low Priority Card:</label>
        <input 
          id="cardLow"
          onChange={updateCardLowHandler}
          value={cardLow}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cardMedium">Medium Priority Card:</label>
        <input 
          id="cardMedium"
          onChange={updateCardMediumHandler}
          value={cardMedium}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cardHigh">High Priority Card:</label>
        <input 
          id="cardHigh"
          onChange={updateCardHighHandler}
          value={cardHigh}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cardModal">Overlay Card:</label>
        <input 
          id="cardModal"
          onChange={updateCardModalHandler}
          value={cardModal}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="button">Button:</label>
        <input 
          id="button"
          onChange={updateButtonHandler}
          value={button}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="buttonFont">Button Text:</label>
        <input 
          id="buttonFont"
          onChange={updateButtonFontHandler}
          value={buttonFont}
          type="color"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="buttonHover">Button Hover:</label>
        <input 
          id="buttonHover"
          onChange={updateButtonHoverHandler}
          value={buttonHover}
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