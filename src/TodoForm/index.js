//importar css
import React from "react";
import "./Popup.css";
//importar context
import { TodoContext } from "../TodoContext";

const Popup = () => {

    //declara el context
    const { setModal,addTodo } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    
     
    const onReject = () => {
        setModal(false);
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
       addTodo(newTodoValue);
        setModal(false);
    }

    return (
    // <div className="body-popup">
// <div className="popup-container"> 
       // <div className="popup-container--body"> 
                 <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="label-name">Escribe tu nuevo TODO</label>
            </div>
            <div>
              <textarea  rows={3} onChange={onChange} value={newTodoValue} />
            </div>
            <div className="form-btn">
              <button className="btn-popup success" type="submit">Agregar</button>
              <button className="btn-popup reject" onClick={onReject}>Cancelar</button>
            </div>
          </form>
        
    //   </div>
    // </div>
  );
};

export { Popup };
