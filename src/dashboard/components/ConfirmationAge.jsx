import Under18 from "./Under18";
import { Dashboard } from "./Dashboard";
import React, { useState } from "react";
import '../../css files/ConfirmationAge.css'

function ConfirmAge() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showComponent, setShowComponent] = useState("");
  const [display, setDisplay] = useState("confirmationBlock");

  const handleYes = () => {
    setShowConfirm(false);
    setShowComponent("Dashboard");
    setDisplay("confirmationBlock-displayBlock");
    console.log(display);
  };

  const handleNo = () => {
    setShowConfirm(false);
    setShowComponent("Under18");
  };

  return (
    <div className={display}>
      {showConfirm ? (
        <div className="confirm-window">
          <p className="paragraph-center">Are you 18 years or older?</p>
          <div className="buttons-center">
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </div>
      ) : showComponent === "Dashboard" ? (
        <Dashboard />
      ) : showComponent === "Under18" ? (
        <Under18 />
      ) : (
        <button className="button" onClick={() => setShowConfirm(true)}>Confirm Age</button>
      )}
    </div>
  );
}

export default ConfirmAge;