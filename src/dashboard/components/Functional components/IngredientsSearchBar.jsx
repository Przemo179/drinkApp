/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { addIngredient } from "../../redux/actions/actions";
import data from "../../ingredientsSource/ingredients.json";
import { Container } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.css";
import "../../../css files/Dashboard.css";

let nextArrayId = 0;
// eslint-disable-next-line react/prop-types
const IngredientsSearchBar = ({ ingredients, addIngredient }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [dataIngredient, setDataIngredient] = useState(data);
  const addSingleIngredient = (name) => (selectedValue) => {
    if (
      ingredients.every((ingredient) => {
        return ingredient.label !== selectedValue[0].label;
      })
    ) {
      addIngredient({
        id: nextArrayId++,
        label: selectedValue[0].label,
        unit: selectedValue[0].unit,
        amountOf: 0,
      });
    }
  };
  return (
    <Container className="xd">
      <Typeahead
        className="typehead form-control"
        id="basic-example"
        onChange={addSingleIngredient("test")}
        options={dataIngredient.ingredientsList}
        placeholder="Enter ingredients!"
        selected={selectedItem}
      />
    </Container>
  );
};

export default connect(
  (state) => ({
    ingredients: state.ingredients.ingredientsList,
  }),
  {
    addIngredient: addIngredient,
  }
)(IngredientsSearchBar);
