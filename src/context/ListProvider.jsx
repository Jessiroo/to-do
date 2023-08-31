import { useState } from "react";
import ListContext from "./list-context";
import { uid } from "uid";

const ListProvider = (props) => {
  const [list, setList] = useState([]);

  // Add New Item to List
  const addNewListItem = (text, priority) => {
    const listItemId = uid();
    const newItem = {
      id: listItemId,
      text,
      priority,
    };
    const newList = [...list];
    newList.push(newItem);

    setList(newList);
  };

  // Provided Context
  const listContext = {
    list,
    addNewListItem,
  };

  // Context Provider Return
  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;