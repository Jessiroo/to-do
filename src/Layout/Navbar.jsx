import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import useAuth from '../hooks/use-auth';

const Navbar = (props) => {
  const { clearUser } = useAuth();

  const signOutHandler = () => {
    if (props.onSignOut) {
      props.onSignOut();
    } else {
      clearUser();
    }
  };

  // Dynamic Colors
  // TESTING, will make this dynamic based on preferences
  const linkColor = { color: 'black' };

  return (
    <div className={classes.navbar}>
      <Link to="/home" style={linkColor}>Home</Link>
      <Link to="/settings" style={linkColor}>Settings</Link>
      <Link to="/" style={linkColor} onClick={signOutHandler}>Logout</Link>
    </div>
  );
};

export default Navbar;