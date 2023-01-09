// import React, { useState, useEffect} from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { removeIngredient } from "../redux/actions/actions";
import {connect} from "react-redux";
import { IngredientRow } from './IngredientRow';

const ProductsList = ({ingredients, removeIngredient}) => {

    const handleClick = (event, id) => {
        removeIngredient({
            id
        })
    }
    if(ingredients[0] !== undefined){
        return(
            <Container>
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
                                id={ingredient.payload.id}
                                columnIterator={ingredient.payload.id + 1}
                                label={ingredient.payload.label} 
                                unit={ingredient.payload.unit}
                                handleClick={handleClick}
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
        removeIngredient: removeIngredient
    }
)(ProductsList);