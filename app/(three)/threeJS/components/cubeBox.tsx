import * as THREE from 'three';
import React, { useRef, useState } from 'react'
import { ReactThreeFiber, Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DoubleSide } from 'three';

//Create an element that can be used with React and fetch useThree()
extend({ OrbitControls });

declare module JSX{
  interface IntrinsicElements{
      "group": any,
      "geometry": any,
      "lineBasicMaterial": any,
      "mesh": any,
      "octahedronGeometry": any,
      "meshBasicMaterial": any,
      "orbitControls": any 
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>
    }
  }
}

const Controls: React.FC = () => {
  const controlsRef : any = useRef<OrbitControls>();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef.current?.update()
  });

  return (
    <orbitControls 
      ref={controlsRef} 
      args={[camera,gl.domElement]} 
    />
  );
}

function HeartShape(){
  const x = -5, y = -10;
  const heartShape = new THREE.Shape();
  heartShape.moveTo( x + 5, y + 5 );
  heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
  heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
  heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
  heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
  heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
  heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
  return heartShape;
}
    
function Geometry(props: JSX.IntrinsicElements['mesh']) {
    
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (ref.current.rotation.x += .01))

    useFrame(state=>{
      //ref.current.rotation.x += .01
      ref.current.rotation.y += .01
      // ref.current.rotation
    })

    return (
      <mesh
        ref={ref}
        {...props}
        scale={clicked ? [.3,.3,.3] : [.2,.2,.2]}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <shapeGeometry args={[HeartShape()]}/>
        {/* <sphereGeometry args={[1,16,16,0,Math.PI * 3]} /> */}
        <meshStandardMaterial color={hovered ? 'blue' : 'red'} side={DoubleSide}/>
      </mesh>
    )
  }

/**
 * <axesHelper/>
 * X axis is RED, Y axis is GREEN, and Z axis is BLUE.
 */

const CubeBox = () =>{
    
    return(
    <Canvas
      style ={{background: 'black'}}
      camera={{position: [3, 3, 3]}}
    >
        <ambientLight />
        <pointLight position={[5,5,5]} intensity={3} />
        <pointLight position={[-3,-3,3]}/>
        <Controls/>
        <axesHelper args={[10]}/>
        <Geometry position={[0, 0, 0]} />
    </Canvas>
    )
}

export default CubeBox;