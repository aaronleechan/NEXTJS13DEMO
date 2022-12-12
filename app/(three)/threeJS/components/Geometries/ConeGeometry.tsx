import Main from './Main';
import React , { useEffect, useRef } from 'react'
import { useAppContext } from '../../../../context/AppContext';
import OrbitController from '../../control/orbitController';


const ConeGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <coneGeometry args={args} />
        </Main>
    )
}

export default ConeGeometry;