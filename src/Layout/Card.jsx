import { useContext } from 'react';

import classes from './Card.module.css';
import ColorContext from '../context/color-context';

const Card = (props) => {
  const {
    colors
  } = useContext(ColorContext);

  // General Styling
  const styles = `${classes.card} ${props.className}`;
  const generalBackgroundColor = `${colors.cardGeneral + 'cc'}`;

  let cardColor = { backgroundColor: generalBackgroundColor, color: colors.fontGeneral };

  // Priority Item Styling
  if (props.priority === 'Low') {
    cardColor = { backgroundColor: colors.cardLow, color: colors.fontLow };
  } else if (props.priority === 'Medium') {
    cardColor = { backgroundColor: colors.cardMedium, color: colors.fontMedium };
  } else if (props.priority === 'High') {
    cardColor = { backgroundColor: colors.cardHigh, color: colors.fontHigh };
  }

  // Component Return
  return (
    <div className={styles} style={cardColor}>
      {props.children}
    </div>
  );
};

export default Card;