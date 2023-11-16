import React from "react";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import saffron from "../images/Azafran.png";
import thief from "../images/Iconthief.png";

const Box = ({ onScoreUpdate, setValues, values, setScore, setStoredScore, elements }) => {
  const handleClick = (index) => {
    const options = ["1", "2", "3", "X"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const newValue = options[randomIndex];

    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });

    onScoreUpdate(newValue, setScore, setStoredScore);
  };

  const renderBoxContent = (value) => {
    if (value === "") {
      return null;
    } else if (value === "X") {
      return <img src={thief} alt="azafrán" className="bomb-image" />;
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

  const handleStoreScore = () => {
    // Puedes acceder directamente a los elementos del estado a través de las props
    const saffronScore = elements.find((element) => element.name === "saffron").score;
    const blueberriesScore = elements.find((element) => element.name === "blueberries").score;
    const redFruitsScore = elements.find((element) => element.name === "redFruits").score;

    setStoredScore((prevStoredScore) => ({
      yellow: prevStoredScore.yellow + saffronScore,
      blue: prevStoredScore.blue + blueberriesScore,
      red: prevStoredScore.red + redFruitsScore,
    }));
    // Puedes restablecer las puntuaciones en el estado local si es necesario
    setScore({ yellow: 0, red: 0, blue: 0 });
  };

  return (
    <article>
      <section className="gameMine">
        <ul className="gameMine__container">
          {values.map((value, index) => (
            <li key={index} className="gameMine__container--box" onClick={() => handleClick(index)}>
              {renderBoxContent(value)}
            </li>
          ))}
        </ul>
      </section>
      <article className="mine__info">
        <section>
          <h3 className="mine__info--title">materiales</h3>
          <ul className="mine__info--list">
            <li>
              <img src={saffron} alt="" className="iconsScore" />
              <p>{elements.find((element) => element.name === "saffron").score}</p>
            </li>
            <li>
              <img src={blueberries} alt="" className="iconsScore" />
              <p>{elements.find((element) => element.name === "blueberries").score}</p>
            </li>
            <li>
              <img src={redFruits} alt="" className="iconsScore" />
              <p>{elements.find((element) => element.name === "redFruits").score}</p>
            </li>
          </ul>
          <button onClick={handleStoreScore} className="mine__info--button">
            <h4 className="textSave">Guardar</h4>
          </button>
        </section>
      </article>
    </article>
  );
};

export default Box;
