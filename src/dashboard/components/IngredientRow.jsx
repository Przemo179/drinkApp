import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../css files/IngredientRows.css';
import { UpdateValue } from './ChangingAmountOf';

export const IngredientRow = ({id, payload, removeFromStore, setChangeValue, changeValue}) => {   
    console.log(id);
    console.log(payload.label);
    return (
        <tr key={id}>
            <td>{payload.id + 1}</td>
            <td>{payload.label}</td>
            <td key={payload.id}>
                {changeValue && changeValue && payload.id == changeValue.id ? (
                    <UpdateValue
                    />
                ) : (
                    <div className='iconsWrap'>
                    {payload.amountOf}
                    {payload.unit}
                    <span title="Edit"
                        onClick={() => setChangeValue({
                            id: payload.id,
                            label: payload.label,
                            unit: payload.unit,
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
