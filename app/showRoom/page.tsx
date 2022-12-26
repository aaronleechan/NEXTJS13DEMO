"use client";
import { Canvas} from '@react-three/fiber';
import React from 'react'
import { OrbitControls } from "@react-three/drei";
import Floor from './floor';
import Background from './background';
import ColorPicker from './colorPicker';
import { Physics } from '@react-three/cannon';
import Cars from './cars';
import CameraControl from './cameraControl';
import CameraButton from './cameraButton';
import Lights from './lights';
import ProcessingEffects from './processingEffects';

const ShowRoom = () =>{

    return(
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <ColorPicker />
            <CameraButton />
           <Canvas
                shadows
                style={{background: 'black'}}
                camera={{position: [7, 7, 7]}}
            >
                <CameraControl />
                <Lights />
                <OrbitControls attach='orbitControls'/>
                {/* <axesHelper args={[3]}/> */}
                <Background />
                <Physics>
                    <Cars />
                    <Floor/>
                </Physics>
                <ProcessingEffects />

           </Canvas>
        </div>
    )
}

export default ShowRoom;
