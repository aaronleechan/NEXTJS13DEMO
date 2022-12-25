import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Background = () => {

    const {gl} = useThree();

    const texture = useTexture('./showRoom/autoshop.jpg');
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture);

    return(
        <primitive 
            attach='background' 
            object={formatted.texture} 
        />
    )
}

export default Background;