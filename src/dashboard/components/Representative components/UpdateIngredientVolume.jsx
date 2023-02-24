/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export const UpdateValue = ({
  changeValueOfSingleIngr,
  cancelChanging,
  updateValueChange,
  changeValue,
}) => (
  <div className="row">
    <div className="col">
      <input
        min={0}
        max={1000}
        value={changeValue && changeValue.amountOf}
        onChange={(e) => changeValueOfSingleIngr(e.target.value)}
        className="valueInput"
        type="number"
        placeholder="Enter value between 0-1000"
      />
    </div>
    <div className="col-auto">
      <button onClick={updateValueChange} className="btn btn-success me-2">
        Update value
      </button>
      <button onClick={cancelChanging} className="btn btn-warning me-2">
        Cancel
      </button>
    </div>
  </div>
);
