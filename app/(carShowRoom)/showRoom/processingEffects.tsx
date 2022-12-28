import React from "react"
import { EffectComposer, DepthOfField, Bloom } from "@react-three/postprocessing";

const ProcessingEffects = () =>{
    return(
        <>
            <EffectComposer>
                <DepthOfField
                    focusDistance={0}
                    focalLength={0.01}
                    bokehScale={1}
                    height={480}
                />
                <Bloom luminanceThreshold={2} luminanceSmoothing={1} height={300} />
            </EffectComposer>
        </>
    )
}

export default ProcessingEffects;