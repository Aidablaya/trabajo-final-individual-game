import React from "react";

import "../styles/elementsMineS/Modal.scss";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  const handleAccept = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>¡Advertencia!</h2>
        <p>
            Puedes entrar en el bosque pero antes debes saber tres cosas:
            - Necesitas 3 tipos de objetos.
            - Debes guardar los objetos en tu bolsa o lo perderás todo.
            - Mucho cuidado con las minas, si encuentras una tendrás que volver a empezar y si además no has guardado los objetos los perderás.
        
        </p>
        <button onClick={handleAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;
