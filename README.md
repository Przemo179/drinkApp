In the project directory, you can run:
# npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Drink helper is application dedicated to help user with creating drinks. After run app first what user see is age checking, after failing test user will be moved to page for under 18 people. When customer pass test, page shows correct view.

First component has Input, this input is "Typehead" from bootstrap. I used it beacuse user now can't type wrong ingredient name then it's in .json file with ingredient list.

After add ingredient, it store in redux object. And displaying below in list - list is from bootstrap "Table". Ingredient list is another component where customer has current information about available ingredient with unit and volume. In this component user can change volume and remove ingredients.

After prepared list of ingredient user can load drinks list with every drink - list is from bootstrap "Table" there user has posibilty to change filter for his preferences - filter window is from bootstrap "select" . Here customer can add drink to favorite and filter by it. After clicking in choosen drink, page will show recipe. Recipe pane is created with library "SlidingPane"

Icons used I took from Fontawesome and React-icons.

# Folder Layout:
  src
    |
    --cointainers
                  |
                  --DrinkInformation
                                    |
                                    --DrinkRow.jsx--
                                    --RecipePane.jsx--
                  |
                  --HomePage
                            |
                            --ConfirmationAge.jsx--
                            --Dashboard.jsx--
                  |
                  --IngredientsList
                                  |
                                  --IngredientRow.jsx--
                                  --UpdateIngredientVolume.jsx--
    |
    --components
              |
              --Dropdowns
                        |
                        --IngredientsSearchBar.jsx--
              |
              --Tables
                      |
                      --DrinkList.jsx--
                      IngredientsList.jsx--
              |
              --Under18.jsx-- (this page is still in progress, I'm thinking what can I put for "younger audience")
    |
    --images
            |
            --back_3.png--
    |
    --store
          |
          --ingredientsSource
                            |
                            --drinks.json--
                            --ingredients.json--
          |
          --redux
                |
                --actions
                        |
                        --actions.js--
                --constants
                          |
                          --constants.js--
                --reducers
                          |
                          --reducers.js--
          |
          --types
                |
                --types.js--
          |
          --rootReducer.js--
          --store.js--
    |
    --styles
            |
            --ConfirmationAge.css--
            --Dashboard.css--
            --DrinkList.css--
            --IngredientList.css-
            --RecipePane.css--
