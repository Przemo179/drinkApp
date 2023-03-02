/* eslint-disable react/prop-types */
export const Cell = ({ cellIndex, isSwitchedOn, updateGameGrid }) => (
  <button
    className={isSwitchedOn ? "cell-on" : "cell-off"}
    onClick={() => updateGameGrid(cellIndex)}
  ></button>
);
