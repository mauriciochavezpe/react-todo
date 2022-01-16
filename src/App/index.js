import React from "react";
import { AppUI } from "./AppUI"; // importamos el componente appUI
import {  TodoProvider } from "../TodoContext";


//creación de un custom hook para localStorage argumentos

/* eslint-disable */
function App() {
  //inicializando los estados
  // const [todoList, setTodoList] = React.useState(todosDefault);

  // las clases para un elemento de HTML se escriben "className"
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
