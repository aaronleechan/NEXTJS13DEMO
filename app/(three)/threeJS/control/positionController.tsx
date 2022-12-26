import { useAppContext } from "../../../context/AppContext";
import XYZcontroller from "./xyzController";

const PositionController: any = () => {

    const { position,updatePosition } = useAppContext();

    function positionOnChange(e: any){
        const clone = {...position};
        clone[e.target.name] = e.target.value;
        updatePosition(clone);
    }    

    return(
        <>
            <h1>This is Position Controller</h1>
            <XYZcontroller 
                x = {position.x}
                xOnchange = {positionOnChange}
                y = {position.y}
                yOnchange = {positionOnChange}
                z = {position.z}
                zOnchange = {positionOnChange}
            />
        </>
    )

}

export default PositionController;
