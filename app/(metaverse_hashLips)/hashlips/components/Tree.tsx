import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import THREE, { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type treeType = {
    position: {x: number, y: number, z: number};
    box: number;
}

type props = {
    boundry: number;
    count: number;
}

const Tree: React.FC<props> = ({ boundry,count }) => {
    const model = useLoader(GLTFLoader, "./models/tree.glb");
    const [tree,setTree] = useState<treeType[]>([])

    model.scene.traverse((object)=>{
        if ((object as Mesh).isMesh) { 
            object.castShadow = true;
         }
    })

    const boxIntersect = (
        minTargetX: number, maxTargetX: number, 
        minTargetZ: number, maxTargetZ: number, 
        minChildX: number, maxChildX: number, 
        minChildZ: number, maxChildZ: number
    ) => {
        return(
            (minTargetX <= maxChildX && maxTargetX >= minChildX) &&
            (minTargetZ <= maxChildZ && maxTargetZ >= minChildZ)
        )
    }

    const isOverlapping = (index: number, tree: any, trees: any[]) => {
        const minTargetX = tree.position.x - tree.box / 2;
        const maxTargetX = tree.position.x + tree.box / 2;
        const minTargetZ = tree.position.z - tree.box / 2;
        const maxTargetZ = tree.position.z + tree.box / 2;

        for(let i = 0; i < index; i++){
            let minChildX = trees[i].position.x - trees[i].box / 2;
            let maxChildX = trees[i].position.x + trees[i].box / 2;
            let minChildZ = trees[i].position.z - trees[i].box / 2;
            let maxChildZ = trees[i].position.z + trees[i].box / 2;
            if(
                boxIntersect(
                    minTargetX,maxTargetX,
                    minTargetZ,maxTargetZ,
                    minChildX,maxChildX,
                    minChildZ,maxChildZ
                )
            ){
                return true;
            }
        }
        return false;
    }

    const newPosition = (box: number, boundry: number) => {
        return(
            boundry / 2 - 
            box / 2 - 
            (boundry - box) * (Math.round(Math.random()* 1000) / 1000)
        );
    }

    const updatePosition = (treeArray: treeType[], boundary: number) => {
        treeArray.forEach((tree,index)=>{
            do{
                tree.position.x = newPosition(tree.box,boundary);
                tree.position.z = newPosition(tree.box,boundary);
            }while(isOverlapping(index,tree,treeArray))
        })
        setTree(treeArray)
    }

    useEffect(()=>{
        const tempTree: treeType[] = [];
        for(let i = 0; i < count; i++){
            tempTree.push({ position: {x: 0, z: 0}, box: 1})
        }
        updatePosition(tempTree,boundry)
    },[boundry,count])

    return (
        <>
            <group rotation={[0,4,0]}>
                {
                        tree.map((tree,index)=>{
                            return (
                                <object3D key={index} position={[tree.position.x,0,tree.position.z]}>

                                    <mesh scale={[tree.box, tree.box, tree.box]}>
                                        <boxGeometry/>
                                        <meshStandardMaterial color="blue" wireframe/>
                                    </mesh>

                                    <primitive object={model.scene.clone()} />
                                </object3D>
                            )
                    })
                }
            </group>

        </>
    )
}

export default Tree;