import React from 'react';
import './App.css';
import { Dashboard } from "./dashboard/components/Dashboard";
import ProductsList from "./dashboard/components/IngredientsList"



function App() {
  return (
    <div className="App">
      <Dashboard/>
      <ProductsList />
    </div>
  );
}

export default App;
