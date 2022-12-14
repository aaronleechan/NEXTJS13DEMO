import * as THREE from 'three';
import Main from './Main';
import React , { useRef } from 'react'


const CapsuleGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <capsuleGeometry args={args} />
        </Main>
    )
}

export default CapsuleGeometry