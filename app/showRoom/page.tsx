"use client";
import { Canvas} from '@react-three/fiber';
import React from 'react'
import { OrbitControls } from "@react-three/drei";
import Floor from './floor';
import Box from './box';
import Background from './background';
import ColorPicker from './colorPicker';
import Dragable from './dragable';
import { Physics } from '@react-three/cannon';
import Model from './model';
import BoundingBox from './boundingBox';


const ShowRoom = () =>{

    // const handleClick = (e: any) =>{
    //     if(!window.activeMesh) return;
    //     window.activeMesh.material.color = new THREE.Color(e.target.style.background);
    // }

    return(
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <ColorPicker />
           <Canvas
                shadows
                style={{background: 'black'}}
                camera={{position: [7, 7, 7]}}
            >
                <ambientLight intensity={0.5} />
                <OrbitControls attach='orbitControls'/>
                <axesHelper args={[3]}/>
                <Physics>
                    <Dragable transformGroup>
                        <BoundingBox 
                            position={[0,2,0]}
                            offset={[0,-.2,.7]}
                            dims={[3,2,6.3]}
                        >
                            <Model 
                                path={'/showRoom/tesla_model_3/scene.gltf'} 
                                scale={new Array(3).fill(0.01)}
                            />
                        </BoundingBox>
                    </Dragable>
                    <Dragable transformGroup>
                        <BoundingBox 
                            position={[8,2,0]}
                            offset={[0,-1,.3]}
                            dims={[3,2,7.4]}
                        >
                            <Model 
                                path={'/showRoom/tesla_model_s/scene.gltf'} 
                                scale={new Array(3).fill(0.013)}
                            />
                        </BoundingBox>
                    </Dragable>
                    <Dragable transformGroup>
                        <BoundingBox 
                            position={[-8,2,0]}
                            offset={[0,0,0]}
                            dims={[2,2.3,6.8]}
                        >
                            <Model 
                                path={'/showRoom/tesla_cybertruck/scene.gltf'} 
                                scale={new Array(3).fill(12)}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                        </BoundingBox>
                    </Dragable>
                    <Background />
                    <Floor/>
                </Physics>
           </Canvas>
        </div>
    )
}

export default ShowRoom;
