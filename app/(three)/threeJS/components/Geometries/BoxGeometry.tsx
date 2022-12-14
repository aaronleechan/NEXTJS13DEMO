import * as THREE from 'three';
import Main from './Main';
import React , { useEffect, useRef } from 'react'
import { useAppContext } from '../../../../context/AppContext';
import OrbitController from '../../control/orbitController';


const BoxGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <boxGeometry args={args} />
        </Main>
    )
}

export default BoxGeometry
