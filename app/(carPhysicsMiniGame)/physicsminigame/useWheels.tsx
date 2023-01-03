import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";

const useWheels = (width: any, height: any, front: any, radius: any) => {

    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        frictionSlip: 5,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.01,
        maxSuspensionTravel: 0.1,
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true
    };

    {/* @ts-ignore */} 
    const wheelInfos: any = [
        {
            ...wheelInfo,
            isFrontWheel: true,
            chassisConnectionPointLocal: [-width * 0.65, height * 0.4, front]
        },
        {
            ...wheelInfo,
            isFrontWheel: true,
            chassisConnectionPointLocal: [width * 0.65, height * 0.4, front]
        },
        {
            ...wheelInfo,
            isFrontWheel: false,
            chassisConnectionPointLocal: [-width * 0.65, height * 0.4, -front]
        },
        {
            ...wheelInfo,
            isFrontWheel: false,
            chassisConnectionPointLocal: [width * 0.65, height * 0.4, -front]
        }
    ];

    const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 1,
        shapes:[
            {
                args: [wheelInfo.radius, wheelInfo.radius, 0.015, 16],
                rotation: [0, 0, -Math.PI / 2],
                type: 'Cylinder',
            },
        ],
        type: "Kinematic",
    });
    {/* @ts-ignore */} 
    useCompoundBody(propsFunc, wheels[0])
     {/* @ts-ignore */} 
    useCompoundBody(propsFunc, wheels[1])
     {/* @ts-ignore */} 
    useCompoundBody(propsFunc, wheels[2])
     {/* @ts-ignore */} 
    useCompoundBody(propsFunc, wheels[3])

    return[wheels, wheelInfos];
}

export default useWheels;

