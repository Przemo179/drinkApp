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
            console.log(state);
            console.log(action.payload.id);
            return {...state,
                        ingredientsList: [...state.ingredientsList.slice(0, action.payload.id),
                        ...state.ingredientsList.slice(action.payload.id + 1)
                        ]
                    }
        case UPDATE_AMOUNTOF:
            console.log(state);
            return {...state,
                ingredientsList: state.ingredientsList.map((ingredient) => {
                    console.log(ingredient.payload);
                    if(ingredient.payload.id === action.payload.id) {
                        return {...ingredient, amountOf: action.payload.amountOf};
                    } else {
                        return ingredient;
                    }
                })
            }
        default:
            return state;
    }
};

export default ingredientsReducer;