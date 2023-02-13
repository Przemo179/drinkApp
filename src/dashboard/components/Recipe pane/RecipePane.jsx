import * as React from 'react';
import { recipe } from '../Drink list/DrinksList';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../../../css files/RecipePane.css'


const RecipePane = ({visible, drinkData, name, ingredients, photo, recipe, closePanel, link}) => {
    console.log(ingredients);
    return (
        <SlidingPane
            className='sliding-pane wrapper-recipePane'
            isOpen={visible}
            title={name ? name : 'did not catch title :('}
            width={window.innerWidth < 600 ? "100%" : "500px"}
            onRequestClose={closePanel}
            hideHeader
        >
            <div className='recipeDetails'>
                <div className='recipeDetails__photo'> 
                    <img src={photo ? photo : 'there is not photo'} alt="kurwa"/>
                </div>
                <div>
                    <div>
                        <div className="recipeDetails__ingredients">
                            <a>Required ingredients:</a> <br/>
                            {ingredients ? ingredients.map((ingredient, id) => {
                                return(
                                    <>
                                    <p>{(id+1) + '. ' + ingredient.ingredient + ' - ' + (ingredient.volume > '1' ? (ingredient.volume + ingredient.unit) : 'At Choice')}</p>
                                    <br/>
                                    </>
                                )
                            }) : ""} 
                        </div>
                        <div className='recipeDetails__order'>
                            <a>Recipe</a><br/>
                            {recipe ? recipe.map((step, id) => {
                                return(
                                    <div className='recipeDetails__order__steps'>
                                        <p>{"Step " + (id+1) + '. '}</p>
                                        <span />
                                        <p>{step}</p>
                                        <br />
                                    </div>
                                )
                            }) : ''}
                        </div>
                        {/* <div className='recipeDetails__link'>
                            <a href={link}>Link to youtube video</a>
                        </div> */}
                    </div>
                </div>
            </div>

        </SlidingPane>
    )
}

export default RecipePane;