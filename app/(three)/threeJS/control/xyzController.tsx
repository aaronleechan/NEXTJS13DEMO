type Props = {
    x: number;
    xOnchange: (e: any) => void;
    y: number;
    yOnchange: (e: any) => void;
    z: number;
    zOnchange: (e: any) => void;
}

const XYZcontroller = (props: Props) => {

    const {
           x, xOnchange,
           y, yOnchange, 
           z, zOnchange
        } = props;  

    return(
        <div>
            <a>
                <label>X {x}: </label>
                <input name={"x"} type="range" min={-10} max={10} value={x} onChange={xOnchange}/>
            </a>

            <a>
                <label>Y {y}: </label>
                <input name={"y"} type="range" min={-10} max={10} value={y} onChange={yOnchange}/>
            </a>

            <a>
                <label>Z {z}: </label>
                <input name={"z"} type="range" min={-10} max={10} value={z} onChange={zOnchange}/>
            </a>
        </div>
    )

}

export default XYZcontroller;
