import React from "react"
import "./index.css"
import { useState } from "react";
const Modal = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    if (!isModalOpen) {
      return (
        <button onClick={openModal}>Open Modal</button>
      );
    }
  
    return (
        <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>X</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;