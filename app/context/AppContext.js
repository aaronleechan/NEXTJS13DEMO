import { createContext, useContext, useState } from 'react';
import { Geometry_data } from "../data/geometryData";

const AppContext = createContext();

export function AppWrapper(props) {

  const { children } = props;

  const [select,setSelect] = useState('BoxGeometry');

  const [geometry_data,setGeometry_data] = useState(Geometry_data[select]);

  const onChangeSelect = (value) => {
    setSelect(value);
    setGeometry_data(Geometry_data[value])
  }

  const updateGeometry = (value) =>{
    setGeometry_data(value)
  }

  return (
    <AppContext.Provider 
        value={{
          select: select,
          geometry_data: geometry_data,
          onChangeSelect: onChangeSelect,
          updateGeometry: updateGeometry
        }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}