import React from 'react';
import './App.css';
import { Dashboard } from "./dashboard/components/Dashboard";
import ConfirmAge from './dashboard/components/Functional components/ConfirmationAge';

function App() {
  return (
    <div className="App">
      <ConfirmAge/>
    </div>
  );
}

export default App;
