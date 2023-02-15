# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Drink helper is application dedicated to help user with creating drinks. After run app first what user see is age checking, after failing test user will be moved to page for <18 people. When customer pass test, page shows correct view.
  First component has Input, this input is <Typehead /> from bootstrap. I used it beacuse user now can't type wrong ingredient name then it's in .json file with ingredient list.
  After add ingredient, it store in redux object. And displaying below in list - list is from bootstrap <Table />. Ingredient list is another component where customer has current information about available ingredient with unit and volume. In this component user can change volume and remove ingredients.

After prepared list of ingredient user can load drinks list with every drink - list is from bootstrap <Table />, there user has posibilty to change filter for his preferences - filter window is from bootstrap <select /> 
. Here customer can add drink to favorite and filter by it. After clicking in choosen drink, page will show recipe. Recipe pane is created with library <SlidingPane />

icons used I took from Fontawesome and React-icons.
