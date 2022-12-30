import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const Rings = () => {
    const itemsRef = useRef([]);
    let array = Array.from({length: 14}, (v,i)=>i)
    
    useFrame((state)=>{

        let elapsed = state.clock.getElapsedTime();

        for(let i = 0; i < itemsRef.current.length; i++){

            let mesh = itemsRef.current[i];

            let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
            {/* @ts-ignore */} 
            mesh.position.set(0, 0, -z);

            //when bigger, the ring is smaller
            let dist = Math.abs(z);
            {/* @ts-ignore */} 
            mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

            //Update intensity of color scale
            let colorScale = 1;
            if(dist > 2){
                colorScale = 1 - (Math.min(dist,12) - 2) / 10;
            }
            colorScale *= 0.5;

            //Update the color of ring
            if(i % 2 == 1){
                {/* @ts-ignore */} 
                mesh.material.emissive = new THREE.Color(6, 0.15, 0.7).multiplyScalar(0.5);
            }else{
                {/* @ts-ignore */} 
                mesh.material.emissive = new THREE.Color(0.1, 0.7, 3).multiplyScalar(0.5);
            }
        }
    });

    return(
        <>
            {
                array.map((v,i) => (
                    <mesh
                        castShadow
                        receiveShadow
                        position={[0, 0, 0]}
                        key={i}
                        ref={
                            (el) => {
                                    {/* @ts-ignore */} 
                                    itemsRef.current[i] = el
                                }
                        }
                    >
                        <torusGeometry args={[5, 0.05, 17, 100]}/>
                        <meshStandardMaterial emissive={[1, 1, 1]} color={[0,0,0]}/>
                    </mesh>
                ))
            }
        </>
    )
}

export default Rings;