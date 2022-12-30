import { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";


const Box = ({ color }: any) =>{

    const box = useRef(null);
    const time = useRef(0);
    const [xRotSpeed] = useState(()=> Math.random());
    const [yRotSpeed] = useState(()=> Math.random());
    const [scale] = useState(() => Math.pow(Math.random(), 1.0) * 0.5 + 0.05);
    const [position, setPosition] = useState(getInitialPosition());

    let max = 5;
    let min = -5;

    function getInitialPosition(){
        let v = new Vector3(
            (Math.random() * (5 - (-5))) + (-5), 
             Math.random() * (5 - 1) + 1, 
            (Math.random() * (5 - (-7))) + (-7)
        );
        if(v.x < 0){
            v.x = -4;
        }
        if(v.x > 0){
            v.x = 4
        }
        return v;
    }

    function resetPosition(){
        let v = new Vector3(
            (Math.random() * (5 - (-5))) + (-5), 
             Math.random() * (5 - 1) + 1, 
            (Math.random() * 10) + 10
        );
        if(v.x < 0){
            v.x = -4;
        }
        if(v.x > 0){
            v.x = 4
        }
        setPosition(v);
    }

    useFrame((state, delta) => {
        time.current += delta * 1.2;
        let newZ = position.z - (time.current);

        if(newZ < -10){
            resetPosition();
            time.current = 0;
        }

        {/* @ts-ignore */} 
        box.current.position.set(position.x, position.y, newZ);
        {/* @ts-ignore */} 
        box.current.rotation.x += delta * xRotSpeed;
        {/* @ts-ignore */} 
        box.current.rotation.y += delta * yRotSpeed;
        {/* @ts-ignore */} 
    },[xRotSpeed, yRotSpeed, position])

    return(
        <mesh ref={box} scale={scale} castShadow>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={color} envMapIntensity={0.15} />
        </mesh>
    )
}

const Boxes = () => {
    return(
        <>
        {
            [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]
            .map((e, i) => <Box key={i} color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]} /> )
        }
        </>
    )
}

export default Boxes;