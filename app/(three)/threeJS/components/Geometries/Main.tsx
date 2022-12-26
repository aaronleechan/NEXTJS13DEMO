import * as THREE from 'three';
import React , {useRef, useState} from 'react'
import { Canvas,useFrame } from '@react-three/fiber';
import OrbitController from '../../control/orbitController';
import { useAppContext } from '../../../../context/AppContext';
import Lights from '../Lights/Lights';
import Floor from './Floor';
import { useTexture } from '@react-three/drei';


function Geometry(props: JSX.IntrinsicElements['mesh']) {
    
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)

    
    const map = useTexture("./textures/metal_plate_diff_1k.png");
    const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
    const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
    const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame(state=>{
      // ref.current.rotation.x += .01
      ref.current.rotation.y += .01
      // ref.current.rotation
    })

    return (
      <mesh
        ref={ref}
        {...props}
        scale={clicked ? [.3,.3,.3] : [.1,.1,.1]}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >

        {props.children}
        <meshStandardMaterial 
          map={map} 
          normalMap={normalMap} 
          roughnessMap={roughnessMap}
        />
      </mesh>
    )
  }


  const Bulb = (props: any) => {
    
    return(
      <mesh {...props}>
        <pointLight castShadow/>
        <sphereBufferGeometry args={[2]} />
        <meshPhongMaterial emissive='yellow'/>
      </mesh>
    )
  }


/**
 * <axesHelper/>
 * X axis is RED, Y axis is GREEN, and Z axis is BLUE.
*/

const Main = (props: any) =>{

    const { children } = props;

    const { position, cameraPos } = useAppContext();

    const getPosition: any = Object.keys(position).map((k: any) => position[k]);
    const getXYZ : any = Object.keys(cameraPos).map((k: any) => cameraPos[k]);

    return(
      <Canvas
          shadows
          style={{background: 'black'}}
          camera={{position: [10, 10, 10]}}
      >
        <object3D key={"obj3D"} position={getXYZ}>
          <Lights />
            <Bulb position={[0,8,0]}/>
            <axesHelper args={[10]}/>
            <OrbitController/>
            <Geometry position={getPosition} children={children} castShadow />
            <Floor position={[0,-11,0]} receiveShadow/>
        </object3D>
      </Canvas>
    )
}

export default Main