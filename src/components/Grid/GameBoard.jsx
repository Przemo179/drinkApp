/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../../styles/Game.css";
import { Cell } from "../../cointainers/GameView/Cell";
import { Container } from "react-bootstrap";
import "../../styles/Game.css";

const GameBoard = (props) => {
  const { boardSize, percentForLightsOn } = props;

  const randomLight = () => {
    return Math.random() < percentForLightsOn;
  };

  const gameGrid = Array.from({ length: boardSize }).map(
    (row) =>
      (row = Array.from({ length: boardSize }).map(
        (cell) => (cell = randomLight())
      ))
  );

  const [board, setBoard] = useState({ grid: gameGrid });

  const toggleLight = (cellIndex) => {
    let [cellRowIndex, cellColIndex] = cellIndex.split("");
    cellRowIndex = parseInt(cellRowIndex);
    cellColIndex = parseInt(cellColIndex);

    setBoard((currSt) => ({
      ...currSt,
      grid: currSt.grid.map((row, rowIndex) =>
        rowIndex === cellRowIndex
          ? row.map((col, colIndex) => (colIndex === cellColIndex ? !col : col))
          : row
      ),
    }));
  };

  const updateGameGrid = (cellIndex) => {
    let [cellRowIndex, cellColIndex] = cellIndex.split("");
    cellRowIndex = parseInt(cellRowIndex);
    cellColIndex = parseInt(cellColIndex);

    toggleLight(cellIndex);
    toggleLight([cellRowIndex, cellColIndex + 1].join(""));
    toggleLight([cellRowIndex, cellColIndex - 1].join(""));
    toggleLight([cellRowIndex + 1, cellColIndex].join(""));
    toggleLight([cellRowIndex - 1, cellColIndex].join(""));
  };

  const hasWon = () => {
    return board.grid.every((row) => row.every((col) => !col));
  };

  const display = board.grid.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        <div className="board-row">
          {row.map((col, colIndex) => (
            <Cell
              key={[rowIndex, colIndex].join("")}
              cellIndex={[rowIndex, colIndex].join("")}
              isSwitchedOn={board.grid[rowIndex][colIndex]}
              updateGameGrid={updateGameGrid}
            />
          ))}
        </div>
      </div>
    );
  });

  return (
    <div>
      {hasWon() ? <div className="board-hasWon">Congratulations</div> : display}
    </div>
  );
};

export default GameBoard;
