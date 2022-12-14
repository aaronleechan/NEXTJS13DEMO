import { useAppContext } from "../../../context/AppContext";

const PositionController = () => {

    const { position,updatePosition } = useAppContext();

    function positionOnChange(e: any){
        const clone = {...position};
        clone[e.target.name] = e.target.value;
        updatePosition(clone);
    }    

    return(
        <div>
            <a>
                <label>X ({position.x}): </label>
                <input name={"x"} type="range" min={-10} max={10} value={position.x} onChange={positionOnChange}/>
            </a>

            <a>
                <label>Y ({position.y}): </label>
                <input name={"y"} type="range" min={-10} max={10} value={position.y} onChange={positionOnChange}/>
            </a>

            <a>
                <label>Z ({position.z}): </label>
                <input name={"z"} type="range" min={-10} max={10} value={position.z} onChange={positionOnChange}/>
            </a>
        </div>
    )

}

export default PositionController;
