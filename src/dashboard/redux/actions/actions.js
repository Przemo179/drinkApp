import { Ingredient } from "../../types/types";
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../constants/constants";


export const addIngredient = (
    payload) => ({
    type: ADD_INGREDIENT,
    payload
});

export const removeIngredient = (
    payload) => ({
    type: REMOVE_INGREDIENT,
    payload
});

