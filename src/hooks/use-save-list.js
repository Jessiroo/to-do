import { ref, update } from "firebase/database";
import { auth, db } from "../firebase/firebase_config";

const useSaveList = () => {
  const saveList = (list) => {
    const userId = auth.currentUser.uid;
    update(ref(db, `/${userId}`), {
      toDoList: list,
    });
  };

  return saveList;
};

export default useSaveList;