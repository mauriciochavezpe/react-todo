import React from "react";
//importar el useLocalStorage
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();



const todosDefault = [
  {
    name: "learning React",
    completed: false,
  },
  {
    name: "learning Redux",
    completed: true,
  },
  {
    name: "Learning CSS3",
    completed: true,
  },
];
// let arr = Array(5).fill({});
// crear un provider que se encargara de proveer los datos al componente hijo que lo necesite
function TodoProvider(props) {
  const {
    loading,
    error,
    item: todoList,
    saveItem: setTodoList,
  } = useLocalStorage("todoList_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const todoListAvailable = todoList.filter(todo => todo.completed).length;
  const todos = todoList.length; 
// flag modal
  const [modal, setModal] = React.useState(false);


const addTodo = (todo) => {
    let newTodo = {
      name: todo,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
}
  // busqeda de todos
  let searchedTodos = [];
  //Validamos el state de busqueda
  if (searchValue.length > 0) {
    // debugger;
    //Recorremos el array de todos
    todoList
      .filter((todo) =>
        todo.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((todo) => searchedTodos.push(todo));
  } else {
    //Si no hay busqueda, agregamos todos los todos
    searchedTodos.push(...todoList);
    // setTodoList(todoSet);
  }
  // marcar como complete el todoItem
  const onComplete = (name) => {
    const arrNew = [...todoList]; // copiamos el array de todos para no modificar el original Street operator
    const index = arrNew.findIndex((todo) => todo.name === name);
    arrNew[index].completed = !arrNew[index].completed; // cambiamos el estado del todo
    setTodoList(arrNew);
    
  };

  const onDelete = (name) => {
    const arrNew = [...todoList]; // copiamos el array de todos para no modificar el original
    const index = arrNew.findIndex((todo) => todo.name === name);
    arrNew.splice(index, 1); // eliminamos el todo
    setTodoList(arrNew);
    
  };
  
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todoList,
        todoListAvailable,
        todos,
        searchValue,
        setSearchValue,
        searchedTodos,
        modal,
        setModal,
        onComplete,
        onDelete,
        setTodoList,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
