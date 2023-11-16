import { INCREMENT_SCORE } from "../actions";

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
            default:
                return state;
    }
};

export default bagReducer;