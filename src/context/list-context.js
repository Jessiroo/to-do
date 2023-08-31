import React from "react";

const ListContext = React.createContext({
  list: [],
  addNewListItem: (text, priority) => {},
});

export default ListContext;