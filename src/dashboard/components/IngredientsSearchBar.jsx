import React, { useState, useEffect} from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { addIngredient } from "../redux/actions/actions";
import data from '../ingredientsSource/ingredients.json';
import '../../css files/Dashboard.css'
import { Container } from 'react-bootstrap';

let nextArrayId = 0;
const tempArray = [];

const IngredientsSearchBar = ({ingredients, addIngredient}) => {
    const [selectedItem, setSelectedItem] = useState([]); // selectedItem is used for "cleaning input"
    const addSingleIngredient = (name) => (selectedValue) =>{
        if (ingredients.every(ingredient => {
            return ingredient.label !== selectedValue[0].label;
            })
        ) {
            addIngredient({
                id: nextArrayId++,
                label: selectedValue[0].label,
                unit: selectedValue[0].unit,
                amountOf: 0
            })
        };
    }

    return <>
        <Container>
            <Typeahead 
                className='typehead form-control'
                id="basic-example"
                onChange={addSingleIngredient('test')}
                options={data.ingredientsList}
                placeholder="Enter ingredients!"
                selected={selectedItem}
            />
        </Container>
        </>;
};



export default connect(
    (state) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
        addIngredient: addIngredient
    }
)(IngredientsSearchBar);