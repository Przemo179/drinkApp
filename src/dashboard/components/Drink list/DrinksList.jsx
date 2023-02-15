import { useState, useEffect } from 'react';
import data from '../../ingredientsSource/drinks.json';
import {connect} from "react-redux";
import { Table, Container } from 'react-bootstrap';
import { DrinkRow } from './DrinkRow';
import RecipePane from '../Recipe pane/RecipePane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPen } from '@fortawesome/free-solid-svg-icons';
import '../../../css files/DrinkList.css'


const recipe = {
    "name": '',
    'composition': [],
}

const DrinkList = ({ingredients}) => {
    const [dataState, setData] = useState(data);
    const [drinkDetails, setDrinkDetails] = useState({visible: false, fullDrink: recipe});
    const [showFullList, setShowFullList] = useState(false);
    const [choosenFilter, setChoosenFilter] = useState('');

    const showAllRecipes = () => {
        setShowFullList(true);
    }

    const showRecipe = (drink, id) => {
        setDrinkDetails({
            visible: true,
            fullDrink: drink,
            id: id
        });
    }

    const closePane = () => {
        setDrinkDetails({
            visible: false,
        });
    }

    let filteredData = [];
    let missingIngredients = [];

    for (let i = 0; i < dataState.drinksList.length; i++) {
      let currentDrink = dataState.drinksList[i];

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


    const addToFavorite = (id) => {
        dataState.drinksList[id].isFavorite ? dataState.drinksList[id].isFavorite = false : dataState.drinksList[id].isFavorite = true;
        setData({...dataState} )
    }

    const selectedFilter = (e) => {
        if(e == 'alphabetically'){
            setChoosenFilter('alphabetically');
        } else if(e == 'inDescendingOrder') {
            setChoosenFilter('inDescendingOrder');
        } else if(e == 'crescively') {
            setChoosenFilter('crescively');
        } else if(e == 'searchedIngredient') {
            setChoosenFilter('searchedIngredient');
        
        } else if(e == 'favoriteList') {
            setChoosenFilter('favoriteList');
        }
         else {
            setChoosenFilter('');
        }
    }


    if(showFullList) {
        return (
            <Container className='drinkList-active tableOfDrinks'>
                
                { drinkDetails.fullDrink ? (
                <RecipePane
                    visible = {drinkDetails.visible}
                    name = {drinkDetails.fullDrink.name}
                    ingredients = {drinkDetails.fullDrink.composition}
                    photo = {drinkDetails.fullDrink.photo}
                    recipe = {drinkDetails.fullDrink.recipe}
                    closePanel = {closePane}
                    link = {drinkDetails.fullDrink.link}
                    id = {drinkDetails.id}
                    addToFavorite = {addToFavorite}
                    isFavorite = {drinkDetails.fullDrink.isFavorite}
                    />
                ) : ''}
                <div className='settingMenu'>
                    <div className='loading-buttons'>
                        <button className='btn btn-success me-2' onClick={() => showAllRecipes()}>Load recipes</button>
                    </div>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e => selectedFilter(e.target.value)}>
                        <option value="">Choose Filter</option>
                        <option value="alphabetically">Alphabetically
                        </option>
                        <option value="inDescendingOrder">In descending order</option>
                        <option value="crescively">Crescively</option>
                        <option value="searchedIngredient">Search Ingredient</option>
                        <option value="favoriteList">Favorite List</option>
                    </select>
                </div>
                <Table variant='dark' bordered hover>
                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Ratio</th>
                                <th>Available / Not Available Ingredients</th>
                                <th>Fav</th>
                            </tr>
                            </thead>
                            <tbody className='cursor-pointer-active'>
                                {choosenFilter == 'alphabetically' ? (
                                    dataState.drinksList
                                        .sort((a,b) => a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))
                                        .map((drink, id) => {
                                            // console.log('gd', drink.isFavorite);
                                            const filteredDrink = filteredData.find(i => i.name === drink.name);
                                            const missingIng = missingIngredients.find(i => i.name === drink.name);
                                    return(
                                        <DrinkRow
                                            id = {id}
                                            currentDrink = {drink}
                                            currentDrinkLenght = {drink.lenght}
                                            drinkName = {drink.name} 
                                            filteredDrinkLenght = {filteredDrink.ingredients.length}
                                            filteredDrinkIngredients = {filteredDrink.ingredients}
                                            missingIngredients = {missingIng.ingredients}
                                            showRecipe = {showRecipe}
                                            addToFavorite = {addToFavorite}
                                            isFavorite = {drink.isFavorite}
                                        />
                                    )
                                    }) ) : choosenFilter == 'inDescendingOrder' ? (
                                        dataState.drinksList
                                            .sort((a,b) => a.composition.length < b.composition.length ? 1 :((b.composition.length < a.composition.length) ? -1 : 0))
                                            .map((drink, id) => {
                                                const filteredDrink = filteredData.find(i => i.name === drink.name);
                                                const missingIng = missingIngredients.find(i => i.name === drink.name);
                                            return(
                                                <DrinkRow
                                                    id = {id}
                                                    currentDrink = {drink}
                                                    currentDrinkLenght = {drink.lenght}
                                                    drinkName = {drink.name} 
                                                    filteredDrinkLenght = {filteredDrink.ingredients.length}
                                                    filteredDrinkIngredients = {filteredDrink.ingredients}
                                                    missingIngredients = {missingIng.ingredients}
                                                    showRecipe = {showRecipe}
                                                    addToFavorite = {addToFavorite}
                                                    isFavorite = {drink.isFavorite}
                                                />
                                            )
                                        })
                                        ) : choosenFilter == 'crescively' ? (
                                            dataState.drinksList
                                                .sort((a,b) => a.composition.length > b.composition.length ? 1 :((b.composition.length > a.composition.length) ? -1 : 0))
                                                .map((drink, id) => {
                                                    const filteredDrink = filteredData.find(i => i.name === drink.name);
                                                    const missingIng = missingIngredients.find(i => i.name === drink.name);
                                                return(
                                                    <DrinkRow
                                                        id = {id}
                                                        currentDrink = {drink}
                                                        currentDrinkLenght = {drink.lenght}
                                                        drinkName = {drink.name} 
                                                        filteredDrinkLenght = {filteredDrink.ingredients.length}
                                                        filteredDrinkIngredients = {filteredDrink.ingredients}
                                                        missingIngredients = {missingIng.ingredients}
                                                        showRecipe = {showRecipe}
                                                        addToFavorite = {addToFavorite}
                                                        isFavorite = {drink.isFavorite}
                                                    />
                                                )
                                            }) 
                                        ) : choosenFilter == 'searchedIngredient' ? ('da')
                                        : choosenFilter == 'favoriteList' ? (
                                            dataState.drinksList
                                                .filter(i => i.isFavorite == true)
                                                .map((drink, id) => {
                                                    const filteredDrink = filteredData.find(i => i.name === drink.name);
                                                    const missingIng = missingIngredients.find(i => i.name === drink.name);
                                                return(
                                                    <DrinkRow
                                                        id = {id}
                                                        currentDrink = {drink}
                                                        currentDrinkLenght = {drink.lenght}
                                                        drinkName = {drink.name} 
                                                        filteredDrinkLenght = {filteredDrink.ingredients.length}
                                                        filteredDrinkIngredients = {filteredDrink.ingredients}
                                                        missingIngredients = {missingIng.ingredients}
                                                        showRecipe = {showRecipe}
                                                        addToFavorite = {addToFavorite}
                                                        isFavorite = {drink.isFavorite}
                                                    />
                                                )
                                            })
                                        ) :
                                        (        
                                            dataState.drinksList.map((drink, id) => {
                                                const filteredDrink = filteredData.find(i => i.name === drink.name);
                                                const missingIng = missingIngredients.find(i => i.name === drink.name);
                                                return(                              
                                                <DrinkRow
                                                    id = {id}
                                                    currentDrink = {drink}
                                                    currentDrinkLenght = {drink.lenght}
                                                    drinkName = {drink.name} 
                                                    filteredDrinkLenght = {filteredDrink.ingredients.length}
                                                    filteredDrinkIngredients = {filteredDrink.ingredients}
                                                    missingIngredients = {missingIng.ingredients}
                                                    showRecipe = {showRecipe}
                                                    addToFavorite = {addToFavorite}
                                                    isFavorite = {drink.isFavorite}
                                                />
                                                )})
                                        )
                                    }
                            </tbody>
                </Table>
            </Container>
        ) 
    } else {
        return (
            <Container className='margining'>
                <div className='settingMenu'>
                    <div className='loading-buttons'>
                        <button className='btn btn-success me-2' onClick={() => showAllRecipes()}>Load recipes</button>
                    </div>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e => selectedFilter(e.target.value)}>
                        <option value="">Choose Filter</option>
                        <option value="alphabetically">Alphabetically
                        </option>
                        <option value="inDescendingOrder">In descending order</option>
                        <option value="crescively">Crescively</option>
                    </select>
                </div>
            </Container>
        )
    }
}

export default connect(
    (state) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
    }
)(DrinkList);