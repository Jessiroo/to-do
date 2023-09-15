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

  return (
    <div className={classes.navbar}>
      <Link to="/home">Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/" onClick={signOutHandler}>Logout</Link>
    </div>
  );
};

export default Navbar;