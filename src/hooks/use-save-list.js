import { ref, update } from "firebase/database";
import { auth, db } from "../firebase/firebase_config";

const useSaveList = () => {
  const saveList = (list) => {
    const userId = auth.currentUser.uid;
    update(ref(db, `/users/${userId}`), {
      toDoList: list,
    }).then(() => {
      // save success message
    }).catch((err) => {
      alert('Unable to save data...');
      // change to component with save error message
    });
  };

  return saveList;
};

export default useSaveList;