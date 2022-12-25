import { createContext, useContext, useState } from 'react';
import { Geometry_data } from "../data/geometryData";

const AppContext = createContext();

export function AppWrapper(props) {

  let testing = false;

  const { children } = props;

  const [select,setSelect] = useState('BoxGeometry');
  const [position,setPosition] = useState({x:0,y:0,z:0});
  const [geometry_data,setGeometry_data] = useState(Geometry_data[select]);
  const [ambientLight,setAmbientLight] = useState(true)
  const [pickLightColor,setPickLightColor] = useState("#fff")
  const [lightIntensity,setLightIntensity] = useState(1);
  const [cameraPos,setCameraPos] = useState({x:0,y:0,z:0});

  //MaterialController
  const [meshPhysicalMaterialController,setMeshPhysicalMaterialController] = useState({
    opacity: 1,
    
  })

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

  const updateToggleSwitch = (value) =>{
    setAmbientLight(value)
  }

  const updateLightColor = (value) =>{
    setPickLightColor(value);
  }

  const updateLightIntensity = (value) =>{
    setLightIntensity(value);
  }

  const updateCameraPos = (value) =>{
    setCameraPos(value)
  }

  const updateMeshPhysicalMaterialController = (value )=>{
    console.log(" ...updateMeshPhysicalMaterialController.. ",value)
  }

  return (
    <AppContext.Provider 
        value={{
          ambientLight: ambientLight,
          select: select,
          geometry_data: geometry_data,
          onChangeSelect: onChangeSelect,
          pickLightColor: pickLightColor,
          position: position,
          updateGeometry: updateGeometry,
          updatePosition: updatePosition,
          updateToggleSwitch: updateToggleSwitch,
          updateLightColor: updateLightColor,
          testing: testing,

          updateLightIntensity: updateLightIntensity,
          lightIntensity: lightIntensity,
          cameraPos: cameraPos,
          updateCameraPos: updateCameraPos,

          meshPhysicalMaterialController: meshPhysicalMaterialController,
          updateMeshPhysicalMaterialController: updateMeshPhysicalMaterialController
        }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}