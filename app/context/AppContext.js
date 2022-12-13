import { createContext, useContext, useState } from 'react';
import { Geometry_data } from "../data/geometryData";

const AppContext = createContext();

export function AppWrapper(props) {

  let testing = false;

  const { children } = props;

  const [select,setSelect] = useState('BoxGeometry');
  const [position,setPosition] = useState({x:0,y:0,z:0});

  const [geometry_data,setGeometry_data] = useState(Geometry_data[select]);

  const onChangeSelect = (value) => {
    setSelect(value);
    setGeometry_data(Geometry_data[value])
  }

  const updateGeometry = (value) =>{
    setGeometry_data(value)
  }

  const updatePosition = (value) =>{
    setPosition(value);
  }

  return (
    <AppContext.Provider 
        value={{
          select: select,
          geometry_data: geometry_data,
          onChangeSelect: onChangeSelect,
          updateGeometry: updateGeometry,
          position: position,
          updatePosition: updatePosition,
          testing: testing
        }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}