import React, { useState } from "react";
import Box from "../elementsMineS/Box";
import '../styles/elementsMineS/MinSweeper.scss';
import { Link } from "react-router-dom";
import Bag from "../elementsMineS/Bag.js";
import Modal from "../elementsMineS/Modal";
import saffron from "../images/Azafran.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";

import iconBag from "../images/Iconbag.png";



const MineSweeper = ({setScore, score, setStoredScore, storedScore}) => {
  
  
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
      } else if (value === "2") {
        setScore((prevScore) => ({
          ...prevScore,
          blue: prevScore.blue + 1,
        }));
      } else if (value === "3") {
        setScore((prevScore) => ({
          ...prevScore,
          red: prevScore.red + 1,
        }));
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
    setStoredScore((prevStoredScore) => ({
      yellow: prevStoredScore.yellow + score.yellow,
      red: prevStoredScore.red + score.red,
      blue: prevStoredScore.blue + score.blue,
    }));
    setScore({ yellow: 0, red: 0, blue: 0 });
  };

  
  

  return (
    
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} />

    <header>
    <h1 className="title">Encuentra los materiales en el bosque. Cuidado con los ladrones!</h1>
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
          <h3 className="mine__info--title">Score</h3>
          <ul className="mine__info--list">
            <li><img src={saffron} alt="" className="iconsScore"/><p>{score.yellow}</p></li>
            <li><img src={blueberries} alt="" className="iconsScore"/><p>{score.blue}</p></li>
            <li><img src={redFruits} alt="" className="iconsScore"/><p>{score.red}</p></li>
          </ul>
         
          <button onClick={handleStoreScore} className="mine__info--button"><h4 className="textSave">Guardar</h4></button>
          

        </section> 

        
      </article>

      
      <div className="bag">
        {isBagVisible && <Bag storedScore={storedScore} type="Mine"/>}
      </div>

      <div className="tab" onClick={isBagVisible ? handleCloseBag : handleOpenBag}>
        <p><img className='tab__img' src={iconBag} alt="" />gbsrgts</p>
      </div>
        
    </main>
    <section className="mine__textReturnStart">
          {gameOver && (
        <button onClick={handleReset}><h4 className="mine__textReturnStart--button">Volver a empezar</h4></button>
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

export default MineSweeper;

