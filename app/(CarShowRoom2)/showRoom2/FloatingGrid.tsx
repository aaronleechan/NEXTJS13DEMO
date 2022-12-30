import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import * as THREE from "three"

const FloatingGrid = () => {

    const diffuse = useLoader(THREE.TextureLoader, '/carShow2/grid-texture.png')

    useEffect(()=>{
        diffuse.wrapS = THREE.RepeatWrapping
        diffuse.wrapT = THREE.RepeatWrapping
        diffuse.anisotropy = 4;
        diffuse.repeat.set(30, 30);
        diffuse.offset.set(0, 0);
    },[diffuse])

    useFrame((state, delta)=>{
        let t = -state.clock.getElapsedTime() * 0.68;
        diffuse.offset.set(0, t);
    });

    return(
        <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
            <planeGeometry args={[100,100]} />
            <meshBasicMaterial 
                color={[1, 1, 1]}
                opacity={0.15}
                map={diffuse}
                alphaMap={diffuse}
                transparent={true}
            />
        </mesh>
    )
}

export default FloatingGrid;