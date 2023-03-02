/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import GameBoard from "../../components/Grid/GameBoard";
import "../../styles/Game.css";

const AppGame = () => {
  const [board, setBoard] = useState("container-game");
  return (
    <div className="container">
      <div>
        <h1>Come back when you will turn 18! For now - try win this game!</h1>
        <h2>
          Name of the game is <span className="container-ping">"Lights </span>
          <span className="container-orange">Out"</span>
          <br /> How to win? You have to switch off every single light
          <br /> Good luck and have fun
        </h2>
      </div>
      <div className={board}>
        <GameBoard boardSize={5} percentForLightsOn={0.25} />
      </div>
    </div>
  );
};

export default AppGame;
