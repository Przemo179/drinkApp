import { useState } from 'react';
import data from '../../ingredientsSource/drinks.json';
import {connect} from "react-redux";
import { Table, Container } from 'react-bootstrap';
import { DrinkRow } from './DrinkRow';
import RecipePane from '../Recipe pane/RecipePane';



export const recipe = {
    "name": '',
    'compositions': [],
    'proportions': [],
}

const DrinkList = ({ingredients}) => {
    const [drinkDetails, setDrinkDetails] = useState({visible: false, recipe: recipe});

    const showRecipe = (data) => {
        setDrinkDetails({
            visible: true,
            recipe: data,
        });
    }

    const closePane = () => {
        setDrinkDetails({visible: false});
    }

    const availableIngredientsInDrink = [];
    
    const xd = () => {
        ingredients.forEach(ingredient => {
            data.drinksList.forEach(drink => {
                drink.compositions.forEach(composition => {
                    if(composition===ingredient.label){
                        console.log(composition);
                    };
                })
            })
        })
        console.log(availableIngredientsInDrink);
    }
    if(ingredients[0] !== undefined) {
    return (
        <Container>
            <RecipePane
                visible = {drinkDetails.visible}
                data = {drinkDetails.recipe}
                closePanel = {closePane}
                />
            <Table variant='dark' bordered hover>
                <thead>
                        <tr>
                            <th>#</th>
                            <th>Drineczek</th>
                            <th>składniczki</th>
                            <th>Proporcje</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.drinksList.map((sDrink, id) => (
                                 <tr    key={id}
                                        onClick={() => showRecipe(sDrink)}>
                                    <td>{id + 1}</td>
                                    <td>{sDrink.name}</td>
                                    <td key={id}>
                                        {sDrink.compositions.map(composition => {
                                            return composition + ' ';
                                        })}
                                    </td>
                                    <td>
                                        {sDrink.proportions.map(proportion => {
                                            return proportion + ' ';
                                        })}
                                    </td>
                             </tr>
                            ))}
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