import * as THREE from 'three';
import React , {useRef, useState} from 'react'
import { Canvas,ReactThreeFiber,useFrame, useThree } from '@react-three/fiber';
import { DoubleSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import OrbitController from '../../control/orbitController';

function Geometry(props: JSX.IntrinsicElements['mesh']) {
    
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame(state=>{
      //ref.current.rotation.x += .01
      ref.current.rotation.y += .01
      // ref.current.rotation
    })

    return (
      <mesh
        ref={ref}
        {...props}
        scale={clicked ? [1,1,1] : [.5,.5,.5]}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >

        {props.children}
        <meshStandardMaterial color={hovered ? 'blue' : 'red'} wireframe/>
      </mesh>
    )
  }


/**
 * <axesHelper/>
 * X axis is RED, Y axis is GREEN, and Z axis is BLUE.
*/

const Main = (props: any) =>{

    const { children } = props;

    return(
        <Canvas
            style ={{background: 'black'}}
            camera={{position: [3, 3, 3]}}
        >
            <ambientLight />
            <axesHelper args={[10]}/>
            <OrbitController/>
            <Geometry position={[0, 0, 0]} children={children}/>
        </Canvas>
    )
}

export default Main