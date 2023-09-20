import { useState } from "react";
import ListContext from "./list-context";
import { uid } from "uid";

const ListProvider = (props) => {
  const [list, setList] = useState([]);

  // Set List from Database
  const setListHandler = (array) => {
    if (array) {
      setList(array);
    }
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

  // Update Item on List
  const updateListItemHandler = (id, text, priority) => {
    const index = list.findIndex(obj => obj.id === id);
    const newList = [...list];
    newList[index].text = text;
    newList[index].priority = priority;
    setList(newList);
  };

  // Move Item Up List
  const moveItemUpListHandler = (id) => {
    const index = list.findIndex(obj => obj.id === id);
    const newList = [...list];
    const movedItem = newList[index];
    newList.splice(index, 1);
    newList.splice(index - 1, 0, movedItem);
    setList(newList);
  };

  // Move Item Down List
  const moveItemDownListHandler = (id) => {
    const index = list.findIndex(obj => obj.id === id);
    const newList = [...list];
    const movedItem = newList[index];
    newList.splice(index, 1);
    newList.splice(index + 1, 0, movedItem);
    setList(newList);
  };

  // Provided Context
  const listContext = {
    list,
    setList: setListHandler,
    addNewListItem: addNewListItemHandler,
    removeListItem: removeListItemHandler,
    updateListItem: updateListItemHandler,
    moveItemUp: moveItemUpListHandler,
    moveItemDown: moveItemDownListHandler,
  };

  // Context Provider Return
  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;