import { TextureLoader } from "three"
import { useBox } from "@react-three/cannon"

const Floor = (props: any) =>{

    const [ref, api] = useBox(() => ({args: [80, 1, 30],...props}))

    return(
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={[80, 1, 30]}/>
            <meshPhysicalMaterial transparent opacity={0.2}/>
        </mesh>
    )
}

export default Floor;