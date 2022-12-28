'use client';
import { OrbitControls, PerspectiveCamera, Environment, CubeCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Car } from './car';
import Ground from './ground';
import Rings from './rings';

const CarShow = () =>{
    return (
        <>
            <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />

            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>

            <color args = {[0,0,0]} attach="background"/>
            
            <CubeCamera resolution={256} frames={Infinity}>
                {/* @ts-ignore */} 
                {(texture) => (
                    <>
                        <Environment map={texture}/>
                        <Car/>
                    </>
                )}
            </CubeCamera>


            <Rings/>

            <spotLight
                color={[1, 0.25, 0.7]}
                intensity={1.5}
                angle={1}
                penumbra={0.5}
                position={[5,5,0]}
                castShadow
                shadow-bias={-0.0001}
            />

            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={2}
                penumbra={30}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />

            <Ground/>
        </>
    )
}

const carShowRoom2Page = () => {
    return(
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <Suspense fallback={null}>
                <Canvas shadows>
                    <CarShow/>
                </Canvas>
            </Suspense>
        </div>
    )
}

export default carShowRoom2Page;