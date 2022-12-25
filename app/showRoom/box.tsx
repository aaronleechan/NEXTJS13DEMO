import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Box = (props: any) =>{

    const ref = useRef<THREE.Mesh>(null!)
    const texture = useLoader(THREE.TextureLoader,'/showRoom/wood.jpg');

    useFrame(()=>{
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    })

    const handlePointerDown = (e: any) =>{
        console.log(e);
        e.object.active = true;
        if(window.activeMesh){
            scaleDown(window.activeMesh);
            window.activeMesh.active = false;
        }
        window.activeMesh = e.object;
    }

    const handlePointerEnter = (e: any) =>{
        e.object.scale.x = 1.5
        e.object.scale.y = 1.5
        e.object.scale.z = 1.5
    }

    const handlePointerLeave = (e: any) =>{
        if(!e.object.active){
            scaleDown(e.object);
        }
    }

    const scaleDown = (object: any) =>{
        object.scale.x = 1;
        object.scale.y = 1;
        object.scale.z = 1;
    }

    return(
        <mesh 
            ref={ref} 
            {...props}
            castShadow
            onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            {/* <sphereBufferGeometry args={[1, 100, 100]}/> */}
            <boxBufferGeometry args={[1,1,1]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

export default Box