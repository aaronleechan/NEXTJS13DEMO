import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";


const Lights: React.FC = () => {

    const lightRef = useRef<THREE.DirectionalLight>(null!);

    useHelper(lightRef, DirectionalLightHelper,5, "red");
    
    return(
        <>
            <ambientLight intensity={0.2}/>
            {/* <directionalLight  
                ref={lightRef} 
                position={[0, 10, 10]} 
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            /> */}
            <hemisphereLight  args={["#7cdbe6", "#5e9c49", 17]}/>
        </>
    )
}

export default Lights;