import { Ingredient } from "../../types/types";
import {ADD_INGREDIENT} from "../constants/constants";

export const addIngredient = (
    payload) => ({
    type: ADD_INGREDIENT,
    payload
});