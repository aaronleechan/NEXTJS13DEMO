import BoundingBox from "./boundingBox";
import Dragable from "./dragable";
import Model from "./model";
import { Physics } from '@react-three/cannon';

const Cars = () =>{
    return(
        <>
            <Dragable transformGroup>
                <BoundingBox
                    position={[0, 2, 0]}
                    offset={[0, -.2, .7]}
                    dims={[3, 2, 6.3]}
                >
                <Model
                    path={'/showRoom/tesla_model_3/scene.gltf'}
                    scale={new Array(3).fill(0.01)} 
                />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox
                    position={[8, 2, 0]}
                    offset={[0, -1, .3]}
                    dims={[3, 2, 7.4]}
                >
                <Model
                    path={'/showRoom/tesla_model_s/scene.gltf'}
                    scale={new Array(3).fill(0.013)} 
                />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox
                    position={[-8, 2, 0]}
                    offset={[0, 0, 0]}
                    dims={[2, 2.3, 6.8]}
                >
                <Model
                    path={'/showRoom/tesla_cybertruck/scene.gltf'}
                    scale={new Array(3).fill(12)}
                    rotation={[0, -Math.PI / 2, 0]} 
                />
                </BoundingBox>
            </Dragable>
        </>
    )
}

export default Cars;