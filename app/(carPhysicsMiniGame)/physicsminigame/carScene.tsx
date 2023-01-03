import { Suspense, useEffect, useState } from "react"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Track from "./track";
import { useControls } from 'leva';
import Ground from "./ground";
import Car from "./car";

const CarScene = () => {

    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-6,3.9,6.21]);

    const { x, y , z } = useControls({
        x: {value: 6.4, min: -20, max: 20},
        y: {value: 4.5, min: -20, max: 20},
        z: {value: 0.8, min: -20, max: 20}
    })

    useEffect(()=>{

        function keydownHandler(e: any){
            if(e.key === 'k'){
                if(thirdPerson) setCameraPosition([-6,3.9,6.21 + Math.random() * 0.01]);
                setThirdPerson(!thirdPerson)
            }
        }

        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
        }
        
    },[thirdPerson])

    return(
        <Suspense fallback={null}>
            <Environment    files={'/carPhysicsMiniGame/envMap.hdr'}    background/>
            <PerspectiveCamera makeDefault position={[x, y, z]} />
            {!thirdPerson && (
                <OrbitControls target={[-2.64, -0.71, 0.03]}/>
            )}
            <Track/>
            <Ground/>
            <Car thirdPerson={thirdPerson}/>
        </Suspense>
    )
}

export default CarScene;