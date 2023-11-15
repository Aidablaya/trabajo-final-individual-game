
import '../styles/elementsCauldron/PotionMix.scss'


function PotionMix( {elements, handleDragStart}) {
  
  return (
    <div className="drop-board">
      {elements && elements.map((element) => (
        <div
          key={element.id}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, element)}
        >
          {/* Renderiza el contenido de tu componente PotionMix aquí */}
        </div>
      ))}
    </div>
  );
}
export default PotionMix;