import React, { useState, useEffect} from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { addIngredient } from "../redux/actions/actions";
import data from '../ingredientsSource/ingredients.json';


let nextArrayId = 0;
const tempArray = [];

const IngredientsSearchBar = ({ingredients, addIngredient}) => {
    const [selectedItem, setSelectedItem] = useState([]); // selectedItem is used for "cleaning input"

    const addSingleIngredient = (name) => (selectedValue) =>{

        if(tempArray.indexOf(selectedValue[0].label) === -1)    {
            tempArray.push(selectedValue[0].label)
            addIngredient({
                id: nextArrayId++,
                label: selectedValue[0].label,
                unit: selectedValue[0].unit,
            });
            tempArray.push(selectedValue[0].label)
        }
    }

    return <>
            <Typeahead
                id="basic-example"
                onChange={addSingleIngredient('test')}
                options={data.ingredientsList}
                placeholder="Enter ingredients!"
                selected={selectedItem}
            />
        </>;
};



export default connect(
    (state) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
        addIngredient: addIngredient
    }
)(IngredientsSearchBar);