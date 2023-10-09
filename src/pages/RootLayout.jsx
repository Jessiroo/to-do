import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './RootLayout.module.css';
import ColorContext from '../context/color-context';

const RootLayout = () => {
  const { colors } = useContext(ColorContext);

  // Dynamic Background Styling
  const backgroundColors = `linear-gradient(${colors.backgroundGradientTop}, ${colors.backgroundGradientBottom})`;

  const backgroundStyle = { background: backgroundColors };

  // Component Return
  return (
    <div className={classes.main} style={backgroundStyle}>
      <Outlet />
    </div>
  );
};

export default RootLayout;