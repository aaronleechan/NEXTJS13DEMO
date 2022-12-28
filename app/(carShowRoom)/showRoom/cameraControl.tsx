import { useFrame } from "@react-three/fiber";
import state from './state';

const CameraControl = ({  }) =>{


    useFrame(({camera, scene})=>{
        {/* @ts-ignore */} 
        if(state.activeMesh.name !== state.activeMeshName){
            state.activeMesh = scene.getObjectByName(state.activeMeshName) || {};
        }

        if(state.shouldUpdate){
            //alpha is usually 0 - 1 . now we set 0.1
            camera.position.lerp(state.cameraPos,0.1)
            {/* @ts-ignore */} 
            scene.orbitControls.target.lerp(state.target,0.1)
            {/* @ts-ignore */} 
            scene.orbitControls.update()
            const diff = camera.position.clone().sub(state.cameraPos).length();
            if(diff < 0.1) state.shouldUpdate = false;
        }
    })

    return(
        null
    )
}

export default CameraControl