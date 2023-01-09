export const IngredientRow = ({id, columnIterator, label, unit, handleClick}) => {

    return (    
        <tr key={id}>
            <td>{columnIterator}</td>
            <td>{label}</td>
            <td>
                <form>
                    <input type="number" min='0' max='1000' id={id}/>
                    {unit}
                </form>
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={event => handleClick(event, id)}>X</button>
            </td>
        </tr>
    )
}
