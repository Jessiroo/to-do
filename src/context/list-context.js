import React from "react";

const ListContext = React.createContext({
  list: [],
  setList: (array) => {},
  addNewListItem: (text, priority) => {},
  removeListItem: (id) => {},
  updateListItem: (id, text, priority) => {},
  moveUpList: (id) => {},
  moveDownList: (id) => {},
});

export default ListContext;