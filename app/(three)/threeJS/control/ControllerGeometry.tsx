import _ from 'lodash';
import { useAppContext } from "../../../context/AppContext";

const ControllerGeometry = () => {

    const { geometry_data,updateGeometry } = useAppContext();

    const getKeys = Object.keys(geometry_data);

    function sliderOnChange(e: any){
        let clone: any = {...geometry_data};
        clone[e.target.name].value = e.target.value;
        updateGeometry(clone)
    }    

    return(
        <div id="Controller">
            {
                getKeys && getKeys.map((k: any) => {
                    return(
                        <li key={k}>
                            <label>{k}</label>
                            <input name={k} type="range" min={geometry_data[k].min} max={geometry_data[k].max} value={geometry_data[k].value} step={geometry_data[k].step || 0.1} onChange={sliderOnChange}/>
                            <a>{geometry_data[k].value}</a>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default ControllerGeometry;