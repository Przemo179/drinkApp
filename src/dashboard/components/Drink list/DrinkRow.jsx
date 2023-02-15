import '../../../css files/DrinkList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const DrinkRow = ({id, currentDrink, currentDrinkLenght, drinkName, filteredDrinkLenght, filteredDrinkIngredients, missingIngredients, showRecipe, addToFavorite, isFavorite}) => 
{

    return (
    <tr key={id}>
        <td onClick={() => showRecipe(currentDrink, id)}>{id + 1}</td>
        <td onClick={() => showRecipe(currentDrink, id)}>{drinkName}</td>
        <td onClick={() => showRecipe(currentDrink, id)} key={id}>
            {filteredDrinkLenght + ' / ' + currentDrinkLenght}
        </td>
        <td onClick={() => showRecipe(currentDrink, id)}>
            <p className='available-ingredients'>{filteredDrinkIngredients.map(ingredient => ingredient.ingredient + ' ')}</p>
            <p className='notAvailable-ingredients'>{missingIngredients.map(ingredient => ingredient.ingredient + ' ')}</p>
        </td>
        <td>
            <div className='favorite__drink '>
                <span className={isFavorite? 'favorite__drink--True' : 'favorite__drink--False'} title="Add to favorite" onClick={() => addToFavorite(id)}>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            </div>
        </td>
        </tr>
    )
}