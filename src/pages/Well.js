import React from 'react';
import backgroundWell from '../images/well1080.gif';
import { connect } from 'react-redux';
import '../styles/components/Well.scss';
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import { DRAG_START } from '../actions';

function Well({ element }) {
  const navigate = useNavigate();

  const isColored = element && element.isColored;
  const filterClass = isColored ? 'colored' : 'bw';
  const rotatingClass = isColored ? 'rotating' : '';

  const [, drag] = useDrag({
    type: DRAG_START,
    item: { ...element },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log('Item dropped!');
        navigate('/EndPage');
      }
    },
  });

  const [, drop] = useDrop({
    accept: DRAG_START,
    drop: () => {
      console.log('Item dropped!');
      //handleDrop();
    },
  });

  return (
    <>
      <header></header>

      <main>
        <img className="backgroundWell" src={backgroundWell} alt="escenario del juego" />
        <section className='animationPotion'>
          {element ? (
            <img
              className={`animationPotion__potion ${filterClass} ${rotatingClass}`}
              src={element.imgSrc}
              alt={element.id}
              ref={drag} // Añade el ref aquí para habilitar el arrastre
            />
          ) : (
            <p>Elemento no encontrado</p>
          )}
        </section>
        <section>
          <div className='boxDropUltiPotion' ref={drop}></div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

const mapStateToProps = (state) => ({
  element: state.bag.elements ? state.bag.elements.find((element) => element.id === 10) : null,
});

export default connect(mapStateToProps)(Well);
