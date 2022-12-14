import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

type Props = {
    isTesting: boolean;
}

const AnimatedBox = ({isTesting}: Props) => {

    const meshRef = useRef<THREE.Mesh>(null!);
    {isTesting && useHelper(meshRef, THREE.BoxHelper, "blue")};

    useFrame(()=>{
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01;
        }
    })

    return(
       <>
            <mesh visible={true} ref={meshRef} scale={[0.5, 0.5, 0.5]}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh> 
       </>
    )
};

export default AnimatedBox;