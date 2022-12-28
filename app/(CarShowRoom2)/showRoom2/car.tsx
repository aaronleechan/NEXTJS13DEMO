import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
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

    return <primitive object={gltf.scene}/>
}