import React from "react";
import { useDrag } from "react-dnd";
import { DRAG_START } from "../actions";
//import { useDispatch } from "react-redux";
//import { dropMix } from '../actions';

const BagItem = ({ imgSrc, type, score, element }) => {
 // const dispatch = useDispatch();

 const [, drag] = useDrag({
  type: DRAG_START,
  canDrag: score > 0, // Permitir arrastre solo si el puntaje es mayor que 0
  item: { id: element.id, imgSrc, type, score },
  collect: (monitor) => ({
    isDragging: !!monitor.isDragging(),
  }),
});

console.log("BagItem is rendered and draggable:", score > 0);

  return (
    <div
      ref={drag}
      className={`bag-${type}__li`}
      draggable
    >
      <img src={imgSrc} alt="" className={`bag-${type}__li--img`} />
      <p>/{score}</p>
    </div>
  );
};

export default BagItem;
