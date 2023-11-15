
//import React, { useState } from "react";
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
import '../styles/elementsMineS/Bag.scss'; 
//import { useDrag } from "react-dnd";
import BagItem from "./BagItem";


const Bag = ({ storedScore, type, score }) => {
  const elements = [
    { id: 1, name: "saffron", imgSrc: saffron, score: storedScore.yellow },
    { id: 2, name: "blueberries", imgSrc: blueberries, score: storedScore.blue },
    { id: 3, name: "redFruits", imgSrc: redFruits, score: storedScore.red },
    { id: 4, name: "yellowPotion", imgSrc: yellowPotion, score: null },
    { id: 5, name: "bluePotion", imgSrc: bluePotion, score: null },
    { id: 6, name: "redPotion", imgSrc: redPotion, score: null },
    { id: 7, name: "greenPotion", imgSrc: greenPotion, score: null },
    { id: 8, name: "orangePotion", imgSrc: orangePotion, score: null },
    { id: 9, name: "purplePotion", imgSrc: purplePotion, score: null },
    { id: 10, name: "multicolorPotion", imgSrc: multicolorPotion, score: null },
  ];

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ imgSrc: elements.imgSrc, type, score }));
  };
    
  
  
          return (
            <ul className={`bag-${type}`}>
              {elements.map((element) => (
                <BagItem
                  id={element.id}
                  key={element.name}
                  imgSrc={element.imgSrc}
                  type={type}
                  score={element.score}
                  onDragStart={handleDragStart}
                  
                  
                />
              ))}
            </ul>
          );
        };
        
        export default Bag;
        
        
        
        
        
        