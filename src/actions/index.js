
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

export const incrementScore = (value) => {
  return {
    type: 'INCREMENT_SCORE',
    payload: value,
  };
};

  export const resetScore = () => {
    return {
      type: 'RESET_SCORE',
    };
  };
  
  export const storeScore = (score) => {
    return {
      type: 'STORE_SCORE',
      payload: score,
    };
  };