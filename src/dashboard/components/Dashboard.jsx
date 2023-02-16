import IngredientsSearchBar from "./Functional components/IngredientsSearchBar";
import ProductsList from "./Functional components/IngredientsList"
import DrinksList from "./Functional components/DrinksList";

export const Dashboard = () => {
    return (
    <div>
        <IngredientsSearchBar />
        <ProductsList />
        <DrinksList />
    </div>  
    )
}