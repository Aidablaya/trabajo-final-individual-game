import React from "react";

const BagItem = ({ imgSrc, type, score }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ imgSrc, type, score }));
  };

  return (
    <div 
      className={`bag-${type}__li`} 
      draggable="true" 
      onDragStart={handleDragStart}>
      <img
        src={imgSrc}
        alt=""
        className={`bag-${type}__li--img`}
      />
      <p>/{score}</p>
    </div>
  );
};

export default BagItem;