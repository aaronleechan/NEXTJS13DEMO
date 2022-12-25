import React from "react";
import { useAppContext } from "../../../context/AppContext";
import XYZcontroller from "./xyzController";

const CameraController: any = () => {

    const { cameraPos,updateCameraPos } = useAppContext();

    function positionOnChange(e: any){
        const clone = {...cameraPos};
        clone[e.target.name] = e.target.value;
        updateCameraPos(clone);
    }    

    return(
        <>
            <XYZcontroller 
                x = {cameraPos.x}
                xOnchange = {positionOnChange}
                y = {cameraPos.y}
                yOnchange = {positionOnChange}
                z = {cameraPos.z}
                zOnchange = {positionOnChange}
            />
        </>
    )

}

export default CameraController;