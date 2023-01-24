import React, { useState, useEffect} from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { removeIngredient, updateAmountOf } from "../redux/actions/actions";
import {connect} from "react-redux";
import { IngredientRow } from './IngredientRow';
import '../css files/IngredientRows.css';

const ProductsList = ({ingredients, removeIngredient}) => {

    const [changeValue, setChangeValue] = useState('');

    const removeFromStore = (id) => {
        removeIngredient({
            id : id
        })
    }

    // const changeData = () => {
    //     console.log('xd');
    // }

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
                        {ingredients.map((ingredient) => (
                            <IngredientRow 
                                payload =  {ingredient.payload} 
                                removeFromStore={removeFromStore}
                                setChangeValue = {setChangeValue}
                                changeValue = {changeValue}
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






