import Main from './Main';
import React from 'react'

const TorusGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <torusGeometry args={args} />
        </Main>
    )
}

export default TorusGeometry;