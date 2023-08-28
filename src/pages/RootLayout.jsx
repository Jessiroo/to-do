import { Outlet } from 'react-router-dom';

import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={classes.main}>
      <Outlet />
    </div>
  );
};

export default RootLayout;