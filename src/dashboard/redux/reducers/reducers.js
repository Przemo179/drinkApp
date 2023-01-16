import { ADD_INGREDIENT } from "../constants/constants";
import { REMOVE_INGREDIENT } from "../constants/constants";
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
        case REMOVE_INGREDIENT:
            // action.payload.id to wyciągnięcie id odpowiedniego. Raczej ten zapis powinien działać,
            console.log(action.payload.id);
            console.log(state.ingredientsList);
            return state.ingredientsList.slice(0, action.payload.id)
                        .concat(state.ingredientsList.slice(action.payload.id + 1));
        default:
            return state;
    }
};

export default ingredientsReducer;