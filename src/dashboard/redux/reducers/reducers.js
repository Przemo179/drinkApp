import { ADD_INGREDIENT } from "../constants/constants";
import {Ingredient} from "../../types/types";
import { Reducer} from "redux";

// const IngredientsState = {
//     ingredientsList: Ingredient
// }
const initialState = {
    ingredientsList: []
};


// redux element for array of elements
const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {...state, ingredientsList: [...state.ingredientsList, action]};
        default:
            return state;
    }
};

export default ingredientsReducer;