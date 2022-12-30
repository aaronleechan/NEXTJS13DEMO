import React, { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

export const Car = () => {

    const gltf = useLoader(GLTFLoader, 'carShow2/ferrari/scene.gltf');

    useEffect(()=>{
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        gltf.scene.position.set(0, 0.35, -2);
        gltf.scene.rotation.set(0, 1.6, 0);
        gltf.scene.traverse((object)=>{
            if(object instanceof Mesh){
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        })
    },[gltf])

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

        // let wheel = gltf.scene.children[0].children[0].children[0].children[0]
        // console.log({" group ": wheel.children[0] })
        // wheel.children[0].rotation.x = t * 0.001;
        // wheel.children[2].rotation.x = t * 1;
        // wheel.children[4].rotation.x = t * 1;
        // wheel.children[6].rotation.x = t * 1;
    });

    return <primitive object={gltf.scene}/>
}