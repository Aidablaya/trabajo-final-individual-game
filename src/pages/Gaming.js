
import React, { useState } from 'react';

import '../styles/App.scss';
import backgroundGameByN from '../images/fondoBlancoyNegroAnimado1080.gif';
import linkForest from '../images/icon-forest1.png';
import linkWell from '../images/icon-pozo1.png';
import linkCauldron from '../images/icon-cauldron.png';
import linkInfo from '../images/icon-info.png';
import linkPopInfo from '../images/textoinfo.jpeg';
import iconX from '../images/X.png';
//import Popup from 'reactjs-popup';
import '../styles/components/Gaming.scss'
import { Link } from 'react-router-dom';
import Bag from '../elementsMineS/Bag';






function App() {

  const [info, setInfo] = useState(false);
  const storedScore = { yellow: 0, red: 0, blue: 0 };

  const handleClickInfo = () => {
    setInfo (true);
  };

  const handleCloseInfo = () => {
    setInfo(false);
  };

  return (
    <div className="Gaming">
      <div className="box">

        <div className="box__iconForest">
          <div className="box__iconForest--forest">
            <Link to= '/mine-sweeper'>
              <img className="box__iconForest--forest img" src={linkForest} alt="icono bosque" />
            </Link>
          </div>

        <div className="box__iconWell">
          <div className="box__iconWell--well">
            <a href="./#">
              <img className='box__iconWell--well img' src={linkWell} alt="icono pozo" />
            </a>
          </div>
        </div>

        <div className='box__iconCauldron'>
          <div className='box__iconCauldron--cauldron'>
            <a href="./#">
            <img className='box__iconCauldron--cauldron img' src={linkCauldron} alt="icono caldero" />
            </a>
          </div>
        </div>

        <div className="box__iconInfo">
          <div className="box__iconInfo--info" onClick={handleClickInfo}>
            
              <img
                className="box__iconInfo--info img"
                src={linkInfo}
                alt="icono cartel info"
              />
            
          </div>
        </div>

        <div className="box__bag">
        <Bag storedScore={storedScore} />
        </div>

        {info ? (
          <div className="popupInfo">
            <img className="popupInfo__img" src={linkPopInfo} alt="imagen adicional" />
            <img className="popupInfo__close" src={iconX} alt="icono para cerrar info" onClick={handleCloseInfo} />
          </div>
        ) : null}
      


        
      </div>
        <img className='backgroundGame' src={backgroundGameByN} alt="escenario del juego" /> 
      </div>

    </div>
  );
};

export default App;