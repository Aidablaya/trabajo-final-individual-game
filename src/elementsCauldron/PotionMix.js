import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { DROP_MIX, DRAG_START, incrementScoreMix } from '../actions';
import { removeFromBag,resetMixList } from '../actions';
import '../styles/elementsCauldron/PotionMix.scss';
import ButtonMixAll from './ButtonMixAll';


const PotionMix = ({ dispatch, mixList, elements }) => {
  const [isOver, setIsOver] = useState(false);
  const [resultItem, setResultItem] = useState(null);

  const [, drop] = useDrop({
    accept: DRAG_START,
    drop: (item) => {
      if (mixList.length < 2) {  // Verifica que haya menos de dos elementos en mixList
        console.log('Item dropped:', item);
        dispatch({ type: DROP_MIX, payload: item });
        dispatch(removeFromBag(item));
      } else {
        console.log('No se pueden agregar más elementos. Limite alcanzado.');
      }
    },
    collect: (monitor) => {
      const isOver = monitor.isOver();
      setIsOver(isOver);
      return {
        isOver: isOver,
      };
    },
  });

  const handleMixClick = () => {
    if (mixList.length === 2) {
      const hasId1 = mixList.some((item) => item.id === 1);
      const hasId2 = mixList.some((item) => item.id === 2);
      const hasId3 = mixList.some((item) => item.id === 3);
  
      let targetId = null;
  
      if (hasId1 && hasId2) {
        targetId = 7;
      } else if (hasId1 && hasId3) {
        targetId = 8;
      } else if (hasId2 && hasId3) {
        targetId = 9;
      } else if (hasId1 && hasId1) {
        targetId = 4;
      } else if (hasId2 && hasId2) {
        targetId = 5;
      } else if (hasId3 && hasId3) {
        targetId = 6;
      }
  
      if (targetId !== null) {
        console.log('Target ID:', targetId);
        const newItem = elements.find((item) => item.id === targetId);
  
        if (newItem) {
          console.log('Result:', newItem);
          dispatch(incrementScoreMix(targetId));
          setResultItem(newItem);
          return; // Sale de la función después de mezclar
        } else {
          console.log(`No se encontró el elemento con ID ${targetId} en la bolsa.`);
        }
      } else {
        console.log('Combinación no válida.');
      }
    } else {
      console.log('Se necesitan dos elementos para mezclar.');
    }
  };
  
  const handleResetClick = () => {
    dispatch(resetMixList());
    setResultItem(null);
  };

  return (
    <div className={`box-drop ${isOver ? 'over' : ''}`} ref={drop} onDragOver={(e) => e.preventDefault()}>
      <div className='listMix'>
        <ul>
          {mixList.map((item, index) => (
            <li className='listMix__item' key={index}>
              <img src={item.imgSrc} alt={`Item ${item.id}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className='resultMix'>
        
        {resultItem && (
          <div>
            <img src={resultItem.imgSrc} alt={`Result ${resultItem.id}`} />
            
            {/* Agrega cualquier otra información que quieras mostrar */}
          </div>
        )}
      </div>
      <div className='buttonMix' onClick={handleMixClick}>
        <button>Mezclar</button>
      </div>
      <div>
        <button onClick={handleResetClick}>Limpiar</button>
      </div>
      <div>
      {/* Otros componentes */}
      <ButtonMixAll />
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mixList: state.bag.mixList || [],
  elements: state.bag.elements || [],
});

export default connect(mapStateToProps)(PotionMix);


