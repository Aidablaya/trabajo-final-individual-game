import backgroundCauldron from '../images/Cauldron1080.gif';
import React, { useState } from "react";
import '../styles/components/Cauldron.scss';
import iconBag from "../images/Iconbag.png";
import Bag from "../elementsMineS/Bag.js";
import '../styles/elementsMineS/Bag.scss';
import PotionMix from '../elementsCauldron/PotionMix';
import ReturnToVillageButton from "../elementsGeneral/returnVillageButton.js";
//import { useDrop } from "react-dnd";



function Cauldron ({storedScore, elements, mixList}) {
    const [isBagVisible, setIsBagVisible] = useState(false);
   
    const handleOpenBag = () => {
        setIsBagVisible(true);
      };
    
    const handleCloseBag = () => {
        setIsBagVisible(false); 
      };
    
      const handleDragStart = (e, item) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(item));
    };


    return (
        <>
            <header>
                
                
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
                <article>
                <PotionMix mixList={mixList} elements={elements} handleDragStart={handleDragStart} />
                </article>
            </main>
            <footer className='footerCauldron'>
            
              <ReturnToVillageButton />
        
            </footer>
        </>
    )
}

export default Cauldron