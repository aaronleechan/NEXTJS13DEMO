import React, { useRef } from "react";
import { useAppContext } from "../../../../context/AppContext";
import * as THREE from 'three';
import { useHelper } from "@react-three/drei";

const Lights : any = () => {

    let lightComponent = []

    // const lightRef = useRef<THREE.DirectionalLight>();

    // useHelper(lightRef, THREE.DirectionalLightHelper, 1, 'red');

    const { pickLightColor,ambientLight, lightIntensity } = useAppContext();

    if(ambientLight){
        lightComponent.push(<ambientLight color={pickLightColor} intensity={lightIntensity}/>)
    }

    
    return (
        <>
            {lightComponent}
            {/* <directionalLight ref={lightRef} position={[1,8,10]} castShadow/> */}
        </>
    )
}

export default Lights;