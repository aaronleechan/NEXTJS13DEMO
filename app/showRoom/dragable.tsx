import * as THREE from 'three'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { extend, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react';

extend({DragControls});

const Dragable = (props: any) => {
    const groupRef = useRef();
    const constrolsRef = useRef();
    const [children,setChildren] = useState([]);
    const { camera, gl, scene } = useThree();

    useEffect(()=>{
        setChildren(groupRef.current.children);
    },[])

    useEffect(()=>{

        // let controls = new THREE.OrbitControls(camera)

        constrolsRef.current.addEventListener(
            'hoveron',
            e => {
                scene.orbitControls.enabled = false;
            }
        )

        constrolsRef.current.addEventListener(
            'hoveroff',
            e => {
                scene.orbitControls.enabled = true;
            }
        )

        constrolsRef.current.addEventListener(
            'dragstart',
            e => {
                e.object.api?.mass.set(0);
            }
        )

        constrolsRef.current.addEventListener(
            'dragend',
            e => {
                e.object.api?.mass.set(1);
            }
        )

        constrolsRef.current.addEventListener(
            'drag',
            e => {
                e.object.api?.position.copy(e.object.position);
                e.object.api?.velocity.set(0,0,0);
            }
        )


    },[children])

    return (
        <group ref={groupRef}>
            <dragControls
                transformGroup = {props.transformGroup} 
                ref={constrolsRef}
                args={[children, camera, gl.domElement]} 
            />
            {props.children}
        </group>
    );
}

export default Dragable;