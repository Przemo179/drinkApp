/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import data from "../../ingredientsSource/drinks.json";
import ingredientData from "../../ingredientsSource/ingredients.json";
import { connect } from "react-redux";
import { Table, Container } from "react-bootstrap";
import { DrinkRow } from "../Representative components/DrinkRow";
import RecipePane from "../Representative components/RecipePane";
import "../../../css files/DrinkList.css";

const DrinkList = ({ ingredients }) => {
  const [dataState, setData] = useState(data);
  const [drinkDetails, setDrinkDetails] = useState({
    visible: false,
    fullDrink: {
      name: "",
      composition: [],
    },
  });
  const [showFullList, setShowFullList] = useState(false);
  const [choosenFilter, setChoosenFilter] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("Vodka");
  const [favoriteDrinks, setFavoriteDrinks] = useState([]);

  const showAllRecipes = () => {
    setShowFullList(true);
  };

  const showRecipe = (drink, id) => {
    setDrinkDetails({
      visible: true,
      fullDrink: drink,
      id: id,
    });
  };

  const closeRecipePane = () => {
    setDrinkDetails({
      visible: false,
    });
  };

  let filteredData = [];
  let missingIngredients = [];

  for (let i = 0; i < dataState.drinksList.length; i++) {
    let currentDrink = dataState.drinksList[i];
    let drinkIngredients = [];
    for (let j = 0; j < currentDrink.composition.length; j++) {
      let currentIng = currentDrink.composition[j];
      let match = ingredients.find(
        (drink) =>
          drink.label === currentIng.ingredient &&
          drink.amountOf >= currentIng.volume
      );
      if (match) {
        drinkIngredients.push(currentIng);
      } else {
        let missingIndex = missingIngredients.findIndex(
          (i) => i.name === currentDrink.name
        );
        if (missingIndex !== -1) {
          missingIngredients[missingIndex].ingredients.push(currentIng);
        } else {
          missingIngredients.push({
            name: currentDrink.name,
            ingredients: [currentIng],
          });
        }
      }
    }
    filteredData.push({
      name: currentDrink.name,
      ingredients: drinkIngredients,
    });
  }
  const addToFavorite = (drinkName) => {
    favoriteDrinks.includes(drinkName)
      ? setFavoriteDrinks([
          ...favoriteDrinks.filter((name) => name !== drinkName),
        ])
      : setFavoriteDrinks([...favoriteDrinks, drinkName]);
  };

  const selectFilter = (e) => {
    if (e === "alphabetically") {
      setData(data);
      setChoosenFilter("alphabetically");
    } else if (e === "inDescendingOrder") {
      setData(data);
      setChoosenFilter("inDescendingOrder");
    } else if (e === "crescively") {
      setData(data);
      setChoosenFilter("crescively");
    } else if (e === "searchedIngredient") {
      setChoosenFilter("searchedIngredient");
    } else if (e === "favoriteList") {
      setData(data);
      setChoosenFilter("favoriteList");
    } else {
      setData(data);
      setChoosenFilter("");
    }
  };

  const arrList = [];
  for (let i = 0; i < dataState.drinksList.length; i++) {
    let currentDrink = dataState.drinksList[i];
    if (
      currentDrink.composition.some(
        (drink) => drink.ingredient === selectedIngredient
      )
    ) {
      arrList.push(currentDrink);
    }
  }
  const selectIngredient = (e) => {
    setSelectedIngredient(e);
  };
  if (showFullList) {
    return (
      <Container className="drinkList-active tableOfDrinks">
        {drinkDetails.fullDrink ? (
          <RecipePane
            visible={drinkDetails.visible}
            name={drinkDetails.fullDrink.name}
            ingredients={drinkDetails.fullDrink.composition}
            photo={drinkDetails.fullDrink.photo}
            recipe={drinkDetails.fullDrink.recipe}
            closePanel={closeRecipePane}
            link={drinkDetails.fullDrink.link}
            id={drinkDetails.id}
            addToFavorite={addToFavorite}
            isFavorite={favoriteDrinks.includes(drinkDetails.fullDrink.name)}
          />
        ) : (
          ""
        )}
        <div className="settingMenu">
          <div className="loading-buttons">
            <button
              className="btn btn-success me-2"
              onClick={() => showAllRecipes()}
            >
              Load recipes
            </button>
          </div>
          <div className="select__options-filter">
            {choosenFilter === "searchedIngredient" ? (
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={(e) => selectIngredient(e.target.value)}
              >
                {ingredientData.ingredientsList.map((iName) => {
                  return <option value={iName.label}>{iName.label}</option>;
                })}
              </select>
            ) : (
              ""
            )}
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(dropboxValue) =>
                selectFilter(dropboxValue.target.value)
              }
            >
              <option value="">Choose Filter</option>
              <option value="alphabetically">Alphabetically</option>
              <option value="inDescendingOrder">In descending order</option>
              <option value="crescively">Crescively</option>
              <option value="searchedIngredient">Search Ingredient</option>
              <option value="favoriteList">Favorite List</option>
            </select>
          </div>
        </div>
        <Table variant="dark" bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Ratio</th>
              <th>Available / Not Available Ingredients</th>
              <th>Fav</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer-active">
            {choosenFilter === "alphabetically"
              ? dataState.drinksList
                  .sort((a, b) =>
                    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                  )
                  .map((drink, id) => {
                    const filteredDrink = filteredData.find(
                      (filteredDrink) => filteredDrink.name === drink.name
                    );
                    const missingIng = missingIngredients.find(
                      (missingDrink) => missingDrink.name === drink.name
                    );
                    return (
                      <DrinkRow
                        key={id}
                        id={id}
                        currentDrink={drink}
                        currentDrinkLenght={drink.lenght}
                        drinkName={drink.name}
                        filteredDrinkLenght={filteredDrink.ingredients.length}
                        filteredDrinkIngredients={filteredDrink.ingredients}
                        missingIngredients={missingIng.ingredients}
                        showRecipe={showRecipe}
                        addToFavorite={addToFavorite}
                        isFavorite={favoriteDrinks.includes(drink.name)}
                      />
                    );
                  })
              : choosenFilter === "inDescendingOrder"
              ? dataState.drinksList
                  .sort((a, b) =>
                    a.composition.length < b.composition.length
                      ? 1
                      : b.composition.length < a.composition.length
                      ? -1
                      : 0
                  )
                  .map((drink, id) => {
                    const filteredDrink = filteredData.find(
                      (filteredDrink) => filteredDrink.name === drink.name
                    );
                    const missingIng = missingIngredients.find(
                      (missingDrink) => missingDrink.name === drink.name
                    );
                    return (
                      <DrinkRow
                        id={id}
                        currentDrink={drink}
                        currentDrinkLenght={drink.lenght}
                        drinkName={drink.name}
                        filteredDrinkLenght={filteredDrink.ingredients.length}
                        filteredDrinkIngredients={filteredDrink.ingredients}
                        missingIngredients={missingIng.ingredients}
                        showRecipe={showRecipe}
                        addToFavorite={addToFavorite}
                        isFavorite={favoriteDrinks.includes(drink.name)}
                      />
                    );
                  })
              : choosenFilter === "crescively"
              ? dataState.drinksList
                  .sort((a, b) =>
                    a.composition.length > b.composition.length
                      ? 1
                      : b.composition.length > a.composition.length
                      ? -1
                      : 0
                  )
                  .map((drink, id) => {
                    const filteredDrink = filteredData.find(
                      (filteredDrink) => filteredDrink.name === drink.name
                    );
                    const missingIng = missingIngredients.find(
                      (missingDrink) => missingDrink.name === drink.name
                    );
                    return (
                      <DrinkRow
                        id={id}
                        currentDrink={drink}
                        currentDrinkLenght={drink.lenght}
                        drinkName={drink.name}
                        filteredDrinkLenght={filteredDrink.ingredients.length}
                        filteredDrinkIngredients={filteredDrink.ingredients}
                        missingIngredients={missingIng.ingredients}
                        showRecipe={showRecipe}
                        addToFavorite={addToFavorite}
                        isFavorite={favoriteDrinks.includes(drink.name)}
                      />
                    );
                  })
              : choosenFilter === "searchedIngredient"
              ? arrList.map((drink, id) => {
                  const filteredDrink = filteredData.find(
                    (filteredDrink) => filteredDrink.name === drink.name
                  );
                  const missingIng = missingIngredients.find(
                    (missingDrink) => missingDrink.name === drink.name
                  );
                  return (
                    <DrinkRow
                      id={id}
                      currentDrink={drink}
                      currentDrinkLenght={drink.lenght}
                      drinkName={drink.name}
                      filteredDrinkLenght={filteredDrink.ingredients.length}
                      filteredDrinkIngredients={filteredDrink.ingredients}
                      missingIngredients={missingIng.ingredients}
                      showRecipe={showRecipe}
                      addToFavorite={addToFavorite}
                      isFavorite={favoriteDrinks.includes(drink.name)}
                    />
                  );
                })
              : choosenFilter === "favoriteList"
              ? dataState.drinksList
                  .filter((drink) => favoriteDrinks.includes(drink.name))
                  .map((drink, id) => {
                    const filteredDrink = filteredData.find(
                      (filteredDrink) => filteredDrink.name === drink.name
                    );
                    const missingIng = missingIngredients.find(
                      (missingDrink) => missingDrink.name === drink.name
                    );
                    return (
                      <DrinkRow
                        id={id}
                        currentDrink={drink}
                        currentDrinkLenght={drink.lenght}
                        drinkName={drink.name}
                        filteredDrinkLenght={filteredDrink.ingredients.length}
                        filteredDrinkIngredients={filteredDrink.ingredients}
                        missingIngredients={missingIng.ingredients}
                        showRecipe={showRecipe}
                        addToFavorite={addToFavorite}
                        isFavorite={favoriteDrinks.includes(drink.name)}
                      />
                    );
                  })
              : dataState.drinksList.map((drink, id) => {
                  const filteredDrink = filteredData.find(
                    (i) => i.name === drink.name
                  );
                  const missingIng = missingIngredients.find(
                    (missingDrink) => missingDrink.name === drink.name
                  );
                  return (
                    <DrinkRow
                      id={id}
                      currentDrink={drink}
                      currentDrinkLenght={drink.lenght}
                      drinkName={drink.name}
                      filteredDrinkLenght={filteredDrink.ingredients.length}
                      filteredDrinkIngredients={filteredDrink.ingredients}
                      missingIngredients={missingIng.ingredients}
                      showRecipe={showRecipe}
                      addToFavorite={addToFavorite}
                      isFavorite={drink.isFavorite}
                    />
                  );
                })}
          </tbody>
        </Table>
      </Container>
    );
  } else {
    return (
      <Container className="margining">
        <div className="settingMenu">
          <div className="loading-buttons">
            <button
              className="btn btn-success me-2"
              onClick={() => showAllRecipes()}
            >
              Load recipes
            </button>
          </div>
          <div className="select__options-filter">
            {choosenFilter === "searchedIngredient" ? (
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={(e) => selectIngredient(e.target.value)}
              >
                {ingredientData.ingredientsList.map((iName) => {
                  return <option value={iName.label}>{iName.label}</option>;
                })}
              </select>
            ) : (
              ""
            )}
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => selectFilter(e.target.value)}
            >
              <option value="">Choose Filter</option>
              <option value="alphabetically">Alphabetically</option>
              <option value="inDescendingOrder">In descending order</option>
              <option value="crescively">Crescively</option>
              <option value="searchedIngredient">Search Ingredient</option>
              <option value="favoriteList">Favorite List</option>
            </select>
          </div>
        </div>
      </Container>
    );
  }
};

export default connect(
  (state) => ({
    ingredients: state.ingredients.ingredientsList,
  }),
  {}
)(DrinkList);
