import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItems";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
// importar el popup
import { Popup } from "../TodoForm";

const AppUI = () => {
  const {
    loading,
    todoList,
    error,
    onDelete,
    onComplete,
    searchValue,
    searchedTodos,
    modal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      {/* //enviamos los props al componente TodoSearch */}
      <TodoSearch />
      {/* Existen 2 formas de enviar props, 1 mediante attributos y otro es añadiendo nodos children */}
      {/* Vamos a mapear si hay datos o no */}
      {/* <TodoContext.Consumer> */}

      <TodoList>
        {loading && todoList.length === 0 && <p>Cree un registro</p>}
        {loading && <p>Estamos cargando la información...</p>}
        {error && <p>Hubo un error...</p>}

        {searchedTodos.map((todo, index) => (
          <TodoItems
            key={index.toString()}
            delete={() => onDelete(todo.name)}
            todo={todo}
            completed={() => onComplete(todo.name)}
          />
        ))}
      </TodoList>
      {modal && (
        <Modal>
          <Popup />
        </Modal>
      )}
    </React.Fragment>
  );
};

export { AppUI };
