import React, { useState, useEffect } from "react";
import "../styles/elementsMineS/Box.scss";

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

  return (
    <ul className="container">
      {values.map((value, index) => (
        <li key={index} className="container__box" onClick={() => handleClick(index)}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Box;




