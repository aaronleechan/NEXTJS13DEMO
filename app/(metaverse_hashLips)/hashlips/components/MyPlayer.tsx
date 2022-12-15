import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";


const MyPlayer = () =>{
    const model = useGLTF("./models/player.glb");
    const { actions } = useAnimations(model.animations, model.scene);

    model.scene.scale.set(0.5, 0.5, 0.5);

    console.log({" actions ": actions })

    model.scene.traverse((object)=>{
        if(object.isMesh){
            object.castShadow = true;
        }
    })


    console.log({" My Player ": model })
    useEffect(()=>{
        console.log({" primitive ": actions.idle})
        actions?.walking?.play();
    },[])

    return <primitive object={model.scene}/>;
}

export default MyPlayer;