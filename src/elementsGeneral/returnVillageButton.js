import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/elementsGeneral/ReturnToVillageButton.scss';

const ReturnToVillageButton = () => {
  return (
    <button className="button">
      <Link to="/Gaming">Volver al poblado</Link>
    </button>
  );
};

export default ReturnToVillageButton;