import { useDrag } from 'react-dnd';
import { connect } from 'react-redux';
import { updateScore } from '../actions';

function PotionMixElement({ element, updateScore}) {
  const [, drag] = useDrag({
    type: 'ELEMENT', // Puedes cambiar 'ELEMENT' por un tipo específico para tu aplicación
    item: { id: element.id },
  });

  const handleDragStart = (e) => {
    // Resta 1 al puntaje al iniciar el arrastre
    updateScore(element.id, -1);
  };

  return (
    <div
      ref={drag}
      draggable
      onDragStart={handleDragStart}
    >
      <img src={element.imgSrc} alt={element.name} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  incrementScore: (id) => dispatch(updateScore(id)),
});


export default connect(null, mapDispatchToProps)(PotionMixElement);