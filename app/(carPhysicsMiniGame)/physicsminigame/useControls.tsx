import { useEffect, useState } from "react";

const useControls = (vehicleApi: any, chassisApi: any) => {

    let [controls, setControls] = useState({});

    useEffect(()=> {

        const keyDownPressHandler = (e:any) => {
            setControls((controls) =>({
                ...controls,
                [e.key.toLowerCase()]: true
            }))
        }

        const keyUpPressHandler = (e:any) => {
            setControls((controls) =>({
                ...controls,
                [e.key.toLowerCase()]: false
            }))
        }

        window.addEventListener("keydown", keyDownPressHandler);
        window.addEventListener("keyup", keyUpPressHandler);

        return() => {
            window.removeEventListener("keydown", keyDownPressHandler);
            window.removeEventListener("keyup", keyUpPressHandler);
        }

    },[]);

    useEffect(() => {
         {/* @ts-ignore */} 
        if(controls.w){
            vehicleApi.applyEngineForce(150, 2);
            vehicleApi.applyEngineForce(150, 3);
             {/* @ts-ignore */} 
        } else if(controls.s){
            vehicleApi.applyEngineForce(-150, 2);
            vehicleApi.applyEngineForce(-150, 3);
        }else{
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }
        {/* @ts-ignore */} 
        if(controls.a){
            vehicleApi.setSteeringValue(0.35, 2);
            vehicleApi.setSteeringValue(0.35, 3);
            vehicleApi.setSteeringValue(-0.1, 0);
            vehicleApi.setSteeringValue(-0.1, 1);
             {/* @ts-ignore */} 
        }else if(controls.d){
            vehicleApi.setSteeringValue(-0.35, 2);
            vehicleApi.setSteeringValue(-0.35, 3);
            vehicleApi.setSteeringValue(0.1, 0);
            vehicleApi.setSteeringValue(0.1, 1);
        }else{
            for(let i = 0; i < 4; i++) {
                vehicleApi.setSteeringValue(0, i);
            }
        }
        {/* @ts-ignore */} 
        if(controls.arrowdown) {
            chassisApi.applyLocalImpulse([0,-5,0], [0, 0, +1])
        }
        {/* @ts-ignore */} 
        if(controls.arrowup) {
            chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, -1])
        }
        {/* @ts-ignore */} 
        if(controls.arrowleft) {
            chassisApi.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0])
        }
        {/* @ts-ignore */} 
        if(controls.arrowright) {
            chassisApi.applyLocalImpulse([0, -5, 0], [+0.5, 0, 0])
        }
        {/* @ts-ignore */} 
        if(controls.r){
            chassisApi.position.set(-1.5, 0.5, 3);
            chassisApi.velocity.set(0, 0, 0);
            chassisApi.angularVelocity.set(0, 0, 0);
            chassisApi.rotation.set(0, 0, 0);
        }

    },[controls, vehicleApi, chassisApi])

    return useControls;
}

export default useControls;