import { useState } from "react";
import ListContext from "./list-context";
import { uid } from "uid";

const ListProvider = (props) => {
  const [list, setList] = useState([]);

  // Set List from Database
  const setListHandler = (array) => {
    setList(array);
  };

  // Add New Item to List
  const addNewListItemHandler = (text, priority) => {
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

  // Remove Item From List
  const removeListItemHandler = (id) => {
    const index = list.findIndex(obj => obj.id === id);
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  // Provided Context
  const listContext = {
    list,
    setList: setListHandler,
    addNewListItem: addNewListItemHandler,
    removeListItem: removeListItemHandler,
  };

  // Context Provider Return
  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;