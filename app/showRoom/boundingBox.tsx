import { useBox } from "@react-three/cannon"
type BoundingBoxProps = {
    position?: number[],
    offset?: number[],
    dims?: number[],
    visible?: boolean,
    children?: any
}

type BoxProps = {
    mass?: number,
    args?: number[],
    position?: number[]
}
// @ts-ignore
const BoundingBox = ({
    position = [0,0,0],
    offset = [0,0,0],
    dims = [1,1,1],
    visible = false,
    children
}: BoundingBoxProps ) => {
    const [ref, api] = useBox(()=>({
            mass: 1, 
            // @ts-ignore comment
            args: dims, 
            // @ts-ignore comment
            position: position
        }))

    return (
        // @ts-ignore comment
        <group ref={ref} api={api}>
            {/* @ts-ignore */} 
            <mesh scale={dims} visible={visible}>
                <boxBufferGeometry />
                <meshPhysicalMaterial wireframe/>
            </mesh>
            {/* @ts-ignore */} 
            <group position={offset}>
                {children}
            </group>
        </group>
    )
}

export default BoundingBox;