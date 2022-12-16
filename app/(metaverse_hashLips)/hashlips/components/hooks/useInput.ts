import { useEffect, useState } from "react";

export const useInput = () => {
    const [input,setInput] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        shift: false,
        jump: false
    });

    const keys = {
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right",
        ShiftLeft: "shift",
        Space: "jump"
    }

    const findKey = (key: string) => keys[key];

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = findKey(e.code);
            if(key){
                setInput((prev) => ({...prev, [key]: true}));
            }
        }
        const handleKeyUp = (e: KeyboardEvent) => {
            const key = findKey(e.code);
            if(key){
                setInput((prev) => ({...prev, [key]: false}));
            }
        }
        document.addEventListener('keydown',handleKeyDown);
        document.addEventListener('keyup',handleKeyUp);

        // cleanup
        return () => {
            document.removeEventListener('keydown',handleKeyDown);
            document.removeEventListener('keyup',handleKeyUp);
        }
    },[])
    

    return input;
};