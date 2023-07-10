import React, { useState, useEffect } from "react";
import "../styles/elementsMineS/Box.scss";
import bombPng from "../images/Bomb.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import saffron from "../images/Azafran.png";

const Box = ({ onScoreUpdate, reset }) => {
  const [values, setValues] = useState(Array(64).fill(""));

  const handleClick = (index) => {
    const options = ["1", "2", "3", "X"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const newValue = options[randomIndex];

    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });

    onScoreUpdate(newValue);
  };

  useEffect(() => {
    if (reset) {
      setValues(Array(64).fill(""));
    }
  }, [reset]);

  const renderBoxContent = (value) => {
    if (value === "") {
      return null;
    } else if (value === "X") {
      return <img src={bombPng} alt="X/Bomba" className="bomb-image" />;
    } else if (value === "1") {
      return <img src={saffron} alt="azafrán" className="bomb-image" />;
      
    } else if (value === "2") {
      return <img src={blueberries} alt="arándanos" className="bomb-image" />;
    } else if (value === "3") {
      return <img src={redFruits} alt="Frutos rojos" className="bomb-image" />;
    } else {
      return value;
    }
  };

  return (
    <ul className="container">
      {values.map((value, index) => (
        <li key={index} className="container__box" onClick={() => handleClick(index)}>
          {renderBoxContent(value)}
        </li>
      ))}
    </ul>
  );
};

export default Box;




