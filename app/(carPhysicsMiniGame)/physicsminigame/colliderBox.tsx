import { useBox } from "@react-three/cannon";

const debug = false;

const ColliderBox = (props: any) => {

    const {position, scale} = props;

    useBox(() => ({
        args: scale,
        position,
        type: 'Static',
    }));

    return(
        debug && (
            <mesh position={position}>
                <boxGeometry args={scale}/>
                <meshBasicMaterial transparent={true} opacity={0.25}/>
            </mesh>
        )
    )
}

export default ColliderBox;