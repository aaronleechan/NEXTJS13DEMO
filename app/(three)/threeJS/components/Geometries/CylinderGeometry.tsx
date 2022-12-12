import Main from './Main';
import React from 'react'

const CylinderGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <cylinderGeometry args={args} />
        </Main>
    )
}

export default CylinderGeometry;