
const SliderInput = (props:any) => {
    
    const {label,value,max,min,name,onChange} = props;

    return(
        <a>
            <label>{label} :</label>
            <input name={name} type="range" min={min} max={max} value={value} onChange={onChange}/>
        </a>
    )
}

export default SliderInput;