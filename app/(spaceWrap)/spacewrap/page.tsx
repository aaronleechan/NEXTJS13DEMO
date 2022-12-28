'use client';
import { useState } from "react";
import RippleWrap from "./ripple";

const LoadingPage = () =>{
    return (
        <div>
            <h1>In Progress </h1>
        </div>
    )
}

const SelectWrap = (props: any) =>{
    const {val} = props;
    function selectVariable(){
        switch(val){
            case 'RippleWrap':
                return <RippleWrap />
            default:
                return <LoadingPage />
        }
    }
    return selectVariable();
}

const WrapPage = () =>{
    const [select,setSelect] = useState('RippleWrap');

    const updateValue = (e: any) =>{
        console.log({" e.target.value ": e.target.value})
    }

    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            background: 'black'
        }}>
            <div style={{
                position: 'absolute',
                zIndex: 1,
                textAlign: 'center',
                width: '100%',
                top: '20px',
            }}>
                <select style={{height: '30px',width: '100px'}} value={select} onChange={updateValue}>
                    <option value="RippleWrap">Ripple</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <SelectWrap val={select}/>
        </div>
    )
}

export default WrapPage;