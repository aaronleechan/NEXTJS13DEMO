import state from './state';
import { useState } from 'react';


  
const CameraButton = () =>{
    const [currentState,setCurrentState] = useState(2);

    const sets = {
        //Cyber Truck
        1: {
            cameraPos: [-12,2,4],
            target: [-1,1,1],
            name: "Object_5"
        },
        //Model 3
        2: {
            cameraPos: [3,2,4],
            target: [1,1,1],
            name: "Capot001_CAR_PAINT_0"
        },
        //Model S
        3:{
            cameraPos: [12,2,4],
            target: [1,1,1],
            name: "object005_bod_0"
        }
    }
    
    const handleClick = (num: number) => {
        if(currentState == 3 && num == 1){
            return;
        }else if(currentState == 1 && num == -1){
            return;
        }
        let current = currentState + num;
        console.log({" current ": current})
        setCurrentState(current);
        {/* @ts-ignore */} 
        state.cameraPos.set(...sets[current].cameraPos)
        {/* @ts-ignore */} 
        state.target.set(...sets[current].target)
        state.activeMeshName = sets[current].name;
        state.shouldUpdate = true;
    }

    return(
        <>
            {/* @ts-ignore */} 
            <button 
                onClick={(e)=>handleClick(-1)}
                style= {{
                    left: '90vh',
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '30vh',
                    height: '30px',
                    width: '30px',
                    background: 'white',
                    textAlign: 'center',
                    fontSize: 22,
                    borderRadius: '100%',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    border: '1px solid black',
                    opacity: 0.7
                }}
            >

                {'<'}
            </button>
            <button
                onClick={()=>handleClick(1)} 
                style={{
                    right: '90vh',
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '30vh',
                    height: '30px',
                    width: '30px',
                    background: 'white',
                    textAlign: 'center',
                    fontSize: 22,
                    borderRadius: '100%',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    border: '1px solid black',
                    opacity: 0.7
                }}
            >
                {'>'}
            </button>
        </>
    )
}

export default CameraButton;