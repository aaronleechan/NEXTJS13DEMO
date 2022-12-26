import { TextureLoader } from "three"
import { useBox } from "@react-three/cannon"

const Floor = (props: any) =>{

    const [ref, api] = useBox(() => ({args: [20, 1, 10],...props}))

    return(
        <mesh ref={ref} {...props}>
            <boxBufferGeometry args={[20, 1, 10]}/>
            <meshPhysicalMaterial/>
        </mesh>
    )
}

export default Floor;