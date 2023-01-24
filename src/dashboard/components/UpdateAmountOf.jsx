export const UpdateValue = () => (  
    <div className="xd row">
        <div className="col">
            <input
            className="valueInput"
                type='number'
            />
        </div>
        <div className="col-auto">
        <button 
            className='btn btn-success'
            >Update task</button> 
        <button
            className='btn btn-warning'
            >Cancel</button>
        </div>
  </div>
)