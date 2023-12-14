
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const incrementScore = (id) => ({
  type: 'INCREMENT_SCORE',
  payload: id,
});

export const updateScore = (id, amount) => ({
  type: 'UPDATE_SCORE',
  payload: { id, amount },
});
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