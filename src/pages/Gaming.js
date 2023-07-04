
import React, { useState } from 'react';

import '../styles/App.scss';
import backgroundGameByN from '../images/fondoBlancoyNegroAnimado1080.gif';
import linkForest from '../images/icon-forest1.png';
import linkWell from '../images/icon-pozo1.png';
import linkCauldron from '../images/icon-cauldron.png';
import linkInfo from '../images/icon-info.png';
import linkPopInfo from '../images/textoinfo.jpeg';
import iconX from '../images/X.png';
import Popup from 'reactjs-popup';

function App() {

  const [info, setInfo] = useState(null);

  const handleClickInfo = (ev) => {
    setInfo (linkPopInfo);
  };

  return (
    <div className="Gaming">
      <div className="box">

        <div className="box__iconForest">
          <div className="box__iconForest--forest">
            <a href="./#">
              <img className="box__iconForest--forest img" src={linkForest} alt="icono bosque" />
            </a>
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

        <div className='box__iconInfo'>
          <div className='box__iconInfo--info'>
            <a href="./#">
            <img className='box__iconInfo--info img' src={linkInfo} alt="icono cartel info" onClick={handleClickInfo} />
            </a>
          </div>
        </div>
        
      </div>
        <img className='backgroundGame' src={backgroundGameByN} alt="escenario del juego" /> 
      </div>

      

      {/*{info && (
        <div className="popupInfo">
          <a className='popupInfo__close' handleClickInfo={handleClickInfo}>
            <img className='popupInfo__close--img' src={iconX} alt="cerrar" />
          </a>
          <img className='popupInfo__img' src={info} alt="Información adicional" />
        </div>
      )}*/}
    </div>
  );
};

export default App;