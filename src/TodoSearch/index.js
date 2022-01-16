import React from "react";
import "./TodoSearch.css";
//importar context
import { TodoContext } from "../TodoContext";

//Recibe los props de TodoSearch
const TodoSearch = () => {
  const { searchValue, setSearchValue,setModal } = React.useContext(TodoContext);

  const onSearchValue = (e) => {
    // console.log(e.target.value);
    var value = e.target.value;
    //cambiando el estado
    // console.log(value);
    setSearchValue(value);
  };
  const displayModal = () => {
    setModal(prevState => !prevState);
  }
  return [
    <div className="box">
      <input
        onChange={onSearchValue}
        className="i-search"
        value={searchValue}
        placeholder="Buscar tarea"
      />
      <button onClick={displayModal} className="box--modal-display">+</button>
    </div>,
  ];
};

// export default TodoSearch;
export { TodoSearch };
