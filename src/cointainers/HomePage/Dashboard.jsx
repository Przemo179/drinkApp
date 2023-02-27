/* eslint-disable react/react-in-jsx-scope */
import IngredientsSearchBar from "../../components/Dropdowns/IngredientsSearchBar";
import ProductsList from "../../components/Tables/IngredientsList";
import DrinksList from "../../components/Tables/DrinksList";

export const Dashboard = () => {
  return (
    <div>
      <IngredientsSearchBar />
      <ProductsList />
      <DrinksList />
    </div>
  );
};
