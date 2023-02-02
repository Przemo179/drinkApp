import IngredientsSearchBar from "./IngredientsSearchBar";
import ProductsList from "./Ingredient List/IngredientsList"
import DrinksList from "./Drink list/DrinksList";

export const Dashboard = () => {
    return (
    <div>
        <IngredientsSearchBar />
        <ProductsList />
        <DrinksList />
    </div>  
    )
}