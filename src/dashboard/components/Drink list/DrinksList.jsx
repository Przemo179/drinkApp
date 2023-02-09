import { useState } from 'react';
import data from '../../ingredientsSource/drinks.json';
import {connect} from "react-redux";
import { Table, Container } from 'react-bootstrap';
import { DrinkRow } from './DrinkRow';
import RecipePane from '../Recipe pane/RecipePane';

export const recipe = {
    "name": '',
    'composition': [],
}

const DrinkList = ({ingredients}) => {
    const [drinkDetails, setDrinkDetails] = useState({visible: false, fullDrink: recipe});

    const showRecipe = (filteredDrinkIngredients, missingIngredients) => {
        setDrinkDetails({
            visible: true,
            recipe: filteredDrinkIngredients,
        });
    }

    const closePane = () => {
        setDrinkDetails({visible: false});
    }

    let filteredData = [];
    let missingIngredients = [];

    for (let i = 0; i < data.drinksList.length; i++) {
      let currentDrink = data.drinksList[i];

      let drinkIngredients = [];
      for (let j = 0; j < currentDrink.composition.length; j++) {
        let currentIng = currentDrink.composition[j];
        let match = ingredients.find(i => i.label === currentIng.ingredient && i.amountOf >= currentIng.volume);
        if (match) {
          drinkIngredients.push(currentIng);
        } else {
            let missingIndex = missingIngredients.findIndex(i => i.name === currentDrink.name);
            if (missingIndex !== -1) {
                missingIngredients[missingIndex].ingredients.push(currentIng);
            } else {
                missingIngredients.push({
                    name: currentDrink.name,
                    ingredients: [currentIng]
                });
            }
        }
      }
      filteredData.push({
        name: currentDrink.name,
        ingredients: drinkIngredients
      });
    }

    if(filteredData[0].name !== undefined) {
    return (
        <Container className='drinkList-active'>
            <RecipePane
                visible = {drinkDetails.visible}
                data = {drinkDetails.recipe}
                closePanel = {closePane}
                />
            <Table variant='dark' bordered hover>
                <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Ratio</th>
                            <th>Available / Not Available Ingredients</th>
                        </tr>
                        </thead>
                        <tbody className='cursor-pointer-active'>
                            {data.drinksList.map((drink, id) => {
                                    const filteredDrink = filteredData.find(i => i.name == drink.name);
                                    const missingIng = missingIngredients.find(i => i.name == drink.name);
                                return(
                                    <DrinkRow
                                        id = {id}
                                        currentDrink = {drink}
                                        currentDrinkLenght = {drink.composition.length}
                                        currentDrinkcomposition = {drink.composition}
                                        drinkName = {drink.name} 
                                        filteredDrink = {filteredDrink}
                                        filteredDrinkLenght = {filteredDrink.ingredients.length}
                                        filteredDrinkIngredients = {filteredDrink.ingredients}
                                        missingIngredients = {missingIng.ingredients}
                                        showRecipe = {showRecipe}
                                    />
                                )
                                })
                            }
                        </tbody>
            </Table>
        </Container>
    ) 
    } else {
        return;
    }
}

export default connect(
    (state) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
    }
)(DrinkList);