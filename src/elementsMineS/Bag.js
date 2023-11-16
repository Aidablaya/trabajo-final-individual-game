// Bag.js
import React from "react";
import { connect } from "react-redux";
import { incrementScore } from "../actions";
import BagItem from "./BagItem";
import '../styles/elementsMineS/Bag.scss';

const Bag = ({ elements, type }) => {
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ id }));
  };

  return (
    <ul className={`bag-${type}`}>
      {elements.map((element) => (
        <BagItem
          id={element.id}
          key={element.name}
          imgSrc={element.imgSrc}
          type={type}
          score={element.score}
          onDragStart={(e) => handleDragStart(e, element.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  elements: state.bag.elements,
});

const mapDispatchToProps = (dispatch) => ({
  incrementScore: (id) => dispatch(incrementScore(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bag);

        
        
        
        
        