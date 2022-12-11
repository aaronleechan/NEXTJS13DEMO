import React, { useRef } from 'react'
import { useThree, useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//Create an element that can be used with React and fetch useThree()
extend({ OrbitControls });

const OrbitController: React.FC = () => {
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

  export default OrbitController;