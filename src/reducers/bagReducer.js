import { INCREMENT_SCORE } from "../actions";
import { UPDATE_SCORE, DRAG_START, DROP_MIX, REMOVE_FROM_BAG, INCREMENT_SCORE_MIX, RESET_MIX_LIST, MIX_ALL_POTIONS } from '../actions';

import saffron from "../images/Azafran.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import yellowPotion from "../images/Potionyellow.png";
import bluePotion from "../images/Potionblue.png";
import redPotion from "../images/Potionred.png";
import greenPotion from "../images/Potiongreen.png";
import orangePotion from "../images/Potionorange.png";
import purplePotion from "../images/Potionpurple.png";
import multicolorPotion from "../images/Potionmulticolor.png";

const initialStateBag = {
    elements : [
      { id: 1, name: "saffron", imgSrc: saffron, score: 0 },
      { id: 2, name: "blueberries", imgSrc: blueberries, score: 0 },
      { id: 3, name: "redFruits", imgSrc: redFruits, score: 0 },
      { id: 4, name: "yellowPotion", imgSrc: yellowPotion, score: 0 },
      { id: 5, name: "bluePotion", imgSrc: bluePotion, score: 0 },
      { id: 6, name: "redPotion", imgSrc: redPotion, score: 0 },
      { id: 7, name: "greenPotion", imgSrc: greenPotion, score: 0 },
      { id: 8, name: "orangePotion", imgSrc: orangePotion, score: 0 },
      { id: 9, name: "purplePotion", imgSrc: purplePotion, score: 0 },
      { id: 10, name: "multicolorPotion", imgSrc: multicolorPotion, score: 0 },
    ],
    mixList: [],
};

const bagReducer = ( state = initialStateBag, action) => {
    switch (action.type) {
        case INCREMENT_SCORE:
            
            return {
                ...state,
                elements: state.elements.map((element) => 
                        element.id === action.payload ? {...element, score: element.score + 1} : element
                    ),
            };
            case UPDATE_SCORE:
      return {
        ...state,
        elements: state.elements.map((element) =>
          element.id === action.payload.id
            ? { ...element, score: element.score + action.payload.amount }
            : element
        ),
      };
        case DRAG_START:
        console.log('DRAG_START:', action.payload);
        return {
          ...state,
          dragInfo: action.payload,
        };
        case DROP_MIX:
          const newItem = action.payload; 
          console.log('New item dropped:', newItem);
          return {
            ...state,
            mixList: [...state.mixList, newItem],
          };
          case REMOVE_FROM_BAG:
        const removedItem = action.payload;
        const updatedBag = state.elements.map(item => 
          item.id === removedItem.id ? { ...item, score: item.score - 1 } : item
        );
        return {
          ...state,
          elements: updatedBag,
        };
        case INCREMENT_SCORE_MIX:
          const targetId = action.payload;
          console.log('Incrementing score for ID:', targetId); // Agrega esta línea para verificar el targetId
          const updatedElements = state.elements.map((element) =>
            element.id === targetId ? { ...element, score: element.score + 1 } : element
          );
          return {
            ...state,
            elements: updatedElements,
          };
            case RESET_MIX_LIST:
              return {
                ...state,
                mixList: [],
              };    
            default:
                return state;
                case MIX_ALL_POTIONS:
                  const mixPotionsIds = [4, 5, 6, 7, 8, 9];
                  const updatedElementsMix = state.elements.map((element) =>
                    mixPotionsIds.includes(element.id)
                      ? { ...element, score: element.score - 1 }
                      : element
                  );
                
                  // Suma 1 al puntaje de id10
                  const updatedElementId10 = updatedElementsMix.find(
                    (element) => element.id === 10
                  );
                  if (updatedElementId10) {
                    updatedElementId10.score += 1;
                  }
                
                  return {
                    ...state,
                    elements: updatedElementsMix,
                  };
    }
};

export default bagReducer;