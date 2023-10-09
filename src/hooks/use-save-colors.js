import { ref, update } from "firebase/database";
import { auth, db } from "../firebase/firebase_config";

const useSaveColors = () => {
  const saveColors = (colors) => {
    const userId = auth.currentUser.uid;
    update(ref(db, `/users/${userId}`), {
      userColorSettings: colors,
    }).then(() => {
      // save success message
    }).catch((err) => {
      alert('Unable to save data...');
      // change to component with save error message
    });
  };

  return saveColors;
};

export default useSaveColors;