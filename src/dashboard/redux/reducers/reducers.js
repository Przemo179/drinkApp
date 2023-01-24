import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_AMOUNTOF } from "../constants/constants";

const initialState = {
    ingredientsList: []
};


// redux element for array of elements
const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {...state, ingredientsList: [...state.ingredientsList, action]};
        case REMOVE_INGREDIENT:
            return {...state,
                        ingredientsList: [...state.ingredientsList.slice(0, action.payload.id),
                        ...state.ingredientsList.slice(action.payload.id + 1)
                        ]
                    }
        case UPDATE_AMOUNTOF:
            return {}
        default:
            return state;
    }
};

export default ingredientsReducer;