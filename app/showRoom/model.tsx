import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

const Model = (props: any) =>{

    const model: any = useLoader(
        GLTFLoader, 
        props.path
    );

    model.scene.traverse( (child: any) =>{
        if(child.isMesh){
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.FrontSide;
        }
    })

    return(
        <primitive 
            object={model.scene} 
            {...props}
        />
    )
}

export default Model;