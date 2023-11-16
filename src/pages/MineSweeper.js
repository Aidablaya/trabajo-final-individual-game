import React, { useState } from "react";
import Box from "../elementsMineS/Box";
import '../styles/elementsMineS/MinSweeper.scss';
import { Link } from "react-router-dom";
import Bag from "../elementsMineS/Bag.js";
import Modal from "../elementsMineS/Modal";
import iconBag from "../images/Iconbag.png";
import { connect } from 'react-redux';


const MineSweeper = ({ elements, setStoredScore }) => {
  const [gameOver] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [isBagVisible, setIsBagVisible] = useState(false);

  const handleOpenBag = () => {
    setIsBagVisible(true);
  };

  const handleCloseBag = () => {
    setIsBagVisible(false);
  };

 

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <header className="header">
        <h1 className="header__title">Encuentra los materiales en el bosque. Cuidado con los ladrones!</h1>
      </header>

      <main className="mine">
        <article className="mine__table">
          <Box gameOver={gameOver} />
        </article>

        

        <article className="inventory">
          <div className="tab__bag" onClick={isBagVisible ? handleCloseBag : handleOpenBag}>
            <p><img className='tab__bag--img' src={iconBag} alt="" /></p>
          </div>
          <div className="bag">
            {isBagVisible && <Bag elements={elements} type="Mine" />}
          </div>
        </article>
      </main>

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
  elements: state.bag.elements,
});

export default connect(mapStateToProps)(MineSweeper);
