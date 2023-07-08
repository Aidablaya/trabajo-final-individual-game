import React, { useState } from "react";
import Box from "../elementsMineS/Box";
import '../styles/elementsMineS/MinSweeper.scss';
import { Link } from "react-router-dom";

const MineSweeper = () => {
  const [score, setScore] = useState({ yellow: 0, red: 0, blue: 0 });
  const [storedScore, setStoredScore] = useState({ yellow: 0, red: 0, blue: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [values, setValues] = useState(Array(64).fill(""));

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
    <header>
    <h1>Encuentra los materiales en el bosque. Cuidado hay minas!</h1>
    </header>
    <main className="mine">
      <article>
        
        <section>
          <Box
            onScoreUpdate={handleScoreUpdate}
            gameOver={gameOver}
            values={values}
            setValues={setValues}
          />
        </section>
      </article>
      <article>
        <section>
          <h3>Score</h3>
          <ul>
            <li>Amarillo: {score.yellow}</li>
            <li>Azul: {score.blue}</li>
            <li>Rojo: {score.red}</li>
          </ul>
        </section>
        <section>
          <h3>Antes de volver a adentrarte en el bosque, guarda los ingredientes en tu saco:</h3>
          <button onClick={handleStoreScore}>Guardar</button>
          <ul>
            <h3>Bolsa</h3>
            <li>Amarillo: {storedScore.yellow}</li>
            <li>Azul: {storedScore.blue}</li>
            <li>Rojo: {storedScore.red}</li>
          </ul>
        </section>
        {gameOver && (
        <button onClick={handleReset}>Volver a empezar</button>
      )}
      <Link to='/Gaming'>Volver al poblado</Link>
      </article>
      

      </main>
    </>
  );
};

export default MineSweeper;

