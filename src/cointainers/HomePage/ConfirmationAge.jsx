import Under18 from "../../components/Under18";
import { Dashboard } from "./Dashboard";
import React, { useState } from "react";
import "../../styles/ConfirmationAge.css";

function ConfirmAge() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showComponent, setShowComponent] = useState("");
  const [display, setDisplay] = useState("confirmationBlock");

  const handleYes = () => {
    setShowConfirm(false);
    setShowComponent("Dashboard");
    setDisplay("confirmationBlock-displayBlock");
  };

  const handleNo = () => {
    setShowConfirm(false);
    setShowComponent("Under18");
    setDisplay("confirmationBlock-under18");
  };

  return (
    <div className={display}>
      {showConfirm ? (
        <div className="confirm-window">
          <p className="paragraph-center">Are you 18 years or older?</p>
          <div className="buttons-center">
            <button className="btn btn-success" onClick={handleYes}>
              Yes
            </button>
            <button className="btn btn-danger" onClick={handleNo}>
              No
            </button>
          </div>
        </div>
      ) : showComponent === "Dashboard" ? (
        <Dashboard />
      ) : showComponent === "Under18" ? (
        <Under18 />
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => setShowConfirm(true)}
        >
          Click here to confirm your age
        </button>
      )}
    </div>
  );
}

export default ConfirmAge;
