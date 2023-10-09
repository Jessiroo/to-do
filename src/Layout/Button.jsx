import { useContext, useState } from 'react';

import classes from './Button.module.css';
import ColorContext from '../context/color-context';

const Button = (props) => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const { colors } = useContext(ColorContext);

  // Hovering Handlers
  const buttonHoveredHandler = () => {
    setButtonHovered(true);
  };
  const buttonNotHoveredHandler = () => {
    setButtonHovered(false);
  };

  // Dynamic Styling
  let buttonColors = { backgroundColor: colors.button, color: colors.buttonFont };

  const hoveredColor = `${colors.buttonHover + '40'}`

  if (buttonHovered) {
    buttonColors = { backgroundColor: hoveredColor, color: colors.buttonFont };
  };

  // Component Return
  return (
    <button 
      className={classes.button}
      onClick={props.onClick}
      style={buttonColors}
      onMouseEnter={buttonHoveredHandler}
      onMouseLeave={buttonNotHoveredHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;