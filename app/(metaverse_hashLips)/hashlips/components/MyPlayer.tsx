import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Mesh } from "three";
import { useInput } from "./hooks/useInput";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotationQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({forward, backward, left, right}: any) => {

    let directionOffset = 0; // w

    if(forward){
        if(left){
            directionOffset = Math.PI / 4; // w + a
        }else if(right){
            directionOffset = -Math.PI / 4; // w + d
        }
    }else if(backward){
        if(left){
            directionOffset = Math.PI / 4 + Math.PI / 2; // s + a
        }else if(right){
            directionOffset = -Math.PI / 4 - Math.PI / 2; // s + d
        }else{
            directionOffset = Math.PI; // s
        }
    }else if(left){
        directionOffset = Math.PI / 2; // a
    }else if(right){
        directionOffset = -Math.PI / 2; // d
    }
    return directionOffset;
}


const MyPlayer = () =>{

    const { forward, backward, left, right, jump, shift } = useInput();

    const model = useGLTF("./models/player3.glb");
    const { actions } = useAnimations(model.animations, model.scene);

    model.scene.scale.set(0.5, 0.5, 0.5);

    const currentAction = useRef("");
    const controlRef: any = useRef<typeof OrbitControls>();
    const camera = useThree((state)=>state.camera);

    const updateCameraTarget = (moveX: number, moveZ: number) => {
        camera.position.x += moveX;
        camera.position.z += moveZ;
        cameraTarget.x = model.scene.position.x;
        cameraTarget.z = model.scene.position.z;
        cameraTarget.y = model.scene.position.y + 2;
        if(controlRef.current){
            controlRef.current.target = cameraTarget;
        }
    }

    model.scene.traverse((object)=>{
        if ((object as Mesh).isMesh) { 
            object.castShadow = true;
         }
    })

    useEffect(()=>{
        let action = "";
        if(forward || backward || left || right){
            action = "walking";
            if(shift){
                action = "running";
            }
        }
        else if(jump){
            action = "jumping";
        }else{
            action = "idle";
        }

        if(currentAction.current !== action){
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }
    },[forward, backward, left, right, jump, shift])

    useFrame((state,delta)=>{
        if(currentAction.current == "walking" || currentAction.current == "running"){
            
            let angleYCameraDirection = Math.atan2(
                camera.position.x - model.scene.position.x,
                camera.position.z - model.scene.position.z
            );

            let directionOffsetValue = directionOffset({forward, backward, left, right});

            // //rotate model 
            rotationQuarternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + directionOffsetValue);
            model.scene.quaternion.copy(rotationQuarternion);

            // //calculate direction
            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, directionOffsetValue);

            // // run /walk velicity
            const velocity = currentAction.current == "running" ? 10 : 5;

            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;

            model.scene.position.x += moveX;
            model.scene.position.z += moveZ;
            updateCameraTarget(moveX, moveZ);
        }
    })

    return (
        <>
            <OrbitControls ref={controlRef} />
            <primitive object={model.scene}/>
        </>
    );
}

export default MyPlayer;
