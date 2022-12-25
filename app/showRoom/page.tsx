"use client";
import { Canvas} from '@react-three/fiber';
import React from 'react'
import { OrbitControls } from "@react-three/drei";
import Floor from './floor';
import Box from './box';
import Background from './background';
import ColorPicker from './colorPicker';
import Dragable from './dragable';


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
                <Dragable>
                    <Box position={[-4,1,0]}/>
                    <Box position={[4,1,0]}/>
                </Dragable>
                <Background />
                <Floor/>
           </Canvas>
        </div>
    )
}

export default ShowRoom;
