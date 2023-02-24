import { combineReducers } from "redux";
import ingredientsReducer from "../dashboard/redux/reducers/reducers";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});

export const ApplicationState = rootReducer;
