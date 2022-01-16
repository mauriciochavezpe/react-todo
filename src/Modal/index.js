//importar react
import React from "react";
//importar react-dom
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
