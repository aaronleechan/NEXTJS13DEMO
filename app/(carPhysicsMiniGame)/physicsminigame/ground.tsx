import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber"
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { BufferAttribute, TextureLoader } from "three"

export function Ground(){

    const [ref] = usePlane(
        () => ({
            type: 'Static',
            rotation: [-Math.PI / 2, 0, 0],
        }),
        useRef(null)
    )

    const gridMap = useLoader(TextureLoader, '/carPhysicsMiniGame/texture/grid.png');
    const aoMap = useLoader(TextureLoader, '/carPhysicsMiniGame/texture/ground-ao.png');
    const alphaMap = useLoader(TextureLoader, '/carPhysicsMiniGame/texture/alpha-map.png');
    const meshRef = useRef(null);
    const meshRef2 = useRef(null);
    
    useEffect(()=>{
        // @ts-ignore comment
        let uvs = meshRef.current.geometry.attributes.uv.array;
         // @ts-ignore comment
        meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
        // @ts-ignore comment
        let uvs2 = meshRef2.current.geometry.attributes.uv.array;
         // @ts-ignore comment
        meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));

    },[meshRef.current])

    const { envMapIntensity, metalness , roughness,mixBlur,mixStrength, mixContrast, minDepthThreshold, maxDepthThreshold, depthToBlurRatioBias,
            planeX, planeY, planeZ, materialOpacity
        } = useControls({
        envMapIntensity: {value: 0.35, min: -20, max: 20},
        metalness: {value: 0.05, min: 0, max: 1},
        roughness: {value: 0.4, min: -10, max: 300},
        mixBlur:{value: 3, min: 0, max: 10},
        mixStrength: {value: 30, min: 0, max: 100},
        mixContrast: {value: 1, min: 0, max: 2},
        minDepthThreshold: {value: 0.9, min: 0, max: 1},
        maxDepthThreshold: {value: 1, min: 0, max: 1},
        depthToBlurRatioBias: {value: 0.25, min: 0, max: 1},
        planeX: {value: -2.285, min: -20, max: 20},
        planeY: {value: -0.01, min: -20, max: 20},
        planeZ: {value: -1.325, min: -20, max: 20},
        materialOpacity: {value: 0.325, min: 0, max: 1},
    })

    return(
        <>
            <mesh
                ref={meshRef2}
                position={[planeX, planeY, planeZ]}
                rotation-x={-Math.PI * 0.5}
            >
                <planeGeometry args={[12, 12]}/>
                <meshBasicMaterial 
                    opacity={materialOpacity}
                    alphaMap={gridMap}
                    transparent={true} 
                    color={'blue'}
                />
            </mesh>
            <mesh
                ref={meshRef}
                position={[-2.285, -0.015, -1.325]}
                rotation-x={-Math.PI * 0.5}
                rotation-z={-0.079}
            >
                <circleGeometry args={[6.12, 50]}/>
                <MeshReflectorMaterial
                    aoMap={aoMap}
                    alphaMap={alphaMap}
                    transparent={true}
                    color={[0.5, 0.5, 0.5]}
                    envMapIntensity={envMapIntensity}
                    metalness={metalness}
                    roughness={roughness}
                    dithering={true}
                    blur={[1024, 512]}
                    mixBlur={mixBlur}
                    mixStrength={mixStrength}
                    mixContrast={mixContrast}
                    resolution={1024}
                    mirror={0}
                    depthScale={0}
                    minDepthThreshold={minDepthThreshold}
                    maxDepthThreshold={maxDepthThreshold}
                    depthToBlurRatioBias={depthToBlurRatioBias}
                />
            </mesh>
        </>
    )
}

export default Ground;