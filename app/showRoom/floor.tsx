import { TextureLoader } from "three"

const Floor = () =>{
    const texture = new TextureLoader().load('')
    return(
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                <planeBufferGeometry args={[10,10]}/>
                <meshStandardMaterial color={"green"}/>
        </mesh>
    )
}

export default Floor;