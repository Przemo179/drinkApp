import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";

// createStore umożliwia stworzenie store
// combineReducers - umożliwia na umieszczenie kilku reducerów w jednej funkcji
// store element for one ingredient with state and action

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
