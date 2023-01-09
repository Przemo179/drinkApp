// import React, { useState, useEffect} from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import {Ingredient} from "../types/types";
import {addIngredient} from "../redux/actions/actions";
import {connect} from "react-redux";
import { IngredientRow } from './IngredientRow';

const ProductsList = ({ingredients, addIngredient}) => {

    const deleteRow = () =>{
        console.log("123");
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
                                click={deleteRow()}
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
        addIngredient: addIngredient
    }
)(ProductsList);