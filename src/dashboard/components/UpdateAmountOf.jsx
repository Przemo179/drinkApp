export const UpdateValue = ({ 
                            changeValueOfSingleIngr,
                            cancelChanging,
                            updateValueChange,
                            changeValue }) => ( 

    <div className="xd row">
        <div className="col">
            <input
            min={0} max={1000}
            value={ changeValue && changeValue.amountOf }
            onChange={(e) => changeValueOfSingleIngr(e.target.value)}
            className="valueInput"
                type='number'
            />
        </div>
        <div className="col-auto">
        <button 
            onClick={updateValueChange}
            className='btn btn-success'
            >Update task</button> 
        <button
            onClick={cancelChanging}
            className='btn btn-warning'
            >Cancel</button>
        </div>
  </div>
)