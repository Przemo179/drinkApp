/* eslint-disable react/no-unescaped-entities */
import GameBoard from "../../components/Grid/GameBoard";
import "../../styles/Game.css";

const AppGame = () => {
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
      <div className="container-game">
        <GameBoard boardSize={5} percentForLightsOn={0.25} />
      </div>
    </div>
  );
};

export default AppGame;
