import '../../../css files/DrinkList.css'

export const DrinkRow = ({id, currentDrink, currentDrinkLenght, currentDrinkcomposition, drinkName, filteredDrink, filteredDrinkLenght, filteredDrinkIngredients, missingIngredients, showRecipe}) => 
{
    console.log(missingIngredients);
    return (
    <tr key={id}
        onClick={() => showRecipe(filteredDrinkIngredients, missingIngredients)}>
        <td>{id + 1}</td>
        <td>{drinkName}</td>
        <td key={id}>
            {filteredDrinkLenght + ' / ' + currentDrinkLenght}
        </td>
        <td>
            <p className='available-ingredients'>{filteredDrinkIngredients.map(ingredient => ingredient.ingredient + ' ')}</p>
            <p className='notAvailable-ingredients'>{missingIngredients.map(ingredient => ingredient.ingredient + ' ')}</p>
        </td>
        </tr>
    )
}