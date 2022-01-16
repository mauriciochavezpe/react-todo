// importar context, react
import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoItems.css";

const TodoItems = (props) => {
  let { loading } = React.useContext(TodoContext);

  return (
    <li className="list-item">
      {loading && <div className="box-preload"></div>}
      <div className="list-item-container">
        <button className="list-item--btn change" onClick={props.completed}>
          √
        </button>
        <span className={props.todo.completed ? "list-item--complete" : ""}>
          {props.todo.name}
        </span>
        <button className="list-item--btn close" onClick={props.delete}>
          X
        </button>
      </div>
    </li>
  );
};

export { TodoItems };
