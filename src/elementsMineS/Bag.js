// Bag.js
import React from "react";
import { connect } from "react-redux";
import { incrementScore } from "../actions";
import BagItem from "./BagItem";
import '../styles/elementsMineS/Bag.scss';

const Bag = ({ elements, type, setStoredScore }) => {


  return (
    <ul className={`bag-${type}`}>
      {elements.map((element) => (
        <BagItem
        key={element.id}
        imgSrc={element.imgSrc}
        type={type}
        score={element.score}
        setScore={setStoredScore}
        element={element}  
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

        
        
        
        
        