import React from "react"
import { useState } from "react"
import { useAppContext } from "../../../context/AppContext"
import { SketchPicker } from 'react-color';

const LightController = () => {

    const { ambientLight, updateToggleSwitch, pickLightColor, updateLightColor, lightIntensity,updateLightIntensity  } = useAppContext();

    return(
        <div>
            <label className="switch"> Ambilent Light
                <input type="checkbox" checked={ambientLight} onChange={(e)=>updateToggleSwitch(e.target.checked)}/>
                <span className="slider"></span>
            </label>
            <SketchPicker disableAlpha ={true}
                 color={ pickLightColor }
                 onChangeComplete={ (co)=> updateLightColor(co.hex) }
            />
            <label>
                Light Intensity
                <input name={"lightIntensity"} type="range" min={-10} max={20} step={0.1} value={lightIntensity} onChange={(e)=>updateLightIntensity(e.target.value)}/>{lightIntensity}
            </label>

        </div>
    );
}

export default LightController;