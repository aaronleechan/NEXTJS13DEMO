"use client";
import { useEffect } from "react";
import { Canvas, useThree } from '@react-three/fiber'
import AnimatedBox from './components/AnimatedBox';
import { OrbitControls, Stats  } from "@react-three/drei";


const HashLips = () => {

  let isTesting = true;

  return(
    <div style={{
      height: '60vh',
      width: '100vw',
    }}>

      <Canvas className="container">
        { isTesting && 
          <>
            <Stats/>
            <axesHelper visible={isTesting} args={[3]}/>
            <gridHelper visible={isTesting} args={[10, 10]}/>
          </>
        }

        <OrbitControls/>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox isTesting={isTesting}/>
      </Canvas>
    </div>

  )
};

export default HashLips;