'use client';

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { BehaviorSubject, combineLatest, from, of } from "rxjs";
import { startWith,catchError,map } from 'rxjs/operators';


//https://data.ny.gov/resource/d6yy-54nr.json Lottery JSON FILE
// export const lotteryUrl = 'https://data.ny.gov/resource/d6yy-54nr.json'

//Lib 
const useObservedValue = (value: any): any => {
  const subject = React.useRef(new BehaviorSubject(value));

  useEffect(()=>{
    subject.current.next(value);
  },[value])

  return React.useMemo(()=> subject.current, [subject]);
}

const useObservable = (observable : any): any => {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    const subscription = observable.subscribe((v:any) => {
      setValue(v);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
};


// const newApi = (name: string) =>{
//   return `https://random-data-api.com/api/${name}/random_${name}`
// }

//get Name
function fetchSomeName(): any {
  new Promise( (resolve : any) : any =>{
    setTimeout(()=>{
      resolve("Aaron Chan");
    }, 2000)
  })
}

const name$ = from(["Aaron Chan","Phyo Aung", "Myat Noe"]).pipe(
  startWith("Aaron"),
  catchError(()=> of("Mololongo"))
);

const Greeting = ({ greet = "Hello" }): any => {
  const greet$ = useObservedValue(greet);

  const greeting$ = React.useMemo(
    () =>
      combineLatest([greet$, name$]).pipe(
        map(([greet, name]: any ) => `${greet}, ${name}!`)
      ),
    [greet$]
  );

  console.log({" greeting$ ": greeting$})

  const greeting = useObservable(greeting$);

  return <p>{greeting}</p>;
};

const Rxjs = () => {

  const [greet,setGreet] = useState('Howdy"');

  useEffect(()=>{
    setTimeout(()=>{
      setGreet('Ke paha');
    }, 3000);
  },[]);
  
  return(
      <Box>
          <Typography>RxJS Playground</Typography>
          
      </Box>
  )
}



export default Rxjs;
