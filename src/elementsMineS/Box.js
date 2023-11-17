import "../styles/elementsMineS/Box.scss";
//import bombPng from "../images/Bomb.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import saffron from "../images/Azafran.png";
import thief from "../images/Iconthief.png";

const Box = ({ onScoreUpdate, setValues,values }) => {


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

  return (
    <section className="gameMine" >
      <ul className="gameMine__container">
        {values.map((value, index) => (
          <li key={index} className="gameMine__container--box" onClick={() => handleClick(index)}>
            {renderBoxContent(value)}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Box;