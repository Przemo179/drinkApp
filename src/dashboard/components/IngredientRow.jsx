export const IngredientRow = ({id, columnIterator, label, unit, click}) => ( 
    <tr key={id}>
        <td>{columnIterator}</td>
        <td>{label}</td>
        <td>
            <input type="number" min='0' max='2000' />
            {unit}
        </td>
        <td><button type="button" className="btn btn-danger" onClick={click}>X</button></td>
    </tr>
)