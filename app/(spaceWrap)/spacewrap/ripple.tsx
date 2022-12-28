'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from 'three';

const Points = () =>{

    const imgTex = useLoader(THREE.TextureLoader,'/ripple/circle.png');

    const bufferRef = useRef(null);

    let t = 0;
    let f = 0.002;
    let a = 3;

    const graph = useCallback((x: number, z: number) => {
        return Math.sin(f * (x**2 + z**2 + t)) * a;
    },[t,f,a])


    const count = 100
    const sep = 3

    let positions = useMemo(() => {
      let positions = []
    
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          let x = sep * (xi - count / 2);
          let z = sep * (zi - count / 2);
          let y = graph(x, z);
          positions.push(x, y, z);
        }
      }
      return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(()=>{
        t += 15
        {/* @ts-ignore */} 
        const position = bufferRef.current.array;

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
              let x = sep * (xi - count / 2);
              let z = sep * (zi - count / 2);
              position[i + 1] = graph(x, z);
              i += 3;
            }
        }
        {/* @ts-ignore */} 
        bufferRef.current.needsUpdate = true;
    })

    return(
            <points>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        ref={bufferRef}
                        array={positions}
                        count={positions.length / 3}
                        itemSize={3}
                    />
                </bufferGeometry>

                <pointsMaterial
                    attach={'material'}
                    map={imgTex}
                    color={'white'}
                    size={0.5}
                    sizeAttenuation={true}
                    transparent={false}
                    alphaTest={0.5}
                    opacity={1.0}
                />
            </points>
    )
}

const BoxGemo = () =>{
    return(
        <mesh>
            <boxBufferGeometry args={[1,1,1]}/>
            <meshStandardMaterial />
        </mesh>
    )
}

const AnimationCanvas = () => {
    return (
        <Canvas
            camera={{ position: [100, 10, 0], fov: 75 }}
        >
            <OrbitControls />
            <axesHelper args={[3]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Points />
            {/* <BoxGemo /> */}
        </Canvas>
    );
}

const RippleWrap = () =>{
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
        </Suspense>
    )
}

export default RippleWrap;