import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useWheels from "./useWheels";
// import WheelDebug from "./wheelDebug";
import useControls from "./useControls";
import { Quaternion, Vector3 } from "three";


const Car = ({ thirdPerson }: any) => {

    const mesh = useLoader(
        GLTFLoader,
        '/carPhysicsMiniGame/models/car.glb'
    ).scene;

    const position : any = [-1.5, 0.5, 3]
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs: any = [width, height, front * 2];
    const [chassisBody, chassisApi] = useBox(
        ()=> ({
            args: chassisBodyArgs,
            mass: 150,
            position,
        }),
        useRef(null),
    );

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleApi] = useRaycastVehicle(
        ()=> ({
            chassisBody,
            wheelInfos, 
            wheels,
        }),
        useRef(null),
    );

    useControls(vehicleApi, chassisApi);


    useEffect(()=> {
        mesh.scale.set(0.0012, 0.0012, 0.0012);
        mesh.children[0].position.set(-365, -18, -67);
    },[mesh])

    useFrame((state)=>{
        if(!thirdPerson) return;

        let position = new Vector3(0, 0, 0);
         // @ts-ignore comment
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);

        let quaternion = new Quaternion(0, 0, 0, 0);
         // @ts-ignore comment
        quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

        let wDir = new Vector3(0, 0, -1);
        wDir.applyQuaternion(quaternion);
        wDir.normalize();

        let cameraPosition = position.clone().add(
            wDir.clone().multiplyScalar(-1).add(
                new Vector3(0, 0.3 , 0)
        ));

        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(position);
    })

    return(
        // <primitive object={mesh} rotation-y={Math.PI} />
         // @ts-ignore comment
        <group ref={vehicle} name="vehicle">
            {/* @ts-ignore */} 
            <group ref={chassisBody} name="vehicle">
                <primitive object={mesh} rotation-y={Math.PI} position={[0, -0.09, 0]}/>
            </group>

            {/* <mesh ref={chassisBody} name="chassisBody">
                <meshBasicMaterial transparent={true} opacity={0.3}/>
                <boxGeometry args={chassisBodyArgs} />
            </mesh> */}

            {/* @ts-ignore */} 
            {/* <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} /> */}
             {/* @ts-ignore */} 
            {/* <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} /> */}
             {/* @ts-ignore */} 
            {/* <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} /> */}
             {/* @ts-ignore */} 
            {/* <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} /> */}
        </group>
    )
}

export default Car;