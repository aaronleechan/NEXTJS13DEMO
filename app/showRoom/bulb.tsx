const Bulb = (props: any) => {
    return(
        <mesh {...props}>
            <pointLight 
            castShadow
            shadow-mapSize-width={2**10}
            shadow-mapSize-height={2**10}
            shadow-radius={10}
        />
            <sphereBufferGeometry args={[0.2, 32, 32]}/>
            <meshStandardMaterial emissive="yellow"/>
        </mesh>
    )
}

export default Bulb;