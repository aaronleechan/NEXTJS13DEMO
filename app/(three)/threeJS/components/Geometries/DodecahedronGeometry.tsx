import Main from './Main';
import React from 'react'

const DodecahedronGeometry = (props: any) =>{

    const { args } = props;

    return(
        <Main>
            <dodecahedronGeometry args={args} />
        </Main>
    )
}

export default DodecahedronGeometry;