import "../styles/elementsMineS/Bag.scss";
import saffron from "../images/Azafran.png";
import blueberries from "../images/Arandanos.png";
import redFruits from "../images/Redfruit.png";
import yellowPotion from "../images/Potionyellow.png";
import bluePotion from "../images/Potionblue.png";
import redPotion from "../images/Potionred .png";

const Bag = ({storedScore}) => {
    return (
        <ul className="infoBag">
            <h5 className="infoBag__title">Bolsa</h5>
            
            <li className="infoBag__li">
                <img src={saffron} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/{storedScore.yellow}</p></li>
            <li className="infoBag__li">
                <img src={blueberries} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/{storedScore.blue}</p></li>
            <li li className="infoBag__li">
                <img src={redFruits} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/{storedScore.red}</p></li>

            <li li className="infoBag__li">
                <img src={yellowPotion} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/</p></li>
            <li li className="infoBag__li">
                <img src={bluePotion} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/</p></li>
            <li li className="infoBag__li">
                <img src={redPotion} alt="" className="infoBag__li--img"/> <p className="infoBag__li--text">/</p></li>
        
          </ul>
    )
}
export default Bag;