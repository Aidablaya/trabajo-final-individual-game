

import saffron from "../images/Azafran.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import yellowPotion from "../images/Potionyellow.png";
import bluePotion from "../images/Potionblue.png";
import redPotion from "../images/Potionred .png";
import greenPotion from "../images/Potiongreen.png";
import orangePotion from "../images/Potionorange.png";
import purplePotion from "../images/Potionpurple.png";
import multicolorPotion from "../images/Potionmulticolor.png";
import '../styles/elementsMineS/Bag.scss'; 

const Bag = ({storedScore, type}) => {
    
    

    return (
        
        <ul ul className={`bag-${type}`} >
            
            
            <li className={`bag-${type}__li`}>
                <img src={saffron} alt="" className={`bag-${type}__li--img`}/> <p>/{storedScore.yellow}</p></li>
            <li className={`bag-${type}__li`}>
                <img src={blueberries} alt="" className={`bag-${type}__li--img`}/> <p>/{storedScore.blue}</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={redFruits} alt="" className={`bag-${type}__li--img`}/> <p>/{storedScore.red}</p></li>

            <li li className={`bag-${type}__li`}>
                <img src={yellowPotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={bluePotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={redPotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={greenPotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={orangePotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={purplePotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
            <li li className={`bag-${type}__li`}>
                <img src={multicolorPotion} alt="" className={`bag-${type}__li--img`}/> <p>/</p></li>
          </ul>
    )
}
export default Bag;