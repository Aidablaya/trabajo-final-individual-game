import backgroundCauldron from '../images/Cauldron1080.gif';
import React, { useState } from "react";
import '../styles/components/Cauldron.scss';
import iconBag from "../images/Iconbag.png";
import Bag from "../elementsMineS/Bag.js";
import '../styles/elementsMineS/Bag.scss';
//import { useDrop } from "react-dnd";
import PotionMix from '../elementsCauldron/PotionMix';


function Cauldron ({storedScore,}) {
    const [isBagVisible, setIsBagVisible] = useState(false);
   // const [draggedItem, setDraggedItem] = useState(null);
    //const [mixPotionsVisible, setMixPotionsVisible] = useState(false);

    const handleOpenBag = () => {
        setIsBagVisible(true);
      };
    
      const handleCloseBag = () => {
        setIsBagVisible(false); 
      };

/*
      const handleDropOnCauldron = (event) => {
        event.preventDefault(); 
        if (draggedItem) {
            console.log('handleDropOnCauldron executed');
          // Realiza alguna acción con el elemento arrastrado
          // Por ejemplo, muestra la ventana emergente aquí
          setMixPotionsVisible(true);
        }
      };
      const handleDropItem = (item) => {
        setDraggedItem(item);
        console.log('handleDropItem executed'); // Agrega esto
        setMixPotionsVisible(true);
      };
    */
    return (
        <>
            <header>
                <h1>Hola</h1>
            </header>
            <main className='mainCauldron'>
                <article 
                
                >
    
                    <img className='backgroundCauldron' src={backgroundCauldron} alt="" />
                </article>
                <article className='inventoryCauldron'>
                    <div className='tab__bag'  onClick={isBagVisible ? handleCloseBag : handleOpenBag}>
                        <p><img  src={iconBag} alt="" /></p>
                    </div>
                    <div className="bagCauldron">
            {isBagVisible && (
              <Bag
                storedScore={storedScore}
                type="Mine"
                
              />
            )}
          </div>
                </article>
            </main>
            <footer>
            <PotionMix/>
        
            </footer>
        </>
    )
}

export default Cauldron