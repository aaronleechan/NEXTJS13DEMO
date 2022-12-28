import Bulb from "./bulb";

const Lights = () =>{
    return(
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[6,3,0]}/>
            <Bulb position={[0,4,0]}/>
            <Bulb position={[10,4,0]}/>
            <Bulb position={[-12,4,0]}/>
        </>
    )
}

export default Lights;