import React from "react";
import "./TodoCounter.css";
// importar context 
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const { todoListAvailable,todos } = React.useContext(TodoContext);

  return (
    <h2 className="todoCounter">
      Has aprobado {todoListAvailable} de {todos} cursos
    </h2>
  );
  
};

export { TodoCounter };
