import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../../css files/IngredientRows.css'
import { UpdateValue } from './UpdateAmountOf';

export const IngredientRow = ({
                                id, 
                                payload, 
                                removeFromStore, 
                                changeValueOfSingleIngr,
                                cancelChanging,
                                setChangeValue, 
                                updateValueChange,
                                changeValue}) => {   
    return (
        <tr key={id}>
            <td>{id + 1}</td>
            <td>{payload.label}</td>
            <td key={payload.id}>
                
                {changeValue && changeValue && payload.id == changeValue.id ? (
                    <UpdateValue
                        changeValueOfSingleIngr = {changeValueOfSingleIngr}
                        updateValueChange = {updateValueChange}
                        cancelChanging = {cancelChanging}
                        changeValue = {changeValue}
                    />
                ) : (
                    <div className='iconsWrap'>
                    {payload.amountOf}
                    {payload.unit}
                    <span title="Edit"
                        onClick={(e) => setChangeValue({
                            id: payload.id,
                            amountOf: e.target.value,
                            })
                        }
                    >
                        <FontAwesomeIcon icon={faPen} />
                    </span>
                </div>
                )}
            </td>
            <td className='span1'>
                <div className='iconsWrap'>
                    <span title="Delete" onClick={() => removeFromStore(id)}> 
                        <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                </div>
            </td>
        </tr>
    )
}
