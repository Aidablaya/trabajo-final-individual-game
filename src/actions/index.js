
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

export const incrementScore = (id) => {
  return {
    type: 'INCREMENT_SCORE',
    payload: id,
  };
};
/*
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
  };*/