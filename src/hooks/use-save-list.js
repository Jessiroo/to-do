import { ref, set } from "firebase/database";
import { auth, db } from "../firebase/firebase_config";

const useSaveList = () => {
  const saveList = (list) => {
    const userId = auth.currentUser.uid;
    set(ref(db, `/${userId}`), {
      toDoList: list,
    });
  };

  return saveList;
};

export default useSaveList;