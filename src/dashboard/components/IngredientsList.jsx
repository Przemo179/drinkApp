import React, { useState, useEffect} from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { removeIngredient, updateAmountOf } from "../redux/actions/actions";
import {connect} from "react-redux";
import { IngredientRow } from './IngredientRow';
import '../../css files/IngredientRows.css'

const ProductsList = ({ingredients, removeIngredient, updateAmountOf}) => {

    const [changeValue, setChangeValue] = useState('');

    const removeFromStore = (id) => {
        removeIngredient({
            id : id
        })
    }

    const changeValueOfSingleIngr = (inputValue) => {
        setChangeValue({
            id: changeValue.id,
            amountOf: parseFloat(inputValue),
        });
    }

    const cancelChanging = () => {
        setChangeValue('');
    }

    const updateValueChange = () => {
        if(changeValue.amountOf == undefined)   {
            updateAmountOf({
                id: changeValue.id,
                amountOf : 0
            });
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount of</th>
                            <th></th>
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
        <a>Your ingredient list is empty!</a>
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






