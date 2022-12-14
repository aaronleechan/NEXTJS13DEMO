import Main from './Main';
import React from 'react'

const TorusKnotGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <torusKnotGeometry args={args} />
        </Main>
    )
}

export default TorusKnotGeometry;