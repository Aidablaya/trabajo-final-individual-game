
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const DRAG_START = 'DRAG_START';
export const DROP_MIX = 'DROP_MIX';
export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';
export const INCREMENT_SCORE_MIX = 'INCREMENT_SCORE_MIX';
export const RESET_MIX_LIST = 'RESET_MIX_LIST';
export const MIX_ALL_POTIONS = 'MIX_ALL_POTIONS';

export const incrementScore = (id) => ({
  type: INCREMENT_SCORE,
  payload: id,
});

export const updateScore = (id, amount) => ({
  type: UPDATE_SCORE,
  payload: { id, amount },
});

export const dragStart = (item) => ({
  type: DRAG_START,
  payload: item,
});
export const dropMix = (payload) => {
  console.log('Dropping potion:', payload); 
  return {
    type: DROP_MIX,
    payload,
  };
};
export const removeFromBag = (id) => ({
  type: REMOVE_FROM_BAG,
  payload: id,
});
export const incrementScoreMix = (targetId) => ({
  type: INCREMENT_SCORE_MIX,
  payload: targetId,
});
export const resetMixList = () => ({
  type: RESET_MIX_LIST,
  
});
export const mixAllPotions = () => ({
  type: MIX_ALL_POTIONS,
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