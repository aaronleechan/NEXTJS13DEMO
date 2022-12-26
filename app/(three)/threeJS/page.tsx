"use client";
import React, { useState } from 'react'
import RenderGeometry from './RenderGeometry';
import SelectComponent from '../../common/SelectComponent';
import ControllerGeometry from './control/ControllerGeometry';
import CameraController from './control/cameraController';
import { AppWrapper } from '../../context/AppContext';
import PositionController from './control/positionController';
import AmbientLightController from './control/ambientLightController';
import Collapsible from 'react-collapsible';
    

const ThreeJS = () =>{

    return(
        <div style={{
            height: '60vh',
            width: '100vw',
        }}>
            <AppWrapper>
                <>
                    <h1>Geometries</h1>
                    <div>
                        <p>Axis Helper : 
                            <strong> X </strong> axis is <a style={{color: "red"}}>RED</a>, 
                            <strong> Y </strong> axis is <a style={{color: "green"}}>GREEN</a>, and 
                            <strong> Z </strong> axis is <a style={{color: "blue"}}>BLUE</a>.
                        </p>
                    </div>
                    <SelectComponent />

                    <Collapsible trigger="Position Controller">
                        <PositionController/>
                    </Collapsible>

                    <Collapsible trigger="Geometry Box Controller">
                        <ControllerGeometry/>
                    </Collapsible>

                    <Collapsible trigger="Ambient Light Controller ">
                        <AmbientLightController/>
                    </Collapsible>

                    <Collapsible trigger="Camera Controller">
                        <CameraController />
                    </Collapsible>

                </>
                <RenderGeometry />
            </AppWrapper>
        </div>
    )
}

export default ThreeJS;