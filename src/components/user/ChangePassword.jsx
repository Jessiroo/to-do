import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";

import classes from './ChangePassword.module.css';
import Button from "../../Layout/Button";

const ChangePassword = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Change Handlers
  const newPasswordChangeHandler = (event) => {
    setNewPassword(event.target.value);
  };
  const verifyPasswordChangeHandler = (event) => {
    setVerifyPassword(event.target.value);
  };

  // Click Handlers
  const changePasswordHandler = (event) => {
    event.preventDefault();
    if (newPassword.length > 7 && newPassword === verifyPassword) {
      const user = auth.currentUser;
      updatePassword(user, newPassword).then(() => {
        // Alert message component for password updated successfully
        // setIsError(false);
        // setErrorMsg('');
        props.onClose();
      }).catch((err) => {
        setIsError(true);
        setErrorMsg('An error occurred, unable to update password...');
      });
    } else if (!newPassword.length > 7) {
      setIsError(true);
      setErrorMsg('New password must be at least 8 characters long...');
    } else if (newPassword !== verifyPassword) {
      setIsError(true);
      setErrorMsg('Passwords must match!');
    }
    
    // RESET PASSWORD LOGIC HERE
  };
  const cancelResetPassword = (event) => {
    event.preventDefault();
    // setIsError(false);
    // setErrorMsg('');
    props.onClose();
  };

  let passwordMatch = false;

  if (newPassword.length > 7 && newPassword === verifyPassword) {
    passwordMatch = true;
  }

  // Component Return
  return (
    <form>
      <p>Password must be at least 8 characters long.</p>
      <div className={classes.input}>
        <label htmlFor="newPassword">New Password:</label>
        <input 
          id="password"
          onChange={newPasswordChangeHandler}
          value={newPassword}
          type="password"
          placeholder="Input new password..."
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="newPassword">Verify Password:</label>
        <input 
          id="verifyPassword"
          onChange={verifyPasswordChangeHandler}
          value={verifyPassword}
          type="password"
          placeholder="Re-type new password..."
        />
        {isError && <p>{errorMsg}</p>}
      </div>
      <div className={classes.button}>
        <Button onClick={cancelResetPassword}>Cancel</Button>
        {passwordMatch && <Button onClick={changePasswordHandler}>Update Password</Button>}
      </div>
    </form>
  );
};

export default ChangePassword;