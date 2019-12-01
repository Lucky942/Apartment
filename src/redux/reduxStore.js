import { combineReducers, createStore } from "redux";
import peopleReducer from "./reducers/peopleReducer";

const reducers = combineReducers({
  peopleReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
