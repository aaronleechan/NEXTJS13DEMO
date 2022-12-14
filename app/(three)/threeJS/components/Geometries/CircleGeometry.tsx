import * as THREE from 'three';
import Main from './Main';
import React , { useRef } from 'react'


const CircleGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <circleGeometry args={args} />
        </Main>
    )
}

export default CircleGeometry