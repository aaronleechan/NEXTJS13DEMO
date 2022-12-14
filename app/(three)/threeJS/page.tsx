"use client";
import React, { useState } from 'react'
import RenderGeometry from './RenderGeometry';
import SelectComponent from '../../common/SelectComponent';
import ControllerGeometry from './control/ControllerGeometry';
import { AppWrapper } from '../../context/AppContext';
import PositionController from './control/positionController';
    

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
                    <PositionController/>
                    <SelectComponent />
                    <ControllerGeometry/>
                </>
                <RenderGeometry />
            </AppWrapper>
        </div>
    )
}

export default ThreeJS;