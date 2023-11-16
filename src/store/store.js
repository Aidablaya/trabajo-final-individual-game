// store.js
import { createStore, combineReducers } from "redux";
import bagReducer from "../reducers/bagReducer"; 

const rootReducer = combineReducers({
  bag: bagReducer,
  // ... otros reducers si los tienes
});

const store = createStore(rootReducer);

export default store;
