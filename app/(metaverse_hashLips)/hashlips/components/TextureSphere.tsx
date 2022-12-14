import { useTexture, TransformControls } from "@react-three/drei";



const TextureSphere = () => {

    const map = useTexture("./textures/metal_plate_diff_1k.png");
    const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
    const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
    const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");
  
    return(
      <TransformControls>
        <mesh scale={[0.5, 0.5, 0.5]} position={[0,1,0]} castShadow>
          <sphereGeometry/>
          <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
        </mesh>
      </TransformControls>
    )
  }

  export default TextureSphere;