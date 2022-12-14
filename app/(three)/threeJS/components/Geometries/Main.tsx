import * as THREE from 'three';
import React , {useRef, useState} from 'react'
import { Canvas,useFrame } from '@react-three/fiber';
import OrbitController from '../../control/orbitController';
import { useAppContext } from '../../../../context/AppContext';


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

    const { position } = useAppContext();

    const getPosition: any = Object.keys(position).map((k: any) => position[k]);

    return(
        <Canvas
            camera={{position: [10, 10, 10]}}
        >
            <ambientLight />
            <axesHelper args={[10]}/>
            <OrbitController/>
            <Geometry position={getPosition} children={children}/>
        </Canvas>
    )
}

export default Main