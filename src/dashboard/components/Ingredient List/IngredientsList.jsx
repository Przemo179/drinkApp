import React, { useState} from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { removeIngredient, updateAmountOf } from "../../redux/actions/actions";
import {connect} from "react-redux";
import { IngredientRow } from './IngredientRow';
import '../../../css files/IngredientList.css'

const ProductsList = ({ingredients, removeIngredient, updateAmountOf}) => {

    const [changeValue, setChangeValue] = useState('');

    const removeFromStore = (id) => {
        removeIngredient({
            id : id
        })
    }

    const changeValueOfSingleIngr = (inputValue) => {
        if(inputValue <= 1000) {
            setChangeValue({
                id: changeValue.id,
                amountOf: parseFloat(inputValue),
            });
        }
    }

    const cancelChanging = () => {
        setChangeValue('');
    }

    const updateValueChange = () => {
        if(changeValue.amountOf === undefined)   {
            setChangeValue('');
        } else  {
            updateAmountOf({
                id: changeValue.id,
                amountOf : changeValue.amountOf
            });
        }
        setChangeValue('');
    }

    if(ingredients[0] !== undefined){
        return(
            <Container className='tableOfIng'>
                <Table variant='dark' bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount of</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((ingredient, id) => (
                            <IngredientRow
                                id = {id}
                                ingredient =  {ingredient} 
                                removeFromStore={removeFromStore}
                                setChangeValue = {setChangeValue}
                                changeValue = {changeValue}
                                changeValueOfSingleIngr = {changeValueOfSingleIngr}
                                cancelChanging = {cancelChanging}
                                updateValueChange = {updateValueChange}
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>

        )
    }
    return(
        <h1 className='empty-list-information'>Your ingredient list is empty!</h1>
    )
}

export default connect(
    (state) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
        removeIngredient: removeIngredient,
        updateAmountOf: updateAmountOf,
    }
)(ProductsList);






