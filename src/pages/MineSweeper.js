import React, { useState } from "react";
import Box from "../elementsMineS/Box";
import '../styles/elementsMineS/MinSweeper.scss';
import { Link } from "react-router-dom";
import Bag from "../elementsMineS/Bag.js";
import Modal from "../elementsMineS/Modal";
import saffron from "../images/Azafran.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
//import plants from "../images/plants.png";
import iconBag from "../images/Iconbag.png";

import { connect } from "react-redux";
import { incrementScore } from "../actions";

const MineSweeper = ({setStoredScore, incrementScore}) => {
  
  const [score, setScore] = useState({ yellow: 0, red: 0, blue: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [values, setValues] = useState(Array(64).fill(""));
  const [showModal, setShowModal] = useState(true);
  const [isBagVisible, setIsBagVisible] = useState(false);

 

  const handleOpenBag = () => {
    setIsBagVisible(true);
  };

  const handleCloseBag = () => {
    setIsBagVisible(false); 
  };

  const handleScoreUpdate = (value) => {
    if (!gameOver) {
      if (value === "1") {
        setScore((prevScore) => ({
          ...prevScore,
          yellow: prevScore.yellow + 1,
        }));
        incrementScore(1); // Incrementa el puntaje en el elemento con ID 1 (saffron)
      } else if (value === "2") {
        setScore((prevScore) => ({
          ...prevScore,
          blue: prevScore.blue + 1,
        }));
        incrementScore(3); // Incrementa el puntaje en el elemento con ID 3 (blueberries)
      } else if (value === "3") {
        setScore((prevScore) => ({
          ...prevScore,
          red: prevScore.red + 1,
        }));
        incrementScore(2); // Incrementa el puntaje en el elemento con ID 2 (redFruits)
      } else if (value === "X") {
        setGameOver(true);
      }
    }
  };

  const handleReset = () => {
    setScore({ yellow: 0, red: 0, blue: 0 });
    setGameOver(false);
    setValues(Array(64).fill(""));
  };

  const handleStoreScore = () => {
    incrementScore({
      yellow: score.yellow,
      red: score.red,
      blue: score.blue,
    });
    setScore({ yellow: 0, red: 0, blue: 0 });
  };

  
  

  return (
    
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} />

    <header className="header">
    <h1 className="header__title">Encuentra los materiales en el bosque. Cuidado con los ladrones!</h1>
    </header>

    <main className="mine">

      <article className="mine__table">        
        
          <Box
            onScoreUpdate={handleScoreUpdate}
            gameOver={gameOver}
            values={values}
            setValues={setValues}
          />
      

      </article>

      

      <article className="mine__info">    
        <section>
          <h3 className="mine__info--title">materiales</h3>
          <ul className="mine__info--list">
            <li><img src={saffron} alt="" className="iconsScore"/><p>{score.yellow}</p></li>
            <li><img src={blueberries} alt="" className="iconsScore"/><p>{score.blue}</p></li>
            <li><img src={redFruits} alt="" className="iconsScore"/><p>{score.red}</p></li>
          </ul>
         
          <button onClick={handleStoreScore} className="mine__info--button"><h4 className="textSave">Guardar</h4></button>
          

        </section> 

        
      </article>

      <article className="inventory">
        <div className="tab__bag" onClick={isBagVisible ? handleCloseBag : handleOpenBag}>
          <p><img className='tab__bag--img' src={iconBag} alt="" /></p>
        </div>
        <div className="bag">
          {isBagVisible && <Bag storedScore={setStoredScore} type="Mine"/>}
        </div>
      </article>
      
    </main>
    <section className="mine__textReturnStart">
          {gameOver && (
        <button onClick={handleReset} className="mine__textReturnStart--button"><h4 >Volver a empezar</h4></button>
      )}
      </section>       
    <footer className="footermine">
      
      
      <article className="footermine__buttonReturn">
        <button className="footermine__buttonReturn--button">
          <Link to='/Gaming'>Volver al poblado</Link>
        </button>
      </article>
    </footer>   
      
      


    </>
  );
};

const mapStateToProps = (state) => ({
  storedScore: state.bag.elements, // Ajusta esto según cómo se almacena el puntaje en tu estado
});

const mapDispatchToProps = (dispatch) => ({
  incrementScore: (id) => dispatch(incrementScore(id)),
  // Puedes agregar otras acciones según sea necesario
});

export default connect(mapStateToProps, mapDispatchToProps)(MineSweeper);