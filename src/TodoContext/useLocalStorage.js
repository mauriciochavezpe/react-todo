import React from "react";

const useLocalStorage = (itemStorage, initalValue) => {
  const [item, setItem] = React.useState(initalValue);
  // creación de un loading
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // la creación de useEfect es para hacer un seguimiento a dicho hook
  React.useEffect(() => {
    // setTimeout(() => {
      try {
        let localStorageTodo = localStorage.getItem(itemStorage);

        let dataparser;

        if (!localStorageTodo) {
          localStorage.setItem(itemStorage, JSON.stringify(initalValue));
          dataparser = initalValue;
        } else {
          dataparser = JSON.parse(localStorageTodo);
        }
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        
        //actualizamos el state del componente
        setItem(dataparser);
      } catch (error) {
        setError(error);
      }
    // }, 1000);
  },[]);

  const saveItem = (newTodoList) => {
    localStorage.setItem(itemStorage, JSON.stringify(newTodoList));
    setItem(newTodoList);
  };
  return {
    loading,
    error,
    item,
    saveItem,
  };
};

export { useLocalStorage };
