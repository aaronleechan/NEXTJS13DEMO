import { useAppContext } from '../context/AppContext'

// type selectComponentProps = {
//     onChange: (value: string) => void;
// }

const SelectComponent = () =>{

    const {onChangeSelect} = useAppContext();

    return(
        <select onChange={(e)=>onChangeSelect(e.target.value)} >
            <option value='BoxGeometry'>Box Geometry</option>
            <option value='CapsuleGeometry'>Capsule Geometry</option>
        </select>
    )
}

export default SelectComponent;