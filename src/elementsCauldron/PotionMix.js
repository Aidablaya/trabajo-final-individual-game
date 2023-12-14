import '../styles/elementsCauldron/PotionMix.scss';
import PotionMixElement from './PotionMixElement'; 
function PotionMix({ elements, handleDragStart }) {
  return (
    <div className="drop-board">
      {elements &&
        elements.map((element) => (
          <PotionMixElement key={element.id} element={element} handleDragStart={handleDragStart} />
        ))}
    </div>
  );
}

export default PotionMix;
