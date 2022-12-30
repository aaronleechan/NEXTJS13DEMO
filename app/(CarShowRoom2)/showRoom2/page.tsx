'use client';
import { OrbitControls, PerspectiveCamera, Environment, CubeCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Boxes from './boxes';
import { Car } from './car';
import Ground from './ground';
import Rings from './rings';
import { Bloom, EffectComposer, ChromaticAberration, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';
import FloatingGrid from './FloatingGrid';

const CarShow = () =>{
    return (
        <>
            <ambientLight intensity={0.5} />
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
            <Boxes />

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

            <axesHelper args={[1]} />
            <Ground/>
            <FloatingGrid/>
            {/* <EffectComposer>
                <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480}/>
                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={1.3}
                    width={300}
                    height={300}
                    kernelSize={5}
                    luminanceThreshold={0.95}
                    luminanceSmoothing={0.025}
                />
                <ChromaticAberration 
                    blendFunction={BlendFunction.NORMAL}
                    offset={[0.0005, 0.0012]} 
                />
            </EffectComposer> */}
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