// En tu componente
import React from 'react';
import { connect } from 'react-redux';
import { mixAllPotions } from '../actions';

const ButtonMixAll = ({ mixAllPotions, canMix }) => {
  return canMix ? (
    <button onClick={mixAllPotions}>Mezclar Todas las Pociones</button>
  ) : null;
};

const mapStateToPropsButton = (state) => {
  // Lógica para determinar si se pueden mezclar todas las pociones
  const mixPotionsIds = [4, 5, 6, 7, 8, 9];
  const canMix = mixPotionsIds.every(
    (id) => state.bag.elements.find((element) => element.id === id)?.score > 0
  );

  return {
    canMix,
  };
};

export default connect(mapStateToPropsButton, { mixAllPotions })(ButtonMixAll);
