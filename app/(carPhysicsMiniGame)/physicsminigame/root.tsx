import { Canvas } from "@react-three/fiber";
import React from "react"
import CarScene from "./carScene";
import { Physics } from "@react-three/cannon";

const Root = () =>{
    return(
        <Canvas>
            <Physics
                broadphase="SAP"
                gravity={[0, -2.6, 0]}
            >
                <CarScene/>
            </Physics>
        </Canvas>
    )
}

export default Root;