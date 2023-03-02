/* eslint-disable react/react-in-jsx-scope */
export const Cell = ({ cellIndex, isSwitchedOn, updateGameGrid }) => (
  <button
    className={isSwitchedOn ? "cell-on" : "cell-off"}
    onClick={() => updateGameGrid(cellIndex)}
  ></button>
);
