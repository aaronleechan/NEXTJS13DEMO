"use client";
import { Canvas } from '@react-three/fiber';
import Ground from './components/Ground';
import Lights from './components/Lights';
import { OrbitControls , Stats } from "@react-three/drei";
import MyPlayer from './components/MyPlayer';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Tree from './components/Tree';


const HashLips = () => {

  let isTesting = false;

  return(
    <div style={{height: '60vh', width: '100vw'}}>

      <Canvas>
        
        { 
          isTesting && 
          <>
            <Stats/>
            <axesHelper visible={isTesting} args={[3]}/>
            <gridHelper visible={isTesting} args={[10, 10]}/>
          </>
        }

        {/* <OrbitControls/> */}
        <Tree boundry={100} count={50}/>
        <Lights/>
        <MyPlayer/>
        <Ground/>
      </Canvas>
      
    </div>
  )
};

export default HashLips;