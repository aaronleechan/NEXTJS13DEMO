'use client';
import { Canvas } from "@react-three/fiber";
import { Environment, useEnvironment } from "@react-three/drei";
import { OrbitControls  } from "@react-three/drei";
import { useControls } from 'leva';
import { Suspense, useState, useTransition } from "react";

const data = {
    "New York": "/custom/newYork.hdr",
    "Miami": "/custom/miami.hdr"
}

const Env = () =>{

    const [inTransition, startTransition] = useTransition()

    const [preset, setPreset] = useState("New York")

    const { blur } = useControls({
        blur: {value: 0, min: 0, max: 1},
        preset:{
            value: preset,
            options: ["New York", "Miami"],
            onChange: (value) => {
                startTransition(() => setPreset(value))
            }
        }
    })

    return(
        <Suspense fallback={"loading"}>
            <Environment files={data[preset]} background blur={blur}/>
        </Suspense>
    )
}

const UpdateEnv = () =>{


    const { rotateSpeed } = useControls({
        rotateSpeed: {value: 1, min: 0, max: 10}
    })

    return(
        <Canvas
            style={{
                height: '100vh',
                width: '100vw'
            }}
        >
            <Env/>
            <OrbitControls autoRotate autoRotateSpeed={rotateSpeed} />
        </Canvas>
    )
}

export default UpdateEnv;