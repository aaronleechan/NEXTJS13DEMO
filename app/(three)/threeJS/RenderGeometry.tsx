import * as FIBERTHREE from './components/Geometries';
import { useAppContext } from '../../context/AppContext';

const RenderGeometry = (props: any) =>{

    const { select, geometry_data } = useAppContext();

    const getArgs = Object.entries(geometry_data).map((k: any) => k[1].value);

    const renderGeometry = function uiGeometry(){
        switch(select){
            case 'BoxGeometry':
                return <FIBERTHREE.BoxGeometry args={getArgs}/>
            case 'CapsuleGeometry':
                return <FIBERTHREE.CapsuleGeometry args={getArgs}/>
            case 'CircleGeometry':
                return <FIBERTHREE.CircleGeometry args={getArgs}/>
            case 'ConeGeometry':
                return <FIBERTHREE.ConeGeometry args={getArgs}/>
            case 'CylinderGeometry':
                return <FIBERTHREE.CylinderGeometry args={getArgs}/>
            case 'DodecahedronGeometry':
                return <FIBERTHREE.DodecahedronGeometry args={getArgs}/>
            case 'TorusGeometry':
                return <FIBERTHREE.TorusGeometry args={getArgs}/>
            case 'TorusKnotGeometry':
                return <FIBERTHREE.TorusKnotGeometry args={getArgs}/>
            default: 
                return <FIBERTHREE.BoxGeometry args={getArgs}/>
        }
    }

    return renderGeometry();
}

export default RenderGeometry;