import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props: any) =>{

    const model: any = useLoader(
        GLTFLoader, 
        props.path
    );

    return(
        <primitive 
            object={model.scene} 
            {...props}
        />
    )
}

export default Model;