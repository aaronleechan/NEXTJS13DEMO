import { useAppContext } from '../context/AppContext'
import {Geometry_data} from '../data/geometryData'

const SelectComponent = () =>{

    const {onChangeSelect} = useAppContext();

    let getKeys = Object.keys(Geometry_data);

    return(
        <select onChange={(e)=>onChangeSelect(e.target.value)} >
            {
                getKeys && getKeys.map((k: any) => {
                    let title = k.split(/(?=[A-Z])/).join(" ")
                    return(
                        <option key={k} value={k}>{title}</option>
                    )
                })
            }
        </select>
    )
}

export default SelectComponent;