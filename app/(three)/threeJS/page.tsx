"use client";
import React, { useState } from 'react'
import RenderGeometry from './RenderGeometry';
import SelectComponent from '../../common/SelectComponent';
import ControllerGeometry from './ControllerGeometry';
import { AppWrapper } from '../../context/AppContext';
    

const ThreeJS = () =>{

    return(
        <div style={{
            height: '60vh',
            width: '100vw',
        }}>
            <AppWrapper>
                <>
                    <h1>Geometries</h1>
                    <SelectComponent />
                    <ControllerGeometry/>
                </>
                <RenderGeometry />
            </AppWrapper>
        </div>
    )
}

export default ThreeJS;