const Floor = (props: any) => {
    return(
        <mesh {...props} rotation-x={Math.PI * -0.5}>
            <planeBufferGeometry args={[1000,1000]}/>
            <meshStandardMaterial color={"#458745"}/>
        </mesh>
    )
}

export default Floor;