import React from "react";
import { useAppContext } from "../../../../context/AppContext";

const Lights : any = () => {

    let lightComponent = []

    const { pickLightColor,ambientLight, lightIntensity } = useAppContext();

    if(ambientLight){
        lightComponent.push(<ambientLight color={pickLightColor} intensity={lightIntensity}/>)
    }

    
    return lightComponent;
}

export default Lights;